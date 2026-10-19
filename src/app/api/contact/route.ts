import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character] ?? character));

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch {
    return NextResponse.json({ error: "تعذر قراءة الرسالة. يرجى التحقق من البيانات." }, { status: 400 });
  }
  if (!body || typeof body !== "object") return NextResponse.json({ error: "بيانات الرسالة غير صحيحة." }, { status: 400 });
  const input = body as Record<string, unknown>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const phone = typeof input.phone === "string" ? input.phone.replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))).replace(/[\s()-]/g, "") : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  if (!name || name.length > 120 || !/^\+?[0-9]{9,15}$/.test(phone) || message.length < 10 || message.length > 5000 || email.length > 254 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return NextResponse.json({ error: "تحقق من الاسم ورقم الجوال والبريد، واكتب رسالة بين ١٠ و٥٠٠٠ حرف." }, { status: 400 });
  }
  try {
    await prisma.contactMessage.create({ data: { name, phone, email: email || null, message } });
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const result = await resend.emails.send({
          from: "سمو الحكمة <noreply@swl-lawfirm.com.sa>",
          to: "info@swl-lawfirm.com.sa",
          subject: "رسالة تواصل جديدة من الموقع",
          html: `<div dir="rtl" style="font-family:Arial,sans-serif;line-height:1.8"><h2>رسالة جديدة من الموقع الإلكتروني</h2><p>الاسم: ${escapeHtml(name)}</p><p>الجوال: ${escapeHtml(phone)}</p><p>البريد: ${escapeHtml(email || "لم يتم إدخاله")}</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p></div>`,
        });
        if (result.error) console.error("Contact email notification failed");
      } catch { console.error("Contact email notification failed"); }
    }
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    console.error("Contact message could not be saved");
    return NextResponse.json({ error: "تعذر حفظ الرسالة. يرجى المحاولة لاحقاً أو الاتصال بنا مباشرة." }, { status: 503 });
  }
}
