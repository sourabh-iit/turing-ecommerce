import { Action } from '@ngrx/store';

export enum HeaderActionTypes {
  UpdateTitle = '[Header] Update Title',
  UpdateClass = '[Header] Update Class',
  UpdateMenu = '[Header] Update Menu',
  Breadcrumb = '[Header] Breadcrumb'
}

export class UpdateTitle implements Action {
  readonly type = HeaderActionTypes.UpdateTitle;

  constructor(public payload: string) {}
}

export class UpdateMenu implements Action {
  readonly type = HeaderActionTypes.UpdateMenu;

  constructor(public payload: string) {}
}

export class AddBreadcrumb implements Action {
  readonly type = HeaderActionTypes.Breadcrumb;

  constructor(public payload: Array<{title: string, link: string}>) {}
}

export type HeaderActionUnion =
  | UpdateMenu
  | UpdateTitle
  | AddBreadcrumb;
