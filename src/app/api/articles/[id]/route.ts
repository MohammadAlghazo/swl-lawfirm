import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "غير مصرح لك للقيام بهذه العملية" }, { status: 401 });
    }

    const articleId = params.id;
    await prisma.article.delete({
      where: { id: articleId }
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Delete Article Error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء حذف المقال" }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "غير مصرح لك للقيام بهذه العملية" }, { status: 401 });
    }

    const articleId = params.id;
    const { title, slug, excerpt, content, coverImage, published } = await request.json();

    if (!title || !slug || !content) {
      return NextResponse.json({ error: "يرجى تعبئة جميع الحقول المطلوبة" }, { status: 400 });
    }

    const existingArticle = await prisma.article.findUnique({
      where: { slug }
    });

    if (existingArticle && existingArticle.id !== articleId) {
      return NextResponse.json({ error: "رابط المقال (Slug) مستخدم لمقال آخر، يرجى تغييره" }, { status: 400 });
    }

    const updatedArticle = await prisma.article.update({
      where: { id: articleId },
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage: coverImage || null,
        published,
      }
    });

    return NextResponse.json({ success: true, article: updatedArticle }, { status: 200 });

  } catch (error) {
    console.error("Update Article Error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء تحديث المقال" }, { status: 500 });
  }
}
