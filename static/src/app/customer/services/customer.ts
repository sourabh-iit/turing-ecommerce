import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.constant';

@Injectable()
export class CustomerService{

  constructor(
    private http: HttpClient,
    private appSettings: AppSettings,
  ){}

  public login(data){
    const url = `${this.appSettings.API_PREFIX}customer/login`;
    return this.http.post(url, data);
  }

  public register(data){
    const url = `${this.appSettings.API_PREFIX}customer/register`;
    return this.http.post(url, data);
  }

  public saveProfile(data){
    const url = `${this.appSettings.API_PREFIX}customer/register`;
    return this.http.put(url , data);
  }

  public getShippingRegions(){
    const url = `${this.appSettings.API_PREFIX}shipping_regions`;
    return this.http.get(url);
  }

}
