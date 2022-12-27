import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { setCookie, getCookie } from 'cookies-next';

type Data = {
  name: string;
};

export default async function login(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.body);
  console.log(getCookie('access_token', { req, res }));
  const { data } = await axios.post('http://localhost:3000/api/users/sign-in', req.body);
  setCookie('access_token', data.token, { httpOnly: true, req, res });
  res.status(200).json(data.user);
}
