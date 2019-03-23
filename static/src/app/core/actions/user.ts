import { Action } from '@ngrx/store';

export enum UserActionTypes {
  updateUser = '[User] Update',
  loadUser = '[User] Load',
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.updateUser;
  constructor(public payload: any) {}
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.loadUser;
  constructor(public payload: any) {}
}

export type UserActionUnion =
  | UpdateUser
  | LoadUser
