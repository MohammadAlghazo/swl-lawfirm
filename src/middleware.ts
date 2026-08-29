import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Protect all /admin routes except /admin/login
  if (path.startsWith('/admin') && !path.startsWith('/admin/login')) {
    const sessionCookie = request.cookies.get('session')?.value;
    
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    try {
      // Verify token
      const payload = await decrypt(sessionCookie);
      
      if (!payload || !payload.id) {
        throw new Error('Invalid token');
      }
      
      // Token is valid, proceed
      return NextResponse.next();
    } catch (error) {
      // Token is invalid or expired
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('session');
      return response;
    }
  }
  
  // If user is already logged in and tries to access /admin/login, redirect to /admin
  if (path === '/admin/login') {
    const sessionCookie = request.cookies.get('session')?.value;
    if (sessionCookie) {
      try {
        await decrypt(sessionCookie);
        return NextResponse.redirect(new URL('/admin', request.url));
      } catch (error) {
        // Just let them go to login if token is invalid
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
