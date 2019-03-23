import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';


import { UserActionTypes } from './../actions/user';
import { UserService } from './../services/user';

@Injectable()
export class CoreEffects {

  @Effect() loadUser$: Observable<Action> = this.actions$.pipe(
    ofType<any>(UserActionTypes.loadUser),
    map(action => action.payload),
    switchMap((data) =>
      this.userService.loadUser().pipe(map(res =>
        ({ type: UserActionTypes.updateUser, payload: res})
      )
    ))
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {

  }
}
