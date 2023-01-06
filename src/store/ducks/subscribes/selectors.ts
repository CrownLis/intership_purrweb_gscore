import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store';

export const selectSubscribes = (state: AppState) => state.subscribes.list;

export const selectIsLoadingSubscribes = (state: AppState) => state.subscribes.loading;

export const selectSubscribeById = createSelector(
  [selectSubscribes, (_: AppState, subscribeId: number) => subscribeId],
  (subscribes, subscribeId) => subscribes?.find((subscribe) => subscribe.id === subscribeId),
);

export const selectSubscribesByProductId = createSelector(
  [selectSubscribes, (_: AppState, productId: number) => productId],
  (subscribes, productId) => subscribes?.filter((subscribe) => subscribe.productId === productId),
);
