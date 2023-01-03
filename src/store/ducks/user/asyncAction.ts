import { getMe, logOutRequest, payForProduct, signIn, signUp } from '@/api';
import { PaymentType, UserType } from '@/types/data';
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

export const registerUser = createAsyncThunk<void, RegisterAttributes>(
  'user/registerUser',
  async ({ email, password, username }) => {
    await signUp({ email, username, password });
  },
);

export const loginUser = createAsyncThunk<UserType, LoginAttributes>('user/loginUser', async ({ email, password }) => {
  const response = await signIn({ email, password });
  const {
    data: { user },
  } = response;
  return user;
});

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
    const {
      data: { subscribe },
    } = response;
    return subscribe;
  },
);
