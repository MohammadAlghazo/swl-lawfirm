import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Only authenticated users can delete messages
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "غير مصرح لك للقيام بهذه العملية" }, { status: 401 });
    }

    const messageId = params.id;

    // Check if message exists
    const existingMessage = await prisma.contactMessage.findUnique({
      where: { id: messageId }
    });

    if (!existingMessage) {
      return NextResponse.json({ error: "الرسالة غير موجودة" }, { status: 404 });
    }

    // Delete the message
    await prisma.contactMessage.delete({
      where: { id: messageId }
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Delete Message Error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء حذف الرسالة" }, { status: 500 });
  }
}
