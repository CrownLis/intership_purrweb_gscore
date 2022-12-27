import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string;
};

export default async function signUp(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { data } = await axios.post('http://localhost:3000/api/users/sign-up', req.body);
  res.status(200).json(data.user);
}
