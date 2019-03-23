import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ErrorHandler, NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import {AppComponent} from './components/app';
import {HeaderComponent} from './components/header';
import {CoreEffects} from './effects';
import {AppError} from './services/error';
import { AppSettings } from '../app.constant';
import { EventService } from './services/events';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

const COMPONENTS = [
  AppComponent,
  HeaderComponent,
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'csrftoken',
      headerName: 'X-CSRFTOKEN'
    }),
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    EffectsModule.forFeature([CoreEffects]),
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        AppSettings,
        EventService,
        AppError,
        {provide: ErrorHandler, useClass: AppError}
      ],
    };
  }
}
