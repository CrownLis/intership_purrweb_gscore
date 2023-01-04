import { AppState } from '../../store';

export const selectCodes = (state: AppState) => state.codes.list;
