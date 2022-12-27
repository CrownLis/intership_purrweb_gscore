import axios from 'axios';
import { getCookie } from 'cookies-next';

export const Api = axios.create({
  baseURL: 'http://localhost:3001',
});

const backendApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    access_token: getCookie('access_token'),
  },
});

export default async function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);
  console.log(getCookie('access_token', { req, res }));
  const { data } = await axios.post('http://localhost:3000/api/users/sign-in', req.body);
  setCookie('access_token', data.token, { httpOnly: true, req, res });
  res.status(200).json(data.user);
}

export const signUp = async (values: { email: string; username: string; password: string }) => {
  const response = await Api.post('api/signUp', values);
  return response;
};

export const signIn = async (values: { email: string; password: string }) => {
  const response = await Api.post('api/login', values);
  return response;
};

export const fetchProducts = async () => {
  const response = await backendApi.get('/api/products');
  return response;
};
