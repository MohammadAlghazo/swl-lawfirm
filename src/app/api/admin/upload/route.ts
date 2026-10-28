import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import sharp from "sharp";
import { put } from "@vercel/blob";
import path from "path";
import fs from "fs/promises";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: "غير مصرح لك بالوصول. يرجى تسجيل الدخول أولاً." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "لم يتم اختيار أي ملف لرفعه." },
        { status: 400 }
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "الملف المختار ليس صورة صالحة." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const inputBuffer = Buffer.from(arrayBuffer);

    const optimizedBuffer = await sharp(inputBuffer)
      .rotate()
      .resize({
        width: 1400,
        height: 900,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 82, effort: 4 })
      .toBuffer();

    const timestamp = Date.now();
    const safeBaseName = file.name
      .replace(/\.[^.]+$/, "")
      .replace(/[^a-zA-Z0-9_-]/g, "-")
      .slice(0, 30) || "article-image";
    const filename = `${safeBaseName}-${timestamp}.webp`;

    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(`articles/${filename}`, optimizedBuffer, {
        access: "public",
        contentType: "image/webp",
      });

      return NextResponse.json({
        success: true,
        url: blob.url,
        size: optimizedBuffer.length,
        originalSize: file.size,
      });
    }

    if (process.env.NODE_ENV === "development" || !process.env.VERCEL) {
      const uploadsDir = path.join(process.cwd(), "public", "uploads", "articles");
      await fs.mkdir(uploadsDir, { recursive: true });
      const targetFilePath = path.join(uploadsDir, filename);
      await fs.writeFile(targetFilePath, optimizedBuffer);

      return NextResponse.json({
        success: true,
        url: `/uploads/articles/${filename}`,
        size: optimizedBuffer.length,
        originalSize: file.size,
      });
    }

    return NextResponse.json(
      {
        error:
          "يرجى تفعيل Vercel Blob من لوحة تحكم Vercel (Storage -> Create Blob) لتمكين التخزين السحابي للصور.",
      },
      { status: 503 }
    );
  } catch (error) {
    console.error("Upload API error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة ورفع الصورة. يرجى المحاولة مرة أخرى." },
      { status: 500 }
    );
  }
}
