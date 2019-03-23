import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromRouter from '@ngrx/router-store';

import * as fromHeader from './header';
import * as fromUser from './user';
import { environment } from 'src/environments/environment';
import { RouterStateUrl } from 'src/app/shared/utils';

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  header: fromHeader.HeaderState;
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  header: fromHeader.reducer,
  user: fromUser.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

export {
  selectorUser,
  UserState
} from './user';

export {
  HeaderState,
  selectorHeader
} from './header';
