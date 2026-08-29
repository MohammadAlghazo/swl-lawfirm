import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // 1. Basic Validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'يرجى تعبئة جميع الحقول المطلوبة (الاسم، الجوال، الرسالة)' },
        { status: 400 }
      );
    }

    // 2. Save to Database using Prisma
    const newContactMessage = await prisma.contactMessage.create({
      data: {
        name,
        phone,
        email: email || null,
        message,
      },
    });

    // 3. Send Email using Resend
    // (If the API key is missing or invalid, we catch the error but still return success for the DB save)
    try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Resend provides a testing domain
        to: 'mohammadalghazo2004m@gmail.com', // Temporary for testing until domain is verified
        subject: `رسالة تواصل جديدة من: ${name}`,
        html: `
          <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #1B2B4B;">رسالة جديدة من الموقع الإلكتروني</h2>
            <p><strong>الاسم:</strong> ${name}</p>
            <p><strong>الجوال:</strong> ${phone}</p>
            <p><strong>البريد الإلكتروني:</strong> ${email || 'لم يتم إدخاله'}</p>
            <hr />
            <p><strong>نص الرسالة:</strong></p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
              ${message.replace(/\n/g, '<br />')}
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      // We don't throw here because we still saved it to the DB successfully.
    }

    // 4. Return success response
    return NextResponse.json(
      { success: true, message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً!' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'حدث خطأ غير متوقع أثناء معالجة طلبك. يرجى المحاولة لاحقاً.' },
      { status: 500 }
    );
  }
}
