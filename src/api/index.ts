import axios from 'axios';
import { PayForProductPayload, SignInPayload, SignUpPayload } from '@/types/payload';
import {
  FetchProductsResponse,
  GetMeResponse,
  PayForProductResponse,
  SignInResponse,
  SignUpResponse,
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
