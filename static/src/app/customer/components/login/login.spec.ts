import { TestBed } from "@angular/core/testing";
import { Component } from '@angular/core';
import { LoginComponent } from './login';
import { RouterLinkDirectiveStub } from 'src/app/testing/router-link-directive-stub';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from '../../services/customer';
import { provideMockStore } from '@ngrx/store/testing';
import { AppSettingsStub } from 'src/app/testing/app-settings-stub';
import { Router, ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.constant';
import { CustomerServiceStub } from 'src/app/testing/customer-service-stub';
import { Store } from '@ngrx/store';
import * as $ from 'jquery';


@Component({selector: 'app-header', template: ''})
class HeaderComponent {}

class MockRouter {
  public navigate(arr: string[], options: {relativeTo: ActivatedRoute}){

  }
}

describe('Login Form', ()=>{
  const initialState = {user:{}};
  let fixture;
  let component;
  let store;
  let el;
  let userForm;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, LoginComponent, RouterLinkDirectiveStub],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule
      ],
      providers: [
        FormBuilder,
        {provide: CustomerService, useClass: CustomerServiceStub},
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
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    userForm = component.userForm;
    el = $(fixture.nativeElement);
  });

  it('email invalid',()=>{
    fixture.detectChanges();
    userForm.get('email').markAsTouched();
    userForm.setValue({
      email: 'kjfhsf',
      password: '',
      remember: false
    });
    fixture.detectChanges();
    expect(el.find('.alert-danger').children().text()).toContain('Email address is not a valid email address');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('email required',()=>{
    fixture.detectChanges();
    userForm.get('email').markAsTouched();
    fixture.detectChanges();
    expect(el.find('.alert-danger').children().text()).toContain('Email address is required');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('submit button enabled',()=>{
    fixture.detectChanges();
    userForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: 'flgkj',
      remember: false
    });
    fixture.detectChanges();
    expect(el.find('button[type=submit]').attr('disabled')).toBeUndefined();
  });

  it('password required',()=>{
    fixture.detectChanges();
    userForm.get('password').markAsTouched();
    userForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: '',
      remember: false
    });
    fixture.detectChanges();
    expect(el.find('.alert-danger').children().text()).toContain('Password is required');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('submit function test',()=>{
    fixture.detectChanges();
    userForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: 'flgkj',
      remember: false
    });
    fixture.detectChanges();
    el.find('button[type=submit]').click();
    expect(component.appSettings.isLoggedIn).toBeTruthy();
  });
})