import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/checkout', '/mySubscriptions', '/buySubscribe', '/start', '/settings'],
};

export default async function middleware(req: NextRequest) {
  const { value: token } = req.cookies.get('auth-token') || {};

  if (!token) {
    const cloneUrl = req.nextUrl.clone();
    cloneUrl.pathname = '/logIn';

    return NextResponse.redirect(cloneUrl);
  }

  return NextResponse.next();
}
