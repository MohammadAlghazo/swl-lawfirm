import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose/jwt/verify";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === "/admin/login") return NextResponse.next();
  const token = request.cookies.get("session")?.value;
  const secret = process.env.JWT_SECRET;
  if (token && secret && secret.length >= 32) {
    try {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(secret), { algorithms: ["HS256"] });
      if (typeof payload.id === "number" && typeof payload.email === "string") return NextResponse.next();
    } catch {
      return redirectToLogin(request);
    }
  }
  return redirectToLogin(request);
}

function redirectToLogin(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/admin/login", request.url));
  response.cookies.delete("session");
  return response;
}

export const config = { matcher: ["/admin/:path*"] };
