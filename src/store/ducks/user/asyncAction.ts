import { signIn, signUp } from '@/API';
import { RegisterResponse, LoginResponse } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

type registerAttributes = {
  email: string;
  username: string;
  password: string;
};

type loginAttributes = {
  email: string;
  password: string;
};

export const registerUser = createAsyncThunk<RegisterResponse, registerAttributes>(
  'user/registerUser',
  async ({ email, password, username }) => {
    const response = await signUp({ email, username, password });
    const { data } = response;
    return data;
  },
);

export const loginUser = createAsyncThunk<LoginResponse, loginAttributes>(
  'user/loginUser',
  async ({ email, password }) => {
    const response = await signIn({ email, password });
    const { data } = response;
    return data;
  },
);
