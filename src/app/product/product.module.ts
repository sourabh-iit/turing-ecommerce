import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductRoutingModule } from './product.router';
import { ProductService } from './services/service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './reducers';
import { ProductionEffects } from './effects';
import { ProductComponent } from './components/product/product';
import { ProductsComponent } from './components/products/products';
import { CartComponent } from './components/cart/cart';
import { CoreModule } from '../core/core.module';
import { ProductDetailsComponent } from './components/productdetails/productdetails';
import { CheckoutComponent } from './components/checkout/checkout';
import { CustomerModule } from '../customer/customer.module';
import { OrderDetailsComponent } from './components/orderdetail/order';
import { OrdersComponent } from './components/orders/orders';
import { SharedModule } from '../shared/shared.module';
import { ReviewCreateComponent } from './components/reviews/create';
import { ReviewsComponent } from './components/reviews/reviews';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    OrderDetailsComponent,
    OrdersComponent,
    ReviewCreateComponent,
    ReviewsComponent
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule,
    SharedModule,
    NgbModule,
    CustomerModule,
    ProductRoutingModule,
    StoreModule.forFeature('productStore', fromProduct.reducer),
    EffectsModule.forFeature([ProductionEffects])
  ],
  providers: [
    ProductService,
    DatePipe
  ],
  entryComponents: [
  ]
})
export class ProductModule { }
