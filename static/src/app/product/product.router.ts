import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products';
import { CartComponent } from './components/cart/cart';
import { ProductDetailsComponent } from './components/productdetails/productdetails';
import { CheckoutComponent } from './components/checkout/checkout';
import { OrdersComponent } from './components/orders/orders';
import { OrderDetailsComponent } from './components/orderdetail/order';
import { ReviewCreateComponent } from './components/reviews/create';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:productName/:productId',
    component: ProductDetailsComponent
  },
  {
    path: 'department/:department/products',
    component: ProductsComponent
  },
  {
    path: 'department/:department/category/:category/products',
    component: ProductsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'orders/:orderId',
    component: OrderDetailsComponent
  },
  {
    path: ':productName/write-review/:orderDetailId',
    component: ReviewCreateComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class ProductRoutingModule {

}
