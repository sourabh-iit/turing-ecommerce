import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { Component } from '@angular/core';
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
import { RegisterComponent } from './register';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({selector: 'app-header', template: ''})
class HeaderComponent {}

class MockRouter {
  public navigate(arr: string[], options: {relativeTo: ActivatedRoute}){

  }
}

describe('Register Form', ()=>{
  const initialState = {user:{}};
  let fixture;
  let component;
  let store;
  let el;
  let registerForm;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, RegisterComponent, RouterLinkDirectiveStub],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          closeButton: true,
          enableHtml: true,
          progressBar: true
        })
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
        ToastrService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    registerForm = component.registerForm;
    el = $(fixture.nativeElement);
  });

  it('email invalid',()=>{
    fixture.detectChanges();
    registerForm.get('email').markAsTouched();
    registerForm.setValue({
      email: 'kjfhsf',
      password: '',
      confirm_password: ''
    });
    fixture.detectChanges();
    expect(el.find('.alert-danger').children().text()).toContain('Email address is not a valid email address');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('email required',()=>{
    fixture.detectChanges();
    registerForm.get('email').markAsTouched();
    fixture.detectChanges();
    expect(el.find('.alert-danger').children().text()).toContain('Email address is required');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('password required',()=>{
    fixture.detectChanges();
    registerForm.get('password').markAsTouched();
    registerForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: '',
      confirm_password: ''
    });
    fixture.detectChanges();
    expect(el.find('.alert-danger').children().text()).toContain('Password is required');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('confirm password and password should match',()=>{
    fixture.detectChanges();
    registerForm.get('password').markAsTouched();
    registerForm.get('confirm_password').markAsTouched();
    registerForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: 'sdgsgsdmfhj',
      confirm_password: 'dfdfh'
    });
    fixture.detectChanges();
    expect(el.find('.alert-danger').text()).toContain('Password and Confirm Password does not match');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('minimum characters length 8 test',()=>{
    fixture.detectChanges();
    registerForm.get('password').markAsTouched();
    registerForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: 'sdgsj',
      confirm_password: ''
    });
    fixture.detectChanges();
    expect(el.find('.alert-danger').children().text()).toContain('Password must be atleast 8 characters in length');
    expect(el.find('button[type=submit]').attr('disabled')).toEqual('disabled');
  });

  it('submit button enabled',()=>{
    fixture.detectChanges();
    registerForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: 'jgdkfgflgkj',
      confirm_password: 'jgdkfgflgkj'
    });
    fixture.detectChanges();
    expect(el.find('button[type=submit]').attr('disabled')).toBeUndefined();
  });

  it('successfull register function call test',()=>{
    fixture.detectChanges();
    registerForm.setValue({
      email: 'kjfhsf@dfg.com',
      password: 'jgdkfgflgkj',
      confirm_password: 'jgdkfgflgkj'
    });
    fixture.detectChanges();
    spyOn(component.toastr,'success');
    spyOn(component.router,'navigate');
    el.find('button[type=submit]').click();
    fixture.detectChanges();
    expect(component.toastr.success).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalled();
  });
})