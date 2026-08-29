import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith('/admin') && !path.startsWith('/admin/login')) {
    const sessionCookie = request.cookies.get('session')?.value;

    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {

      const payload = await decrypt(sessionCookie);

      if (!payload || !payload.id) {
        throw new Error('Invalid token');
      }

      return NextResponse.next();
    } catch (error) {

      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('session');
      return response;
    }
  }

  if (path === '/admin/login') {
    const sessionCookie = request.cookies.get('session')?.value;
    if (sessionCookie) {
      try {
        await decrypt(sessionCookie);
        return NextResponse.redirect(new URL('/admin', request.url));
      } catch (error) {

      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
