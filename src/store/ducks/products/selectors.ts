import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store';

export const selectProducts = (state: AppState) => state.products.list;

export const selectIsLoadingProducts = (state: AppState) => state.products.loading;

export const selectProductById = createSelector(
  [selectProducts, (_: AppState, productId: number) => productId],
  (products, productId) => products?.find((product) => product.id === productId),
);
