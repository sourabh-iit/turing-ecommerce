import { HeaderActionTypes, HeaderActionUnion } from '../actions/header';

export interface HeaderState {
  menu: string;
  title: string;
  breadcrumb: Array<any>;
}

const initialState: HeaderState = {
  menu: null,
  title: '',
  breadcrumb: null
};

export const selectorHeader = state => <HeaderState>(state.header);

export function reducer(
  state: HeaderState = initialState,
  action: HeaderActionUnion
) {
  switch (action.type) {

    case HeaderActionTypes.UpdateTitle: {
      return {...state, title: action.payload };
    }

    case HeaderActionTypes.UpdateMenu: {
      return {...state, menu: action.payload };
    }

    case HeaderActionTypes.Breadcrumb: {
      return {...state, breadcrumb: action.payload };
    }

    default: {
      return state;
    }
  }
}
