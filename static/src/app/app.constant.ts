import { Injectable } from '@angular/core';


@Injectable()
export class AppSettings {
  public readonly STATIC_URL = window['STATIC_URL'];
  public readonly API_PREFIX = window['API_PREFIX'] || '/api/';
  public readonly BASE_URL = window['BASE_URL'];
  public readonly username = window['user'] || null;
  public isLoggedIn = true;

  constructor() {
    this.isLoggedIn = this.username && this.username !== '';
  }

  
}
