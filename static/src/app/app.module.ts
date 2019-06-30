import { BrowserModule, DOCUMENT } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {StripeCheckoutModule} from 'ng-stripe-checkout';

import { AppRoutingModule } from './app-routing.module';
import { AppSettings } from './app.constant';
import { reducers, metaReducers } from './core/reducers';
import { CoreModule } from './core/core.module';
import { AppComponent } from './core/components/app';
import { UserService } from './core/services/user';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN'
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      closeButton: true,
      enableHtml: true,
      progressBar: true
    }),
    StripeCheckoutModule,
    CoreModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    })
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    AppSettings,
    UserService
  ],
  entryComponents: [
    AppComponent,
  ]
})
export class AppModule {
  private browser_document;

  ngDoBootstrap(appRef) {
    if (this.browser_document.getElementsByTagName('app-root').length > 0) {
      appRef.bootstrap(AppComponent);
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: any,
  ){
    this.browser_document = document;
  }
}
