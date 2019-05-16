import { UserActionTypes, UserActionUnion } from '../actions/user';
import { createFeatureSelector } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';

export interface UserState extends Customer {
  loggedIn?: boolean;
}

const userAdapter = createEntityAdapter<Customer>();
const initialState: UserState = null;
export const selectorUser = createFeatureSelector<any>('user');

export function reducer(
  state: UserState = initialState,
  action: UserActionUnion
) {

  switch (action.type) {

    case UserActionTypes.updateUser: {
      return {...state, ...action.payload};
    }

    default: {
      return state;
    }
  }
}
