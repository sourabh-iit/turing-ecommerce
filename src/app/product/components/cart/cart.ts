import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/service';
import { Store } from '@ngrx/store';
import { AppSettings } from 'src/app/app.constant';
import * as fromRoot from '../../../core/reducers';
import * as fromProduct from '../../reducers';
import * as productActions from '../../actions';
import { ToastrService } from 'ngx-toastr';
import { totalPrice, getPrice, joinAttributes } from 'src/app/shared/utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.html'
})
export class CartComponent implements OnInit {

  public STATIC_URL: string;
  public cartItems: CartItem[];
  public user: User;
  public getPrice;
  public joinAttributes;

  constructor(
    private productService: ProductService,
    private appSettings: AppSettings,
    private store: Store<fromRoot.AppState>,
    private toastr: ToastrService
  ) {
    this.STATIC_URL = this.appSettings.STATIC_URL;
    this.store.select(fromProduct.selectAllCartItems).subscribe((items: CartItem[])=>{
      this.cartItems = items;
    });
    this.getPrice = getPrice;
    this.joinAttributes = joinAttributes;
  }

  ngOnInit(){
    this.store.dispatch(new productActions.LoadCartItems({}));
  }

  public saveForLater(item: CartItem){
    this.productService.updateCartItem(item, {
      buy_now: false
    }).subscribe((it: CartItem)=>{
      this.store.dispatch(new productActions.UpdateCartItem({
        id: it.id,
        changes: it
      }));
    });
  }

  public removeItem(item: CartItem){
    this.productService.removeItem(item).subscribe(()=>{
      this.store.dispatch(new productActions.RemoveCartItem({id: item.id}));
      this.toastr.success('Item successfully removed from cart','Removed')
    });
  }

  public updateCart(){
    this.productService.updateCart(this.cartItems).subscribe((items: CartItem[])=>{
      for(let item of items)
        this.store.dispatch(new productActions.UpdateCartItem({
          id: item.id,
          changes: item
        }));
      this.toastr.success('Shopping cart updated successfully','Saved')
    });
  }

  public moveToCart(item: CartItem){
    this.productService.updateCartItem(item, {
      buy_now: true
    }).subscribe((it: CartItem)=>{
      this.store.dispatch(new productActions.UpdateCartItem({
        id: it.id,
        changes: it
      }));
    });
  }

  public proceedToCheckout(){

  }

  totalPrice(){
    return totalPrice(this.cartItems);
  }

  public getItems(value: boolean){
    return this.cartItems.filter(item => item.buy_now==value);
  }

  createOrder(){

  }

}
