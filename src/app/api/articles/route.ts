import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {

    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "غير مصرح لك للقيام بهذه العملية" }, { status: 401 });
    }

    const { title, slug, excerpt, content, coverImage, published } = await request.json();

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "يرجى تعبئة جميع الحقول المطلوبة" }, { status: 400 });
    }

    const existingArticle = await prisma.article.findUnique({
      where: { slug }
    });

    if (existingArticle) {
      return NextResponse.json({ error: "رابط المقال (Slug) موجود مسبقاً، يرجى تغييره" }, { status: 400 });
    }

    const article = await prisma.article.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage: coverImage || null,
        published,
      }
    });

    return NextResponse.json({ success: true, article }, { status: 201 });

  } catch (error) {
    console.error("Create Article Error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء حفظ المقال" }, { status: 500 });
  }
}
