import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
