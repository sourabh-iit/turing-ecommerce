import { Component } from "@angular/core";
import { AppSettings } from 'src/app/app.constant';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/service';


@Component({
  selector: 'app-review-create',
  templateUrl: './create.html'
})
export class ReviewCreateComponent {

  public product: Product;
  public review: Review;
  private orderDetailId: number;
  public productName: string;
  
  constructor(
    private appSettings: AppSettings,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ){
    if(!this.appSettings.isLoggedIn){
      this.router.navigate(['/customer/login/'],{relativeTo: this.route});
    }
    this.orderDetailId = this.route.snapshot.params.orderDetailId;
    this.productName = this.route.snapshot.params.productName.split('-').join(' ');
    this.productService.loadReview(this.orderDetailId).subscribe((review: Review)=>{
      this.review = review;
    });
  }

  onSumbit(){
    this.productService.saveReview(this.orderDetailId, this.review).subscribe((review: Review)=>{
      this.review = review;
    });
  }
}