import { AppState } from '../../store';

export const selectProducts = (state: AppState) => state.products.list;
