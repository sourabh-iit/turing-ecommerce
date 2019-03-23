import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/service';
import { AppSettings } from 'src/app/app.constant';
import { Router, ActivatedRoute } from '@angular/router';
import { joinAttributes } from 'src/app/shared/utils';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order.html'
})
export class OrderDetailsComponent {

  private orderId: number;

  public order: Order;
  public joinAttributes;

  constructor(
    private productService: ProductService,
    private appSettings: AppSettings,
    private router: Router,
    private route: ActivatedRoute,
    private date: DatePipe
  ) {
    if(!this.appSettings.isLoggedIn)
      this.router.navigate(['/customer/login/'],{relativeTo: this.route});
    this.orderId = this.route.snapshot.params.orderId;
    this.productService.loadOrder(this.orderId).subscribe((order: Order)=>{
      this.order = order;
    });
    this.joinAttributes = joinAttributes;
  }

  encodeURI(str: string){
    return encodeURI(str);
  }

  shippedOn(shipped_on){
    if(!shipped_on)
      return 'Not shipped yet';
    return this.date.transform(shipped_on, 'medium');
  }

  rateAndReview(product) {
    return '';
  }

}
