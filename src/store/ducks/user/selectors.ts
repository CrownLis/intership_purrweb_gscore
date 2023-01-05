import { AppState } from '../../store';

export const selectUser = (state: AppState) => state.user.data;

export const selectIsLoadingUser = (state: AppState) => state.user.loading;
