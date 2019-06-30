import * as fromProduct from '../../reducers';
import * as productActions from '../../actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../core/reducers';
import { ProductService } from '../../services/service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.html'
})
export class ProductsComponent implements OnInit {

  public products: Array<Product>;
  public departments: Array<Department>;
  public department: Department;
  public category: Category;
  public categories: Array<Category>;
  public attributesSummary: string;
  public currentPage: number = 1;
  public pages: Array<number>;
  public STATIC_URL: string;
  public wordsAccepted: Array<string> = [];
  public wordsIgnored: Array<string> = [];
  public searchUsed = false;
  public all_words = false;
  public isCartLoaded = false;
  public searchAllWords: boolean;
  public cartItems: Array<CartItem>;
  public search = {
    value: '',
    all_words: false
  }

  protected deptName: string;
  protected catName: string;

  constructor(
    private store: Store<fromRoot.AppState>,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.STATIC_URL = window['STATIC_URL'];
    this.store.select(fromProduct.selectAllDepartments).subscribe((depts: any)=>{
      this.departments = depts;
    });
    this.store.dispatch(new productActions.LoadDepartments({}));
    this.store.select(fromProduct.isCartLoaded).subscribe((value)=>{
      this.isCartLoaded = value;
    });
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.setDeartment();
      }
    });
  }

  ngOnInit(){
    this.store.select(fromProduct.selectAllCartItems).subscribe((items: any)=>{
      if(items && items.length){
        this.cartItems = items;
      }
    });
    this.store.select(fromProduct.selectAllDepartments).subscribe((depts: Department[])=>{
      if(depts && depts.length){
        this.departments = depts;
        this.setDeartment();
      }
    });
    this.store.select(fromProduct.isCartLoaded).subscribe((value: any) => {
      this.isCartLoaded = value;
    });
  }

  private setDeartment(){
    let deptName = this.route.snapshot.params.department;
    if(deptName){
      this.department = this.departments.find((dept: Department) => dept.name===deptName);
      if(this.department){
        this.categories = this.department.categories;
        let catName = this.route.snapshot.params.category;
        if(catName){
          this.category = this.categories.find((cat: Category) => cat.name === catName);
        }
      }
    }
    this.loadProducts();
  }

  public loadProducts(page: number=null, department: Department = null, category: Category = null){
    if(page){
      this.currentPage = page;
    }
    if(!this.currentPage) return;
    const deptName = !this.department?'':this.department.name;
    const catName = this.category?this.category.name:'';
    this.productService.loadProducts(this.currentPage, this.search, deptName, catName).subscribe((data: any)=>{
      let searchUsed = false;
      let all_words = false;
      if(this.search.value!='')
        searchUsed = true;
      if(this.search.all_words)
        all_words = true;
      this.onProductsLoaded({
        products: data.results,
        totalPages: data.total_pages,
        wordsAccepted: data.wordsAccepted,
        wordsIgnored: data.wordsIgnored,
        currentPage: this.currentPage,
        searchUsed: searchUsed,
        all_words: all_words
      });
    });
  }

  private onProductsLoaded = (productsData: ProductsData) => {
    this.products = productsData.products;
    this.pages = [];
    for(let i=1;i<=productsData.totalPages;i++){
      this.pages.push(i);
    }
    this.wordsAccepted = productsData.wordsAccepted.filter((w: string)=> w!='');
    this.wordsIgnored = productsData.wordsIgnored.filter((w: string)=> w!='');
    this.currentPage = productsData.currentPage;
    this.searchUsed = productsData.searchUsed;
    this.all_words = productsData.all_words;
  }

  totalPrice(){
    let price = 0;
    for(let item of this.cartItems){
      if(parseFloat(item.product.discounted_price)>0)
        price += parseFloat(item.product.discounted_price)*item.quantity;
      else
        price += parseFloat(item.product.price)*item.quantity;
    }
    return price.toFixed(2);
  }

  viewCart(){
    this.store.dispatch(new productActions.LoadCartItems({}));
  }

  removeSearch(){
    const reload = this.wordsAccepted.length>0 || this.wordsAccepted.length>0;
    this.search = {
      value: '',
      all_words: false
    }
    if(reload){
      this.loadProducts();
    }
  }

  joinAttributes(cartItem: CartItem) {
    let attributes = [];
    let attribute_values = [];
    for(let attribute in cartItem.attributes){
      attributes.push(attribute);
      attribute_values.push(cartItem.attributes[attribute].value);
    }
    return attributes.join('/')+': '+attribute_values.join('/');
  }

  getKeys(object){
    return Object.keys(object);
  }

  public goToDepartment(dept){
    this.router.navigate(['/department',dept.name,'products'],{relativeTo: this.route});
  }

  public goToCategory(cat){
    this.router.navigate(['/department',this.department.name,'category',cat.name,'products'],
      {relativeTo: this.route});
  }

  public totalItems(){
    let total = 0;
    for(let item of this.cartItems){
      total += item.quantity;
    }
    return total;
  }

}
