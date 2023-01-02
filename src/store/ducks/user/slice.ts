import { AppState } from '@/store/store';
import { UserType } from '@/types';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { authMe, buyProduct, loginUser, logOut, registerUser } from './asyncAction';

type UserSliceType = {
  user: UserType | null;
  token: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserSliceType = {
  user: null,
  token: null,
  loading: false,
  error: null,
};
const APP_HYDRATE = createAction<AppState>(HYDRATE);
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(APP_HYDRATE, (state, action) => {
      return { ...state, ...action.payload.user };
    });
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(authMe.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(authMe.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(authMe.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(buyProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(buyProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(buyProduct.fulfilled, (state, action) => {
      state.loading = false;
      if (state && state.user && state.user.subscribes) {
        state.user.subscribes.push(action.payload);
      }
    });
    builder.addCase(logOut.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logOut.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });
  },
});

export const { actions, reducer } = userSlice;
