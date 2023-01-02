import { getMe, logOutRequest, payForProduct, signIn, signUp } from '@/api';
import { RegisterResponse, LoginResponse, UserType, PaymentType } from '@/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

type RegisterAttributes = {
  email: string;
  username: string;
  password: string;
};

type PaymentAttributes = {
  priceId: number;
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

export const logOut = createAsyncThunk<void, void>('user/logOut', async () => {
  await logOutRequest();
});

export const authMe = createAsyncThunk<UserType, void>('user/authMe', async () => {
  const response = await getMe();
  const { data } = response;
  return data;
});

export const buyProduct = createAsyncThunk<PaymentType, PaymentAttributes>(
  'product/buyProduct',
  async ({ priceId }) => {
    const response = await payForProduct({ priceId });
    const { data } = response;
    return data.subscribe;
  },
);
