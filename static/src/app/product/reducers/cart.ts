import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ProductActionTypes, ProductionActionUnion } from './../actions';

const CartAdapter = createEntityAdapter<CartItem>();
export interface CartState extends EntityState<CartItem> {
  isCartLoaded?: boolean;
}
const initialState: CartState = CartAdapter.getInitialState({
  isCartLoaded: false
});

const {
  selectIds: SelectCartIds,
  selectEntities: SelectCartEntities,
  selectAll: SelectAllCartItems,
  selectTotal: CartItemsCount
} = CartAdapter.getSelectors();

export const getProductState = createFeatureSelector<any>('productStore');
export const getCartEntities = createSelector(getProductState, (state) => state.cart);
export const selectAllCartItems = createSelector(getCartEntities, SelectAllCartItems);
export const isCartLoaded = createSelector(getCartEntities, (state) => state.isCartLoaded)

export function reducer(
  state: CartState = initialState,
  action: ProductionActionUnion
) {

  switch (action.type) {

    case ProductActionTypes.loadCartItems: {
      return {...state, isCartLoaded: true};
    }

    case ProductActionTypes.addCartItems: {
      return CartAdapter.addAll(action.payload, state);
    }

    case ProductActionTypes.addCartItem: {
      return CartAdapter.addOne(action.payload, state);
    }

    case ProductActionTypes.removeCartItem: {
      return CartAdapter.removeOne(action.payload.id, state);
    }

    case ProductActionTypes.updateCartItem: {
      return CartAdapter.updateOne(action.payload, state);
    }

    case ProductActionTypes.emptyCart: {
      return CartAdapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
