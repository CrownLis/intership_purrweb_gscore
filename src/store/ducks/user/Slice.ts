import { UserType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './asyncAction';

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

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
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
  },
});

export const { actions, reducer } = userSlice;
