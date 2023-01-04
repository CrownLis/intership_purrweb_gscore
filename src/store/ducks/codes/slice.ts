import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from '@/store/store';
import { CodeType } from '@/types/data';
import { getCodes } from './asyncAction';

type CodeSliceType = {
  list: CodeType[] | null;
  loading: boolean;
  error: string | null;
};

const initialState: CodeSliceType = {
  list: null,
  loading: false,
  error: null,
};

const APP_HYDRATE = createAction<AppState>(HYDRATE);

const codesSlice = createSlice({
  name: 'codesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(APP_HYDRATE, (state, action) => {
      return { ...state, ...action.payload.codes };
    });
    builder.addCase(getCodes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCodes.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(getCodes.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
    });
  },
});

export const { actions, reducer } = codesSlice;
