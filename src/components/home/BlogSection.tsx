import Link from "next/link";
import ArticleImage from "@/components/blog/ArticleImage";
import { Calendar, ArrowLeft, Newspaper } from "lucide-react";
import prisma from "@/lib/prisma";
import type { Article } from "@prisma/client";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export default async function BlogSection() {
  let articles: Article[] = [];
  try {
    articles = await prisma.article.findMany({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });
  } catch {
    articles = [];
  }

  return (
    <section className="section-padding bg-white" id="blog">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2.5 sm:mb-4">
              <div className="h-px w-8 sm:w-12 bg-[#B08D57]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B08D57]">
                المركز الإعلامي
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#34495D]">
              آخر المقالات
            </h2>
          </div>

          {/* Desktop CTA Button */}
          <Link
            href="/blog"
            className="btn-navy-outline hidden sm:inline-flex items-center gap-2 flex-shrink-0"
          >
            <span>عرض جميع المقالات</span>
            <ArrowLeft size={16} />
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-2xl border border-gray-100">
            لا توجد مقالات منشورة حتى الآن.
          </div>
        ) : (
          <>
            {/* Articles Grid: On Mobile shows only 1 article; on Desktop shows 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
              {articles.map((article, index) => (
                <Link
                  href={`/blog/${article.slug}`}
                  key={article.id}
                  className={`group rounded-2xl overflow-hidden transition-all duration-300 bg-white border border-[#34495D]/10 hover:border-[#B08D57]/40 shadow-xs hover:shadow-lg flex flex-col justify-between hover:-translate-y-1 ${
                    index > 0 ? "hidden md:flex" : "flex"
                  }`}
                >
                  <div>
                    <div
                      className="h-48 sm:h-52 flex items-center justify-center relative overflow-hidden"
                      style={{ background: "linear-gradient(135deg, #34495D, #4B6074)" }}
                    >
                      {article.coverImage ? (
                        <ArticleImage src={article.coverImage} alt={article.title} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                      ) : (
                        <Newspaper size={40} className="text-[#B08D57]/40" />
                      )}
                      <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm bg-white/10 text-white border border-white/20">
                        مقال قانوني
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      {/* Date */}
                      <div className="flex items-center gap-2 mb-2.5">
                        <Calendar size={13} className="text-[#B08D57]" />
                        <span className="text-[11px] sm:text-xs text-gray-400">
                          {format(new Date(article.createdAt), "dd MMMM yyyy", { locale: ar })}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-sm sm:text-base mb-2.5 leading-snug line-clamp-2 text-[#34495D] group-hover:text-[#B08D57] transition-colors">
                        {article.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {article.excerpt || "اضغط لقراءة تفاصيل المقال..."}
                      </p>
                    </div>
                  </div>

                  {/* Read more footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-0">
                    <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#B08D57] group-hover:text-[#34495D] transition-colors">
                      <span>اقرأ المزيد</span>
                      <ArrowLeft size={14} className="transform group-hover:-translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile Only: Navigation button to all articles */}
            <div className="mt-6 sm:hidden">
              <Link
                href="/blog"
                className="btn-navy-outline w-full py-3 text-xs justify-center flex items-center gap-2"
              >
                <span>عرض جميع المقالات والدراسات</span>
                <ArrowLeft size={14} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
