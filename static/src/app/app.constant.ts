import { Injectable } from '@angular/core';


@Injectable()
export class AppSettings {
  public readonly STATIC_URL = window['STATIC_URL'];
  public readonly API_PREFIX = window['API_PREFIX'] || '/api/';
  public readonly BASE_URL = window['BASE_URL'];
  public readonly username = window['user'] || null;
  public readonly STRIPE_API_KEY = 'pk_test_EzKasnbT9boNi8rzyy8hNuVL003ooPXfjx';
  public isLoggedIn = true;
  public navigateToCheckOut = false;

  constructor() {
    this.isLoggedIn = this.username && this.username !== '';
  }

  
}
