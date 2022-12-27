import { signIn, signUp } from '@/api';
import { RegisterResponse, LoginResponse } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

type RegisterAttributes = {
  email: string;
  username: string;
  password: string;
};

type LoginAttributes = {
  email: string;
  password: string;
};

export const registerUser = createAsyncThunk<RegisterResponse, RegisterAttributes>(
  'user/registerUser',
  async ({ email, password, username }) => {
    const response = await signUp({ email, username, password });
    const { data } = response;
    return data;
  },
);

export const loginUser = createAsyncThunk<LoginResponse, LoginAttributes>(
  'user/loginUser',
  async ({ email, password }) => {
    const response = await signIn({ email, password });
    const { data } = response;
    return data;
  },
);
