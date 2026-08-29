import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "المركز الإعلامي والمقالات",
  description: "أحدث المقالات والأخبار القانونية من شركة سمو الحكمة للمحاماة والاستشارات القانونية",
};

export default async function BlogPage() {
  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">المركز الإعلامي</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            اطلع على أحدث المقالات والأخبار القانونية والثقافة العدلية التي يقدمها فريق الخبراء في شركة سمو الحكمة.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-navy mb-2">قريباً جداً</h3>
            <p className="text-gray-500">نعمل حالياً على إعداد مقالات قانونية قيمة لكم، يرجى العودة لاحقاً.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                href={`/blog/${article.slug}`} 
                key={article.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-navy-light">
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/20">
                      <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                    مقال قانوني
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span>{format(new Date(article.createdAt), 'dd MMMM yyyy', { locale: ar })}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors leading-relaxed">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-loose">
                    {article.excerpt || "اضغط لقراءة تفاصيل المقال الكاملة..."}
                  </p>
                  
                  <div className="mt-auto flex items-center text-gold font-bold text-sm gap-2">
                    <span>اقرأ المزيد</span>
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
