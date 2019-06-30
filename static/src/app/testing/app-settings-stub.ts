import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingsStub {
  public readonly STATIC_URL = '/static/';
  public readonly API_PREFIX = window['API_PREFIX'] || '/api/';
  public readonly BASE_URL = 'http://localhost:8000';
  public readonly username = window['user'] || null;
  public isLoggedIn = true;
  public readonly STRIPE_API_KEY = 'pk_test_EzKasnbT9boNi8rzyy8hNuVL003ooPXfjx';
}