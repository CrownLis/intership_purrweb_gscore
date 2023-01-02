import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.FRONTEND_URL,
});

export const signUp = async (values: { email: string; username: string; password: string }) => {
  const response = await axiosInstance.post('/api/users/sign-up', values);
  return response;
};

export const signIn = async (values: { email: string; password: string }) => {
  const response = await axiosInstance.post('/api/users/sign-in', values);
  return response;
};

export const logOutRequest = async () => {
  await axiosInstance.get('/api/logOut');
};

export const getMe = async () => {
  const response = await axiosInstance.get('/api/users/me');
  return response;
};

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/api/products');
  return response;
};

export const payForProduct = async (values: { priceId: number }) => {
  const response = await axiosInstance.post('/api/payments/buy', values);
  return response;
};
