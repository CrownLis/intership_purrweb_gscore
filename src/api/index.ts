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

export const getMe = async (values: { email: string; password: string }) => {
  const response = await axiosInstance.post('/api/users/sign-in', values);
  return response;
};

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/api/products');
  return response;
};
