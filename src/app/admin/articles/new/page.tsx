import ArticleEditor from "@/components/admin/ArticleEditor";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewArticlePage() {
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
          <h1 className="text-3xl font-bold text-navy mb-1">إضافة مقال جديد</h1>
          <p className="text-gray-600">اكتب ونسق مقالك الجديد ليتم نشره في المركز الإعلامي</p>
        </div>
      </div>

      <ArticleEditor />
    </div>
  );
}
