import { getMe, logOutRequest, signIn, signUp, updatePassword, updatePersonalData } from '@/api';
import { UserType } from '@/types/data';
import { SignInPayload, SignUpPayload, UpdatePasswordPayload, UpdatePersonalDataPayload } from '@/types/payload';
import { createAsyncThunk } from '@reduxjs/toolkit';

export type RegisterAttributes = SignUpPayload;

export type LoginAttributes = SignInPayload;

export type UpdatePasswordAttributes = UpdatePasswordPayload;

export type UpdatePersonalDataAttributes = UpdatePersonalDataPayload;

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

export const updatePasswordUser = createAsyncThunk<void, UpdatePasswordAttributes>(
  'user/updatePassword',
  async (values) => {
    await updatePassword(values);
  },
);

export const updatePersonalDataUser = createAsyncThunk<UserType, UpdatePersonalDataAttributes>(
  'user/updatePersonalData',
  async (values) => {
    const response = await updatePersonalData(values);
    const { data: user } = response;
    return user;
  },
);

export const logOutUser = createAsyncThunk<void, void>('user/logOut', async () => {
  await logOutRequest();
});

export const authMe = createAsyncThunk<UserType, void>('user/authMe', async () => {
  const response = await getMe();
  const { data } = response;
  return data;
});
