import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/service';
import { Store } from '@ngrx/store';
import { AppSettings } from 'src/app/app.constant';
import * as fromRoot from '../../../core/reducers';
import * as fromProduct from '../../reducers';
import * as productActions from '../../actions';
import * as userActions from '../../../core/actions/user';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer/services/customer';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { getPrice, totalPrice } from 'src/app/shared/utils';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html'
})
export class CheckoutComponent implements OnInit, OnDestroy {

  public shippings: Shipping[];
  public shipping_regions: Array<{id: number; shipping_region: string;}>;
  public deliveryForm: FormGroup = this.builder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    city: ['', Validators.required],
    postal_code: ['', Validators.required],
    country: ['', Validators.required],
    address_1: ['', Validators.required],
    address_2: ['', Validators.required],
    region: ['', Validators.required],
    shipping_region: ['', Validators.required],
    shipping: [null, [Validators.required]]
  });
  public order: Order = {
    status: 0,
    shipping: 1
  };
  public customer: Customer;
  public cartItems: CartItem[];
  public paymentForm: FormGroup = this.builder.group({
    name: ['', Validators.required],
    card_number: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
    cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
    expiry_date: ['', [Validators.required, (control: AbstractControl): {[key: string]: any} | null => {
        let today = new Date(Date.now());
        let date = control.value;
        if((today.getFullYear()<date.year) || (today.getFullYear()===date.year && today.getMonth()+1<date.month) || 
          (today.getFullYear()===date.year && today.getMonth()+1===date.month && today.getDate()<=date.day))
          return null
        return {invalid: true};
      }]
    ]
  });
  public getPrice;

  private observers;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private appSettings: AppSettings,
    private store: Store<fromRoot.AppState>,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {
    this.store.select(fromProduct.selectAllCartItems).subscribe((items: CartItem[]) => {
      this.cartItems = items;
    });
    this.store.dispatch(new productActions.LoadCartItems({}));
    if(!this.appSettings.isLoggedIn)
      this.router.navigate(['/customer/login/'],{relativeTo: this.route});
    this.getPrice = getPrice;
  }

  ngOnInit(){
    forkJoin(
      this.productService.loadShippings(),
      this.customerService.getShippingRegions()
    ).subscribe((data: any) => {
      if(data){
        this.shippings = data[0];
        this.shipping_regions = data[1];
        this.store.select(fromRoot.selectorUser).subscribe((cust: Customer)=>{
          if(cust){
            this.customer = cust;
            const values = {
              first_name: this.customer.user.first_name,
              last_name: this.customer.user.last_name,
              city: this.customer.city,
              postal_code: this.customer.postal_code,
              country: this.customer.country,
              address_1: this.customer.address_1,
              address_2: this.customer.address_2,
              region: this.customer.region,
              shipping: this.order.shipping?this.order.shipping:this.shippings[0].id,
              shipping_region: this.customer.shipping_region?this.customer.shipping_region:this.shipping_regions[0].id
            }
            this.deliveryForm.setValue(values);
            this.paymentForm.get('card_number').setValue(this.customer.credit_card);
          }
        });
      }
    });
    this.deliveryForm.get('shipping').valueChanges.subscribe((value: number) => {
      this.order.shipping = value;
    });
    this.paymentForm.get('card_number').valueChanges.subscribe((value: string) => {
      this.customer.credit_card = value;
    });
  }

  ngOnDestroy() {

  }

  pay(){
    forkJoin(
      this.customerService.saveProfile(this.customer),
      this.productService.createOrder(this.order)
    ).subscribe((data: any) => {
      this.store.dispatch(new userActions.UpdateUser(data[0]));
      this.order = data[1];
      this.store.dispatch(new productActions.EmptyCart({}));
    });
  }

  back(){
    if(this.order.status===0)
      this.router.navigate(['/cart/'], {relativeTo: this.route});
    else
      this.order.status -= 1;
  }

  public getItems(value: boolean){
    return this.cartItems.filter(item => item.buy_now==value);
  }

  totalPrice(){
    return totalPrice(this.cartItems);
  }

  grandTotal(){
    let grandTotal = parseFloat(this.totalPrice())+parseFloat(this.getShipping().shipping_cost);
    return grandTotal.toFixed(2);
  }

  getShipping(){
    return this.shippings.find(shipping => this.order.shipping==shipping.id);
  }

  public formValid(){
    if(this.order.status===0)
      return this.deliveryForm.valid;
    else if(this.order.status===1)
      return true;
    else if(this.order.status===2)
      return this.paymentForm.valid;
  }

}
