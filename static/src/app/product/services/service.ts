import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.constant';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';

@Injectable()
export class ProductService{

  constructor(
    private http: HttpClient,
    private appSettings: AppSettings
  ){
  }

  private apiUrl(department, category, product_id){
    let url = this.appSettings.API_PREFIX;
    if(department!='')
      url += 'department/'+department+'/';
    if(category!='')
      url += 'category/'+category+'/';
    url += 'products/'
    if(product_id)
      url += product_id;
    return url;
  }

  public loadProducts(page,search: {value: string, all_words: boolean}, department: string = '', category: string = ''){
    let url = this.apiUrl(department, category, null);
    url += `?search=${JSON.stringify(search)}`;
    if(page && page!=1)
      url += `&page=${page}`;
    return this.http.get(url);
  }

  public loadProduct(product_id: number){
    const url = `${this.appSettings.API_PREFIX}products/${product_id}`;
    return this.http.get(url);
  }

  public loadDepartments(){
    const url = `${this.appSettings.API_PREFIX}departments/`;
    return this.http.get(url);
  }

  public loadCategories(department: string){
    const url = `${this.appSettings.API_PREFIX}department/${department}/categories`;
    return this.http.get(url);
  }

  public loadCart(){
    const url = `${this.appSettings.API_PREFIX}cart`;
    return this.http.get(url);
  }

  public addToCart(item: CartItem){
    const url = `${this.appSettings.API_PREFIX}cart`;
    return this.http.post(url, item);
  }

  public updateCartItem(item: CartItem, data){
    const url = `${this.appSettings.API_PREFIX}cart/${item.id}`;
    return this.http.put(url, data);
  }

  public updateCart(items: CartItem[]){
    const url = `${this.appSettings.API_PREFIX}cart`;
    return this.http.put(url, {
      items: items
    });
  }

  public removeItem(item: CartItem){
    const url = `${this.appSettings.API_PREFIX}cart/${item.id}`;
    return this.http.delete(url);
  }

  public loadShippings(){
    const url = `${this.appSettings.API_PREFIX}shippings`;
    return this.http.get(url);
  }

  public loadOrder(orderId: number){
    const url = `${this.appSettings.API_PREFIX}orders/${orderId}`;
    return this.http.get(url);
  }

  public loadOrders(){
    const url = `${this.appSettings.API_PREFIX}orders`;
    return this.http.get(url);
  }

  public updateOrder(order: any){
    const url = `${this.appSettings.API_PREFIX}order`;
    return this.http.put(url, order);
  }

  public createOrder(data: {token: string, order: Order}){
    const url = `${this.appSettings.API_PREFIX}orders`;
    return this.http.post(url, data);
  }

  public loadReview(orderDetailId: number){
    const url = `${this.appSettings.API_PREFIX}${orderDetailId}/review/`;
    return this.http.get(url);
  }

  public saveReview(orderDetailId: number, review: Review){
    const url = `${this.appSettings.API_PREFIX}${orderDetailId}/review/`;
    return this.http.post(url, review);
  }

  public loadReviews(productId: number){
    const url = `${this.appSettings.API_PREFIX}${productId}/reviews/`;
    return this.http.get(url);
  }
}
