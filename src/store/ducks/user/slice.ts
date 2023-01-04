import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from '@/store/store';
import { UserType } from '@/types/data';
import { authMe, loginUser, logOutUser, registerUser, updatePasswordUser, updatePersonalDataUser } from './asyncAction';

type UserSliceType = {
  user: UserType | null;
  loading: boolean;
  error: string | null;
};

const initialState: UserSliceType = {
  user: null,
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
      state.user = action.payload;
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
    builder.addCase(logOutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logOutUser.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(updatePersonalDataUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePersonalDataUser.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(updatePersonalDataUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updatePasswordUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePasswordUser.rejected, (state) => {
      state.loading = false;
      state.error = 'error';
    });
    builder.addCase(updatePasswordUser.fulfilled, (state) => {
      state.loading = false;
    });
  },
});

export const { actions, reducer } = userSlice;
