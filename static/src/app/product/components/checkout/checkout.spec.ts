import { TestBed, fakeAsync, tick, async } from "@angular/core/testing";
import { Component } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/service';
import { ProductServiceStub } from 'src/app/testing/product-service.stub';
import { CheckoutComponent } from './checkout';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { AppSettings } from 'src/app/app.constant';
import { AppSettingsStub } from 'src/app/testing/app-settings-stub';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { StripeCheckoutLoader, StripeCheckoutHandler } from 'ng-stripe-checkout';
import { CustomerService } from 'src/app/customer/services/customer';
import { CustomerServiceStub } from 'src/app/testing/customer-service-stub';
import * as $ from 'jquery';
import { RouterLinkDirectiveStub } from 'src/app/testing/router-link-directive-stub';
import * as fromRoot from '../../../core/reducers';
import { StripeCheckoutLoaderStub } from 'src/app/testing/stripe-checkout-loader-stub';


@Component({selector: 'app-header', template: ''})
class HeaderComponent {}

class MockRouter {
  public events = new Observable(observer => {
    observer.next(new NavigationEnd(0, 'http://localhost:8000/products', 'http://localhost:8000/products'));
    observer.complete();
  });
}

const productStore = {
  departments: {ids: [], entities: {}},
  cart: {
    ids: [1], 
    entities: {
      1: {
        product: {
          description: 'PD1',
          discounted_price: '19',
          display: 0,
          image: 'arc-d-triomphe.gif',
          image_2: 'arc-d-triomphe-2.gif',
          name: 'name_1',
          price: '29',
          thumbnail: 'arc-d-triomphe-thumnail.gif',
          attributes: {
            Color: [{
              id: 1,
              value: 'Green'
            }],
            Size: [{
              id: 2,
              value: 'S'
            }]
          },
          department: 'D1',
          category: 'C1'
        },
        quantity: 1,
        id: 1,
        buy_now: 1,
        added_on: '',
        attributes: {
          Color: {
            id: 1,
            value: 'Green'
          },
          Size: {
            id: 2,
            value: 'S'
          }
        }
      }
    }
  }
}


describe('Checkout', ()=>{
  let fixture;
  let productService;
  let component;
  let store;
  const initialState = {productStore: productStore, user: {}}

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, CheckoutComponent, RouterLinkDirectiveStub],
      imports: [ 
        FormsModule,
        ReactiveFormsModule,
        NgbModule
      ],
      providers: [
        {provide: ProductService, useClass: ProductServiceStub},
        provideMockStore({initialState}),
        {provide: AppSettings, useClass: AppSettingsStub},
        {provide: Router, useClass: MockRouter},
        {provide: ActivatedRoute, useValue: {
          snapshot: {
            params: {
              department: 'D1',
              category: 'C1'
            }
          }
        }},
        {provide: StripeCheckoutLoader, useClass: StripeCheckoutLoaderStub},
        FormBuilder,
        {provide: CustomerService, useClass: CustomerServiceStub}
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    store.setState({
      user: {
        address_1: "kxjhdf",
        address_2: "skjdhfs",
        city: "fhnfgvcnbgdv",
        country: "skdhg",
        credit_card: "4242424242424242",
        day_phone: "dkfjhgdhfkbg",
        eve_phone: "djlghdflkgj",
        mob_phone: "smjdjbghdlfg",
        postal_code: "skdhg",
        region: "",
        shipping_region: 2,
        user: {
          email: "sourabh@gmail.com",
          first_name: "Sourabh ",
          last_name: "singh",
          username: "sourabh@gmail.com"
        }
      },
      productStore: productStore
    })
  });

  it('next button disabled', ()=>{
    fixture.detectChanges();
    const el = $(fixture.nativeElement);
    expect(component.formValid()).toBeFalsy();
  });

  describe('Form completely filled', ()=>{
    beforeEach(()=>{
      fixture.detectChanges();
      store.setState({
        user: {
          address_1: "kxjhdf",
          address_2: "skjdhfs",
          city: "fhnfgvcnbgdv",
          country: "skdhg",
          credit_card: "4242424242424242",
          day_phone: "dkfjhgdhfkbg",
          eve_phone: "djlghdflkgj",
          mob_phone: "smjdjbghdlfg",
          postal_code: "skdhg",
          region: "shdfg",
          shipping_region: 2,
          user: {
            email: "sourabh@gmail.com",
            first_name: "Sourabh ",
            last_name: "singh",
            username: "sourabh@gmail.com"
          }
        },
        productStore: productStore
      });
      fixture.detectChanges();
    });

    it('next button enabled', ()=>{
      expect(component.formValid()).toBeTruthy();
    });
  
    it('status of order 1 from 0 check', ()=>{
      const el = $(fixture.nativeElement);
      expect(component.order.status).toEqual(0);
      el.find('.btn-success').click();
      fixture.detectChanges();
      expect(component.order.status).toEqual(1);
    });
  
    it('progress bar check', ()=>{
      const el = $(fixture.nativeElement);
      el.find('.btn-success').click();
      fixture.detectChanges();
      const lis = el.find('.checkout-progress-bar').find('li');
      expect($(lis[0]).hasClass('is-active')).toBeTruthy();
      expect($(lis[1]).hasClass('is-active is-last')).toBeTruthy();
    });

    describe('stripe payment', ()=>{
      beforeEach(()=>{
        const el = $(fixture.nativeElement);
        el.find('.btn-success').click();
        fixture.detectChanges();
      });

      it('on payment step', fakeAsync(()=>{
        component.ngAfterViewInit();
        tick();
        const el = $(fixture.nativeElement);
        el.find('.btn-success').click();
        fixture.detectChanges();
        const lis = el.find('.checkout-progress-bar').find('li');
        expect($(lis[0]).hasClass('is-active')).toBeTruthy();
        expect($(lis[1]).hasClass('is-active')).toBeTruthy();
        expect($(lis[2]).hasClass('is-active is-last')).toBeTruthy();
      }));

      it('on payment successfull', fakeAsync(()=>{
        component.ngAfterViewInit();
        tick();
        const el = $(fixture.nativeElement);
        el.find('.btn-success').click();
        tick();
        fixture.detectChanges();
        const lis = el.find('.checkout-progress-bar').find('li');
        expect($(lis[0]).hasClass('is-active')).toBeTruthy();
        expect($(lis[1]).hasClass('is-active')).toBeTruthy();
        expect($(lis[2]).hasClass('is-active')).toBeTruthy();
        expect($(lis[3]).hasClass('is-active is-last')).toBeTruthy();
      }))

      it('on error occurred', fakeAsync(()=>{
        component.ngAfterViewInit();
        tick();
        component.customer.user.email = '';
        const el = $(fixture.nativeElement);
        el.find('.btn-success').click();
        tick();
        fixture.detectChanges();
        const lis = el.find('.checkout-progress-bar').find('li');
        expect($(lis[0]).hasClass('is-active')).toBeTruthy();
        expect($(lis[1]).hasClass('is-active is-last')).toBeTruthy();
        expect($(lis[2]).hasClass('is-active')).toBeFalsy();
        expect($(lis[3]).hasClass('is-active is-last')).toBeFalsy();
      }))
    })
  })
})