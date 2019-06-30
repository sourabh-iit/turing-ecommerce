import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettingsStub } from './app-settings-stub';
import { of } from 'rxjs';

@Injectable()
export class CustomerServiceStub{

  constructor(
  ){}

  public saveProfile(data){
    return of({
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
    });
  }

  public getShippingRegions(){
    return of([{
      id: 1,
      shipping_region: 'Please Select'
    },{
      id: 2,
      shipping_region: 'US / Canada'
    },{
      id: 3,
      shipping_region: 'Europe'
    },{
      id: 4,
      shipping_region: 'Rest of World'
    }])
  }

  public login(data){
    return of({});
  }

  public register(){
    return of({});
  }

}
