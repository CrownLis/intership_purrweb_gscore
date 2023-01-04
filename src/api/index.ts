import axios from 'axios';
import {
  PayForProductPayload,
  SignInPayload,
  SignUpPayload,
  UpdatePasswordPayload,
  UpdatePersonalDataPayload,
} from '@/types/payload';
import {
  FetchCodesResponse,
  FetchProductsResponse,
  FetchSubscribesResponse,
  GetMeResponse,
  PayForProductResponse,
  SignInResponse,
  SignUpResponse,
  UpdatePasswordResponse,
  UpdatePersonalDataResponse,
} from '@/types/response';

export const axiosInstance = axios.create({
  baseURL: process.env.FRONTEND_URL,
});

export const signUp = async (values: SignUpPayload) => {
  const response = await axiosInstance.post<SignUpResponse>('/api/users/sign-up', values);
  return response;
};

export const signIn = async (values: SignInPayload) => {
  const response = await axiosInstance.post<SignInResponse>('/api/users/sign-in', values);
  return response;
};

export const updatePassword = async (values: UpdatePasswordPayload) => {
  const response = await axiosInstance.patch<UpdatePasswordResponse>('/api/users/update-password', values);
  return response;
};

export const updatePersonalData = async (values: UpdatePersonalDataPayload) => {
  const response = await axiosInstance.patch<UpdatePersonalDataResponse>('/api/users', values);
  return response;
};

export const logOutRequest = async () => {
  await axiosInstance.get<void>('/api/logOut');
};

export const getMe = async () => {
  const response = await axiosInstance.get<GetMeResponse>('/api/users/me');
  return response;
};

export const fetchProducts = async () => {
  const response = await axiosInstance.get<FetchProductsResponse>('/api/products');
  return response;
};

export const payForProduct = async (values: PayForProductPayload) => {
  const response = await axiosInstance.post<PayForProductResponse>('/api/payments/buy', values);
  return response;
};

export const fetchCodes = async () => {
  const response = await axiosInstance.get<FetchCodesResponse>('/api/code/self');
  return response;
};

export const fetchSubscribes = async () => {
  const response = await axiosInstance.get<FetchSubscribesResponse>('/api/subscribe/self');
  return response;
};
