import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/service';
import { Store } from '@ngrx/store';
import { AppSettings } from 'src/app/app.constant';
import * as fromRoot from '../../../core/reducers';
import * as productActions from '../../actions';
import * as fromProduct from '../../reducers';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input() product: Product;
  @Input() isCartLoaded: boolean;
  public STATIC_URL: string;
  public attributes = {};

  constructor(
    private productService: ProductService,
    private appSettings: AppSettings,
    private store: Store<fromRoot.AppState>
  ) {
    this.STATIC_URL = this.appSettings.STATIC_URL;
  }

  ngOnInit(){
    for(let attribute in this.product.attributes){
      this.attributes[attribute] = this.product.attributes[attribute][0];
    }
    this.store.select(fromProduct.isCartLoaded).subscribe((value: boolean)=>{
      this.isCartLoaded = value;
    });
  }

  ngOnDestroy() {
  }

  getKeys(object){
    return Object.keys(object);
  }

  toFloat(value: string){
    return parseFloat(value);
  }

  addToCart(buy_now: boolean){
    const item: CartItem = {
      attributes: JSON.stringify(this.attributes),
      product: this.product,
      buy_now: buy_now
    }
    this.productService.addToCart(item).subscribe((item: CartItem)=>{
      if(this.isCartLoaded){
        if(item.quantity>1){
          this.store.dispatch(new productActions.UpdateCartItem({
            id: item.id,
            changes: {
              quantity: item.quantity
            }
          }));
        } else {
          this.store.dispatch(new productActions.AddCartItem(item));
        }
      }
    });
  }

}
