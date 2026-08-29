import prisma from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Plus, Edit } from "lucide-react";
import Image from "next/image";
import DeleteArticleButton from "@/components/admin/DeleteArticleButton";

export const dynamic = "force-dynamic";

export default async function AdminArticlesPage() {
  const articles = await prisma.article.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy mb-2">المقالات</h1>
          <p className="text-gray-600">إدارة مقالات المركز الإعلامي (إضافة، تعديل، حذف)</p>
        </div>
        <Link 
          href="/admin/articles/new" 
          className="flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-4 py-2 rounded-lg font-bold transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>إضافة مقال جديد</span>
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {articles.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <p className="mb-4">لا يوجد أي مقالات حتى الآن.</p>
            <Link 
              href="/admin/articles/new" 
              className="inline-flex items-center gap-2 text-gold hover:underline"
            >
              <span>اضغط هنا لإضافة مقالك الأول</span>
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-gray-50 text-gray-600 text-sm font-bold border-b border-gray-100">
                <tr>
                  <th className="py-4 px-6">صورة المقال</th>
                  <th className="py-4 px-6">عنوان المقال</th>
                  <th className="py-4 px-6">الحالة</th>
                  <th className="py-4 px-6">تاريخ النشر</th>
                  <th className="py-4 px-6">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6">
                      {article.coverImage ? (
                        <div className="w-16 h-12 relative rounded overflow-hidden">
                          <Image 
                            src={article.coverImage} 
                            alt={article.title}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-xs">
                          لا توجد
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 font-bold text-navy">
                      {article.title}
                    </td>
                    <td className="py-4 px-6">
                      {article.published ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                          منشور
                        </span>
                      ) : (
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold">
                          مسودة
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">
                      {format(new Date(article.createdAt), 'dd MMMM yyyy', { locale: ar })}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <Link 
                          href={`/admin/articles/${article.id}/edit`}
                          className="text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded transition-colors"
                          title="تعديل"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <DeleteArticleButton id={article.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
