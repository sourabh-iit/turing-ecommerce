import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as rootActions from '../actions/user';
import { AppSettings } from 'src/app/app.constant';
import { skipNil } from 'src/app/shared/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  public STATIC_URL: string;
  public User: User;
  public username: string;

  constructor(
    private store: Store<fromRoot.AppState>,
    public appSettings: AppSettings,
  ) {
    this.STATIC_URL = this.appSettings.STATIC_URL;
    skipNil(this.store.select(fromRoot.selectorUser)).subscribe(this.onUserLoaded);
  }

  ngOnInit() {
    this.store.dispatch(new rootActions.LoadUser({}));
  }

  private onUserLoaded = (user: any) => {
    this.User = user;
    if(user.user)
      this.username = user.user.username;
  }


}
