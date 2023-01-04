import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/logIn', '/createAccount', '/checkout', '/mySubscriptions', '/start', '/personalInfo', '/changePassword'],
};

export default async function middleware(req: NextRequest) {
  const { value: token } = req.cookies.get('auth-token') || {};

  const isAuthPage = ['/logIn', '/createAccount'].some((pathname) => req.nextUrl.pathname.startsWith(pathname));
  const isAuthUser = !!token;

  if (isAuthPage && isAuthUser) {
    return NextResponse.redirect(new URL('/mySubscriptions', req.url));
  }
  if (!isAuthPage && !isAuthUser) {
    return NextResponse.redirect(new URL('/createAccount', req.url));
  }
  return NextResponse.next();
}
