import { AppState } from '../../store';

export const selectSubscribes = (state: AppState) => state.subscribes.list;
