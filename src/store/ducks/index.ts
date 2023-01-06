import { combineReducers } from 'redux';

import { actions as userActions, reducer as userReducer, selectors as userSelectors } from './user';
import { actions as productsActions, reducer as productsReducer, selectors as productsSelectors } from './products';
import { actions as codesActions, reducer as codesReducer, selectors as codesSelectors } from './codes';
import {
  actions as subscribesActions,
  reducer as subscribesReducer,
  selectors as subscribesSelectors,
} from './subscribes';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  codes: codesReducer,
  subscribes: subscribesReducer,
});

export const rootActions = {
  user: userActions,
  products: productsActions,
  codes: codesActions,
  subscribes: subscribesActions,
};

export const rootSelectors = {
  user: userSelectors,
  products: productsSelectors,
  codes: codesSelectors,
  subscribes: subscribesSelectors,
};
