import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const revalidate = 60;

export const metadata = {
  title: "المركز الإعلامي والمقالات",
  description: "أحدث المقالات والأخبار القانونية من شركة سمو الحكمة للمحاماة والاستشارات القانونية",
};

interface BlogPageProps {
  searchParams?: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const pageParam = searchParams?.page;
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const pageSize = 6;

  const totalArticles = await prisma.article.count({
    where: { published: true },
  });

  const totalPages = Math.max(1, Math.ceil(totalArticles / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: (safeCurrentPage - 1) * pageSize,
    take: pageSize,
  });

  return (
    <div className="bg-cream min-h-screen pt-36 pb-24">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark text-xs font-bold mb-3 border border-gold/30">
            الثقافة العدلية والأخبار
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4 font-cairo">
            المركز الإعلامي
          </h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-cairo">
            اطلع على أحدث المقالات القانونية والتحليلات النظامية والنصائح العدلية المعتمدة بقلم نخبة المستشارين في شركة سمو الحكمة.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto">
            <div className="text-gold text-5xl mb-4">⚖️</div>
            <h3 className="text-2xl font-bold text-navy mb-2">قريباً جداً</h3>
            <p className="text-gray-500 text-sm">
              نعمل حالياً على نشر مقالات ودراسات قانونية قيمة، يرجى العودة لاحقاً.
            </p>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {articles.map((article) => (
                <Link
                  href={`/blog/${article.slug}`}
                  key={article.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col hover:-translate-y-1"
                >
                  <div className="relative h-60 overflow-hidden bg-navy">
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
                        <svg
                          className="w-16 h-16 text-gold/40"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm text-gold border border-gold/30 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      مقال قانوني
                    </div>
                  </div>

                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-gray-500 mb-3 gap-2">
                      <svg
                        className="w-4 h-4 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        {format(new Date(article.createdAt), "dd MMMM yyyy", { locale: ar })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                      {article.excerpt || "اضغط لقراءة تفاصيل المقال القانوني كاملاً..."}
                    </p>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-gold font-bold text-sm">
                      <span>قراءة المقال</span>
                      <span className="transform group-hover:-translate-x-1.5 transition-transform duration-300 text-lg">
                        ←
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-6 border-t border-gray-200">
                {/* Previous Button */}
                {safeCurrentPage > 1 ? (
                  <Link
                    href={`/blog?page=${safeCurrentPage - 1}`}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-navy font-bold text-sm hover:border-gold hover:text-gold transition-all shadow-sm"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>السابق</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-100 text-gray-400 font-bold text-sm cursor-not-allowed select-none">
                    <ChevronRight className="w-4 h-4" />
                    <span>السابق</span>
                  </span>
                )}

                {/* Page Number Buttons */}
                <div className="flex items-center gap-1.5 mx-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isActive = pageNum === safeCurrentPage;
                    return (
                      <Link
                        key={pageNum}
                        href={`/blog?page=${pageNum}`}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all shadow-sm ${
                          isActive
                            ? "bg-navy text-gold border-2 border-gold shadow-md"
                            : "bg-white text-gray-700 hover:bg-gold/10 hover:text-gold hover:border-gold border border-gray-200"
                        }`}
                      >
                        {pageNum}
                      </Link>
                    );
                  })}
                </div>

                {/* Next Button */}
                {safeCurrentPage < totalPages ? (
                  <Link
                    href={`/blog?page=${safeCurrentPage + 1}`}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-navy font-bold text-sm hover:border-gold hover:text-gold transition-all shadow-sm"
                  >
                    <span>التالي</span>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-100 text-gray-400 font-bold text-sm cursor-not-allowed select-none">
                    <span>التالي</span>
                    <ChevronLeft className="w-4 h-4" />
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
