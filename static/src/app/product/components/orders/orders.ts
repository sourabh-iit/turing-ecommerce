import { Component } from '@angular/core';
import { ProductService } from '../../services/service';
import { AppSettings } from 'src/app/app.constant';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.html'
})
export class OrdersComponent {

  public orders: Order[];

  constructor(
    private productService: ProductService,
    private appSettings: AppSettings,
    private router: Router,
    private route: ActivatedRoute,
    private date: DatePipe
  ) {
    if(!this.appSettings.isLoggedIn)
      this.router.navigate(['/customer/login/'],{relativeTo: this.route});
    this.productService.loadOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
    });
  }

  shippedOn(shipped_on){
    if(!shipped_on)
      return 'Not shipped yet';
    return this.date.transform(shipped_on, 'medium');
  }

}
