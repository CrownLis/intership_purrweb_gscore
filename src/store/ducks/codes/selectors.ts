import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store';

export const selectCodes = (state: AppState) => state.codes.list;

export const selectIsLoadingCodes = (state: AppState) => state.codes.loading;

export const selectCodeById = createSelector([selectCodes, (_: AppState, codeId: number) => codeId], (codes, codeId) =>
  codes?.find((code) => code.id === codeId),
);

export const selectCodesBySubscribeId = createSelector(
  [selectCodes, (_: AppState, subscribeId: number) => subscribeId],
  (codes, subscribeId) => codes?.filter((code) => code.subscribeId === subscribeId),
);
