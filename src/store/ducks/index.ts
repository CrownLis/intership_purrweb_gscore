import { combineReducers } from 'redux';

import { actions as userActions, reducer as userReducer, selectors as userSelectors } from './user';
import { actions as productsActions, reducer as productsReducer, selectors as productsSelectors } from './products';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});

export const rootActions = {
  user: userActions,
  products: productsActions,
};

export const rootSelectors = {
  user: userSelectors,
  products: productsSelectors,
};
