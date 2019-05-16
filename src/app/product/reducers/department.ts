import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ProductActionTypes, ProductionActionUnion } from './../actions';

const DepartmentsAdapter = createEntityAdapter<Department>();
export interface DepartmentState extends EntityState<Department> {
  loading?: boolean;
}
const initialState: DepartmentState = DepartmentsAdapter.getInitialState({
  loading: true
});

const {
  selectIds: SelectDepartmentIds,
  selectEntities: SelectDepartmentEntities,
  selectAll: SelectAllDepartments,
  selectTotal: DepartmentsCount
} = DepartmentsAdapter.getSelectors();

export const getProductState = createFeatureSelector<any>('productStore');
export const getDepartmentEntities = createSelector(getProductState, (state) => state.departments);
export const selectAllDepartments = createSelector(getDepartmentEntities, SelectAllDepartments);

export function reducer(
  state: DepartmentState = initialState,
  action: ProductionActionUnion
) {

  switch (action.type) {
    case ProductActionTypes.addDepartments: {
      state = {...state, loading: false};
      return DepartmentsAdapter.addAll(action.payload, state);
    }

    case ProductActionTypes.loadDepartments: {
      return {...state, loading: true};
    }

    default: {
      return state;
    }
  }
}
