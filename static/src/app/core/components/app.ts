import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

import * as fromRoot from './../reducers';
import * as HeaderActions from './../actions/header';
import { RouterStateUrl } from './../../shared/utils';
import { EventService } from './../services/events';
import { ConfirmationService } from 'src/app/shared/services/confirmation';

@Component({
  selector: 'app-root',
  template: `
    <ngx-loading-bar color="red" height="3px"></ngx-loading-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: [

  ]
})

export class AppComponent  implements OnInit {
  public router$: Observable<any>;
  private error401: boolean;

  constructor(
    private store: Store<fromRoot.AppState>,
    private titleService: Title,
    private msEvents: EventService,
    private toastr: ToastrService,
    private confirm: ConfirmationService,
  ) {
    this.router$ = this.store.select((state) => state.router);
    this.msEvents.error401.subscribe(this.onError401);
    this.msEvents.sdError.subscribe(this.onSdError);
  }

  ngOnInit() {
    this.router$.subscribe((data: {state: RouterStateUrl}) => {
      if (data && data.state) {
        this.updateTitle(data.state.data);
        this.dispatchHeader(data.state.data);
      }
    });
  }

  private dispatchHeader(data) {
    let headerTitle: string = null;
    let headerMenu: string = null;

    if(data){
      if ('headerMenu' in data && data['headerMenu']) {
        headerMenu = data['headerMenu'];
      }

      if ('headerTitle' in data && data['headerTitle']) {
        headerTitle = data['headerTitle'];
        this.store.dispatch(new HeaderActions.UpdateTitle(headerTitle));
      }

      this.store.dispatch(new HeaderActions.UpdateMenu(headerMenu));
      this.store.dispatch(new HeaderActions.AddBreadcrumb(null));
    }
  }

  private updateTitle(data) {
    if (data && 'title' in data && data['title']) {
      this.titleService.setTitle(`TShirtShop - ${data['title']}`);
    }
  }

  private onError401 = () => {
    if (this.error401) {
      return;
    }
    this.error401 = true;
    this.confirm.confirm(
      'Error loading resource',
      'We received a 401-Unauthenticated response while loading some data.  Usually, ' +
      'this means you\'re not logged in or your session has expired.  We recommend ' +
      'reloading the page so you can reauthenticate.',
      'Cancel', 'Reload'
    ).then(() => window.location.reload(), () => window.location.reload());
  }

  private onSdError = (error: {message: string, header?: string}) => {
    this.toastr.error(error.message, error.header);    
  }
}
