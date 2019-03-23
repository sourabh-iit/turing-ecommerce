import { Component } from '@angular/core';
import { ProductService } from '../../services/service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettings } from 'src/app/app.constant';

@Component({
  selector: 'app-product-details',
  templateUrl: './productdetails.html'
})
export class ProductDetailsComponent {

  public product: Product;
  public STATIC_URL: string;
  public attributes = {};
  public reviews: Review[];

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute,
    private route: Router,
    private appSettings: AppSettings,
  ) {
    this.STATIC_URL = this.appSettings.STATIC_URL;
    let productId = this.router.snapshot.params.productId;
    this.productService.loadProduct(productId).subscribe((product: Product) => {
      this.product = product;
    });
  }

  getKeys(object){
    return Object.keys(object);
  }

  addToCart(){
    const item: CartItem = {
      attributes: JSON.stringify(this.attributes),
      product: this.product,
      buy_now: true
    }
    this.productService.addToCart(item).subscribe((item: CartItem)=>{
      this.route.navigate(['/cart/'], {relativeTo: this.router});
    });
  }

  loadReviews(){
    this.productService.loadReviews(this.product.id).subscribe((reviews: Review[])=>{
      this.reviews = reviews;
    });
  }

}
