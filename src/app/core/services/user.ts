import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromUser from './../reducers/user';
import * as UserActions from './../actions/user';
import { AppSettings } from 'src/app/app.constant';

@Injectable()
export class UserService {

  public User: any;
  public User$ = new BehaviorSubject(null);

  private username: string;
  private apiUrl: string;

  constructor(
    private http: HttpClient,
    private store: Store<fromUser.UserState>,
    private appSettings: AppSettings
  ) {
    this.username = this.appSettings.username;
    this.apiUrl = `${this.appSettings.API_PREFIX}customer/login`;
  }

  public loadUser() {
    const sub = this.http.get(this.apiUrl);
    sub.subscribe((user) => {
      this.User = user;
      this.User$.next(this.User);
      this.store.dispatch(new UserActions.UpdateUser(user));
    },
    (error) => {});
    return sub;
  }
}
