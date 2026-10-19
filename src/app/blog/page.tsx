import { withPageMetadata } from "@/lib/metadata";
import prisma from "@/lib/prisma";
import Link from "next/link";
import ArticleImage from "@/components/blog/ArticleImage";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { ChevronRight, ChevronLeft, Calendar, ArrowLeft, BookOpen } from "lucide-react";

export const revalidate = 60;

const metadata = {
  title: "المركز الإعلامي",
  description: "أحدث المقالات والدراسات القانونية والتحليلات النظامية المعتمدة من شركة سمو الحكمة للمحاماة والاستشارات القانونية",
};

interface BlogPageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const pageParam = (await searchParams)?.page;
  const currentPage = Math.max(1, Math.min(Number.parseInt(pageParam || "1", 10) || 1, 1000000));
  const pageSize = 6; // 3 columns x 2 rows = 6 items per page

  let unavailable = false;
  let totalArticles = 0;
  let articles: Array<{
    id: number;
    slug: string;
    title: string;
    excerpt: string | null;
    coverImage: string | null;
    createdAt: Date;
  }> = [];

  try {
    totalArticles = await prisma.article.count({
      where: { published: true },
    });

    const totalPagesCalculated = Math.max(1, Math.ceil(totalArticles / pageSize));
    const safeCurrentPage = Math.min(currentPage, totalPagesCalculated);

    articles = await prisma.article.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      skip: (safeCurrentPage - 1) * pageSize,
      take: pageSize,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        coverImage: true,
        createdAt: true,
      },
    });
  } catch {
    unavailable = true;
  }

  const totalPages = Math.max(1, Math.ceil(totalArticles / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  return (
    <div className="bg-[#F9F7F4] min-h-screen pt-28 md:pt-36 pb-20">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 md:w-12 bg-[#B08D57]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#B08D57] uppercase">
              المقالات والتحليلات النظامية
            </span>
            <div className="h-px w-8 md:w-12 bg-[#B08D57]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#34495D] mb-3 leading-tight">
            المركز الإعلامي
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
            اطلع على أحدث المقالات القانونية والتحليلات النظامية والنصائح العدلية المعتمدة بقلم نخبة المستشارين في شركة سمو الحكمة.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-lg mx-auto p-6">
            <BookOpen className="w-12 h-12 text-[#B08D57] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-[#34495D] mb-2">{unavailable ? "تعذر تحميل المقالات" : "المقالات قريباً"}</h3>
            <p className="text-gray-500 text-sm">
              {unavailable ? "يرجى المحاولة لاحقاً، أو التواصل مع فريقنا." : "لا توجد مقالات منشورة حالياً. يمكنك التواصل مع فريقنا لمناقشة استفسارك."}
            </p>
            <Link href="/contact" className="service-request">تواصل معنا <ArrowLeft size={16} /></Link>
          </div>
        ) : (
          <>
            {/* ── 3 Articles per row across 2 rows (6 items per page) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 mb-12">
              {articles.map((article) => (
                <Link
                  href={`/blog/${article.slug}`}
                  key={article.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#B08D57]/30 transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-[#34495D]">
                    {article.coverImage ? (
                      <ArticleImage src={article.coverImage} alt={article.title} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[#B08D57]/30">
                        <BookOpen className="w-14 h-14" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute top-3.5 right-3.5 bg-[#34495D]/85 backdrop-blur-sm text-[#C9A96E] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#B08D57]/30 shadow-sm">
                      مقال قانوني
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-gray-400 mb-2.5 gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                      <span>
                        {format(new Date(article.createdAt), "dd MMMM yyyy", { locale: ar })}
                      </span>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-[#34495D] mb-2.5 group-hover:text-[#B08D57] transition-colors leading-snug">
                      {article.title}
                    </h2>

                    <p className="text-gray-500 mb-5 text-sm sm:text-base leading-loose line-clamp-3">
                      {article.excerpt || "اضغط لقراءة تفاصيل المقال القانوني كاملاً..."}
                    </p>

                    <div className="mt-auto pt-3.5 border-t border-gray-100 flex items-center justify-between text-[#B08D57] font-semibold text-xs sm:text-sm">
                      <span>قراءة المقال</span>
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ── Prominent Pagination Controls ── */}
            {totalPages > 1 && (
              <div className="flex flex-wrap items-center justify-center gap-2 pt-6 border-t border-gray-200">
                {/* Previous Button */}
                {safeCurrentPage > 1 ? (
                  <Link
                    href={`/blog?page=${safeCurrentPage - 1}`}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#34495D] font-bold text-xs sm:text-sm hover:border-[#B08D57] hover:text-[#B08D57] hover:shadow-sm transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>السابق</span>
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-300 font-bold text-xs sm:text-sm cursor-not-allowed select-none">
                    <ChevronRight className="w-4 h-4" />
                    <span>السابق</span>
                  </span>
                )}

                {/* Page Number Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-1.5 mx-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isActive = pageNum === safeCurrentPage;
                    return (
                      <Link
                        key={pageNum}
                        href={`/blog?page=${pageNum}`}
                        aria-label={`الصفحة ${pageNum}`}
                        aria-current={isActive ? "page" : undefined}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${
                          isActive
                            ? "bg-[#34495D] text-[#C9A96E] shadow-sm"
                            : "bg-white text-gray-600 hover:text-[#34495D] hover:border-[#B08D57]/40 border border-gray-200"
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
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[#34495D] font-bold text-xs sm:text-sm hover:border-[#B08D57] hover:text-[#B08D57] hover:shadow-sm transition-all"
                  >
                    <span>التالي</span>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-100 bg-gray-50 text-gray-300 font-bold text-xs sm:text-sm cursor-not-allowed select-none">
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

export function generateMetadata() { return withPageMetadata(metadata, "/blog"); }
