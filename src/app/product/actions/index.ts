import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export enum ProductActionTypes {
  loadDepartments = '[Department] Load Departments',
  addDepartments = '[Department] Add Departments',
  loadCartItems = '[Cart] Load Cart Items',
  addCartItem = '[Cart] Add Item To Cart',
  updateCartItem = '[Cart] Update Item To Cart',
  addCartItems = '[Cart] Add Items To Cart',
  removeCartItem = '[Cart] Remove Cart Item',
  emptyCart = '[Cart] Empty Cart',
}

export class LoadDepartments implements Action {
  readonly type = ProductActionTypes.loadDepartments;
  constructor(public payload: { }) {}
}

export class AddDepartments implements Action {
  readonly type = ProductActionTypes.addDepartments;
  constructor(public payload: Department[]) {}
}

export class LoadCartItems implements Action {
  readonly type = ProductActionTypes.loadCartItems;
  constructor(public payload: {}) {}
}

export class AddCartItems implements Action {
  readonly type = ProductActionTypes.addCartItems;
  constructor(public payload: CartItem[]) {}
}

export class AddCartItem implements Action {
  readonly type = ProductActionTypes.addCartItem;
  constructor(public payload: CartItem) {}
}

export class UpdateCartItem implements Action {
  readonly type = ProductActionTypes.updateCartItem;
  constructor(public payload: Update<CartItem>) {}
}

export class RemoveCartItem implements Action {
  readonly type = ProductActionTypes.removeCartItem;
  constructor(public payload: {id: number}) {}
}

export class EmptyCart implements Action {
  readonly type = ProductActionTypes.emptyCart;
  constructor(public payload: {}) {}
}

export type ProductionActionUnion =
  | LoadDepartments
  | AddDepartments
  | AddCartItem
  | UpdateCartItem
  | AddCartItems
  | LoadCartItems
  | RemoveCartItem
  | EmptyCart
  ;
