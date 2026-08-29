import ArticleEditor from "@/components/admin/ArticleEditor";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const article = await prisma.article.findUnique({
    where: { id: params.id }
  });

  if (!article) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link 
          href="/admin/articles"
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-navy hover:border-navy transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-navy mb-1">تعديل المقال</h1>
          <p className="text-gray-600">تعديل نص وتفاصيل المقال: {article.title}</p>
        </div>
      </div>

      <ArticleEditor initialData={article} />
    </div>
  );
}
