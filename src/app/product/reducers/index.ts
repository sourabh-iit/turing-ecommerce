import * as fromDepartments from './department';
import * as fromCart from './cart';

export interface ProductStoreState {
  departments: Array<Department>;
}

export const reducer = {
  departments: fromDepartments.reducer,
  cart: fromCart.reducer
};

export {
  DepartmentState,
  selectAllDepartments,
  getDepartmentEntities
} from './department';

export {
  CartState,
  selectAllCartItems,
  getCartEntities,
  isCartLoaded
} from './cart';
