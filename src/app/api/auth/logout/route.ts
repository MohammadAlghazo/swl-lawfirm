import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true, message: "تم تسجيل الخروج بنجاح" }, { status: 200 });
  
  response.cookies.delete('session');
  
  return response;
}
