import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from '@/store/store';
import { SubscribeType } from '@/types/data';
import { getSubscribes } from './asyncAction';

type SubscribeSliceType = {
  list: SubscribeType[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: SubscribeSliceType = {
  list: null,
  loading: false,
  error: null,
};

const APP_HYDRATE = createAction<AppState>(HYDRATE);

const subscribesSlice = createSlice({
  name: 'subscribesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(APP_HYDRATE, (state, action) => {
      return { ...state, ...action.payload.subscribes };
    });
    builder.addCase(getSubscribes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSubscribes.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(getSubscribes.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    });
  },
});

export const { actions, reducer } = subscribesSlice;
