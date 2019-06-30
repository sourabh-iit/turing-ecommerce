import { ProductsComponent } from "./products";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductService } from '../../services/service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { RouterLinkDirectiveStub } from 'src/app/testing/router-link-directive-stub';
import { Component, Input } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ProductServiceStub } from 'src/app/testing/product-service.stub';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { ProductComponent } from '../product/product';
import { AppSettingsStub } from 'src/app/testing/app-settings-stub';
import { AppSettings } from 'src/app/app.constant';

@Component({selector: 'app-header', template: ''})
class HeaderComponent {}

class MockRouter {
  public events = new Observable(observer => {
    observer.next(new NavigationEnd(0, 'http://localhost:8000/products', 'http://localhost:8000/products'));
    observer.complete();
  });
}

describe('ProductsComponent', () =>{
  let component;
  let store: MockStore<{productStore: {departments: {ids: [], entities: []}, cart: {ids: [], entities: [], isCartLoaded: boolean}}}>;
  const initialState = {productStore: {departments: {ids: [], entities: []}, cart: {ids: [], entities: [], isCartLoaded: false}}}
  let fixture;
  let productService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, ProductComponent, ProductsComponent, RouterLinkDirectiveStub ],
      imports: [ 
        FormsModule,
        NgbModule
      ],
      providers: [
        {provide: AppSettings, useClass: AppSettingsStub},
        {provide: Router, useClass: MockRouter},
        provideMockStore({initialState}),
        {provide: ProductService, useClass: ProductServiceStub},
        {provide: ActivatedRoute, useValue: {
          snapshot: {
            params: {
              department: 'D1',
              category: 'C1'
            }
          }
        }}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = fixture.debugElement.injector.get(ProductService);
    store = fixture.debugElement.injector.get(Store);
  });

  it('categories should not be visible', ()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const div = el.find('div.box');
    expect(component.categories).toBeFalsy();
    expect(div.length).toBe(3);
  });

  it('active class on department name', ()=>{
    component.departments = productService.loadDepartments();
    component.setDeartment();
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const departmentDiv = el.find('div.box')[1];
    const icon = $(departmentDiv).find('.heading').find('i');
    const activeDepartment = $(departmentDiv).find('.content').find('ul').find('li')[0];
    expect($(activeDepartment).hasClass('active')).toBeTruthy();
    expect($(icon).hasClass('fa fa-times-circle')).toBeTruthy();
  });

  it('active class on category name', ()=>{
    component.departments = productService.loadDepartments();
    component.setDeartment();
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const departmentDiv = el.find('div.box')[1];
    const icon = $(departmentDiv).find('.heading').find('i');
    icon.click();
  });

  it('active class on category name', ()=>{
    component.departments = productService.loadDepartments();
    component.setDeartment();
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const categoryDiv = el.find('div.box')[1];
    const icon = $(categoryDiv).find('.heading').find('i');
    const activeCategory = $(categoryDiv).find('.content').find('ul').find('li')[0];
    expect($(activeCategory).hasClass('active')).toBeTruthy();
    expect($(icon).hasClass('fa fa-times-circle')).toBeTruthy();
  });

  it('view cart button initially', ()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const categoryDiv = el.find('div.box')[2];
    expect($(categoryDiv).children().text()).toBe('View Cart');
  });

  it('cart visible but empty', ()=>{
    fixture.detectChanges();
    component.isCartLoaded = true;
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const categoryDiv = el.find('div.box')[2];
    expect($($(categoryDiv).children()[0]).text()).toBe('Cart Summary');
    expect($($(categoryDiv).children()[1]).text()).toBe('Your cart is empty!');
  });

  it('cart visible and not empty', ()=>{
    fixture.detectChanges();
    component.isCartLoaded = true;
    fixture.detectChanges();
    component.cartItems = productService.loadCart();
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const categoryDiv = el.find('div.box')[2];
    expect($($(categoryDiv).children()[0]).text()).toBe('Cart Summary');
    expect($($(categoryDiv).children()[1]).find('.item').length).toBe(component.cartItems.length+1);
  });

  it('pagination loaded and only first page is selected', ()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const pages = el.find('.page');
    expect(pages.length).toBe(3);
    expect($(pages[0]).hasClass('selected')).toBeTruthy();
  });

  it('second page is selected', ()=>{
    component.currentPage = 2;
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const pages = el.find('.page');
    expect(pages.length).toBe(3);
    expect($(pages[1]).hasClass('selected')).toBeTruthy();
  });

  it('next button click working', fakeAsync(()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    const next = el.find('.fa-angle-right');
    next.click();
    tick();
    fixture.detectChanges();
    let pages = el.find('.page');
    expect($(pages[1]).hasClass('selected')).toBeTruthy();
  }));

  it('next invisible on last page', fakeAsync(()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    component.currentPage = 3;
    fixture.detectChanges();
    const next = el.find('.fa-angle-right');
    expect(next[0]).toBeUndefined();
  }));

  it('prev is not visible initially',()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    let prev = el.find('.fa-angle-left');
    expect(prev[0]).toBeUndefined();
  });

  it('prev is visible on second page and working correctly', ()=>{
    fixture.detectChanges();
    component.currentPage = 2;
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    let prev = el.find('.fa-angle-left');
    expect(prev[0]).toBeDefined();
    prev.click();
    fixture.detectChanges();
    const pages = el.find('.page');
    expect($(pages[0]).hasClass('selected')).toBeTruthy();
    prev = el.find('.fa-angle-left');
    expect(prev[0]).toBeUndefined();
  });

  it('products rendering',()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    expect(el.find('.product-container').length).toBe(component.products.length);
  });

  it('add to cart working', ()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    component.isCartLoaded = true;
    const button = el.find('.product-container').find('.add-to-cart').children()[0];
    $(button).click();
    component.cartItems = productService.loadCart();
    expect(component.cartItems.length).toEqual(4);
    fixture.detectChanges();
    const cartitems = $(el.find('.box')[2]).find('.item');
    expect(cartitems.length).toEqual(5);
  });
});