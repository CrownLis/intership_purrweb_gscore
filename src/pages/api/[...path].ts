import httpProxy from 'http-proxy';
import { getCookie, setCookie } from 'cookies-next';
import url from 'url';
import { NextApiRequest, NextApiResponse } from 'next';

const { BACKEND_URL } = process.env;

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function api(req: NextApiRequest, res: NextApiResponse) {
  return new Promise<void>((resolve, reject) => {
    const { pathname } = url.parse(req.url || '');

    const isAuthPath = ['/api/users/sign-in', '/api/users/sign-up'].includes(pathname || '');

    const authToken = getCookie('auth-token', { req, res });

    req.headers.cookie = '';
    if (authToken) {
      req.headers['auth-token'] = authToken.toString();
    }

    if (isAuthPath) {
      proxy.once('proxyRes', interceptAuthResponse);
    }

    proxy.once('error', reject);

    proxy.web(req, res, {
      target: BACKEND_URL,
      autoRewrite: false,
      selfHandleResponse: isAuthPath,
    });

    function interceptAuthResponse(proxyRes: any, baseReq: any, baseRes: any) {
      let apiResponseBody = '';
      proxyRes.on('data', (chunk: string) => {
        apiResponseBody += chunk;
      });
      proxyRes.on('end', () => {
        try {
          const { token } = JSON.parse(apiResponseBody);
          setCookie('auth-token', token, {
            req: baseReq,
            res: baseRes,
            httpOnly: true,
            sameSite: 'lax',
          });

          baseRes.status(200).json({ loggedIn: true });

          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  });
}
