import { Component, Input, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ProductService } from '../../services/service';
import { Store } from '@ngrx/store';
import { AppSettings } from 'src/app/app.constant';
import * as fromRoot from '../../../core/reducers';
import * as fromProduct from '../../reducers';
import * as productActions from '../../actions';
import * as userActions from '../../../core/actions/user';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/customer/services/customer';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { getPrice, totalPrice } from 'src/app/shared/utils';
import {StripeCheckoutLoader, StripeCheckoutHandler} from 'ng-stripe-checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.html'
})
export class CheckoutComponent implements OnInit, OnDestroy, AfterViewInit {

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
    credit_card: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
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
  public _shippings;

  private observers;
  private stripeCheckoutHandler: StripeCheckoutHandler;

  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private appSettings: AppSettings,
    private store: Store<fromRoot.AppState>,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder,
    private stripeCheckoutLoader: StripeCheckoutLoader
  ) {
    this.observers = this.store.select(fromProduct.selectAllCartItems).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      if(!this.cartItems || !this.cartItems.length && this.order.status!=3){
        this.router.navigate(['/cart/'], {relativeTo: this.route});
      }
    });
    this.store.dispatch(new productActions.LoadCartItems({}));
    if(!this.appSettings.isLoggedIn){
      this.appSettings.navigateToCheckOut = true;
      this.router.navigate(['/customer/login/'],{relativeTo: this.route});
    }
    this.getPrice = getPrice;
  }

  ngOnInit(){
    this.observers.add(forkJoin(
      this.productService.loadShippings(),
      this.customerService.getShippingRegions()
    ).subscribe((data: any) => {
      if(data){
        this.shippings = data[0];
        this.shipping_regions = data[1];
        this.observers.add(this.store.select(fromRoot.selectorUser).subscribe((cust: Customer)=>{
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
            this.paymentForm.get('credit_card').setValue(this.customer.credit_card);
          }
        }));
      }
    }));
    this.deliveryForm.get('shipping').valueChanges.subscribe((value: number) => {
      this.order.shipping = value;
    });
    this.deliveryForm.get('first_name').valueChanges.subscribe((value: string) => {
      this.customer.user.first_name = value;
    });
    this.deliveryForm.get('last_name').valueChanges.subscribe((value: string) => {
      this.customer.user.last_name = value;
    });
    this.deliveryForm.get('city').valueChanges.subscribe((value: string) => {
      this.customer.city = value;
    });
    this.deliveryForm.get('postal_code').valueChanges.subscribe((value: string) => {
      this.customer.postal_code = value;
    });
    this.deliveryForm.get('country').valueChanges.subscribe((value: string) => {
      this.customer.country = value;
    });
    this.deliveryForm.get('region').valueChanges.subscribe((value: string) => {
      this.customer.region = value;
    });
    this.deliveryForm.get('address_1').valueChanges.subscribe((value: string) => {
      this.customer.address_1 = value;
    });
    this.deliveryForm.get('address_2').valueChanges.subscribe((value: string) => {
      this.customer.address_2 = value;
    });
    this.deliveryForm.get('shipping_region').valueChanges.subscribe((value: any) => {
      this.customer.shipping_region = value;
      if(value){
        this._shippings = this.shippings.filter((s:Shipping)=>s.shipping_region.id==value);
        this.deliveryForm.get('shipping').setValue(this._shippings[0].id);
      }
    });
    this.paymentForm.get('credit_card').valueChanges.subscribe((value: string) => {
      this.customer.credit_card = value;
    });
  }

  ngAfterViewInit(){
    this.stripeCheckoutLoader.createHandler({
      key: this.appSettings.STRIPE_API_KEY
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });
  }

  ngOnDestroy() {
    this.observers.unsubscribe();
  }

  pay(){
    this.order.status = 2;
    this.stripeCheckoutHandler.open({
      amount: parseFloat(this.grandTotal())*100,
      email: this.customer.user.email,
      currency: 'USD',
      name: this.customer.user.first_name+' '+this.customer.user.last_name
    }).then((token)=>{
      this.observers.add(this.productService.createOrder({token: token.id, order: this.order}).subscribe((data: Order)=>{
        this.order = data;
        this.store.dispatch(new productActions.EmptyCart({}));
      }, (error) => {
        this.order.status = 1;
        throw(error);
      }));
    }, (error)=>{
      if(error!='stripe_closed'){
        console.log(error);
      }
      this.order.status = 1;
    });
  }

  next(){
    this.observers.add(this.customerService.saveProfile(this.customer).subscribe((data)=>{
      this.store.dispatch(new userActions.UpdateUser(data));
      this.order.status = 1;
    }));
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
