import { deleteCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

export default function logOut(req: NextApiRequest, res: NextApiResponse) {
  deleteCookie('auth-token', { req, res });
  res.redirect(200, '/logIn');
}
