import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, Newspaper } from "lucide-react";
import prisma from "@/lib/prisma";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

export default async function BlogSection() {
  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 3
  });

  return (
    <section className="section-padding" style={{ backgroundColor: "#ffffff" }} id="blog">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                المركز الإعلامي
              </span>
            </div>
            <h2 className="section-title text-4xl md:text-5xl" style={{ fontFamily: "Cairo, sans-serif" }}>
              آخر المقالات
            </h2>
          </div>
          <Link href="/blog" className="btn-navy-outline flex-shrink-0">
            <span>عرض جميع المقالات</span>
            <ArrowLeft size={18} />
          </Link>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-2xl border border-gray-100">
            لا توجد مقالات منشورة حتى الآن.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((article) => (
              <Link
                href={`/blog/${article.slug}`}
                key={article.id}
                className="group rounded-lg overflow-hidden transition-all duration-300 block"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(27, 43, 75, 0.1)",
                }}
              >
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #1B2B4B, #243660)" }}
                >
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Newspaper size={40} style={{ color: "rgba(176, 141, 87, 0.4)" }} />
                  )}
                  <span
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-white/10"
                    style={{ color: "#ffffff", fontFamily: "Cairo, sans-serif", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    مقال قانوني
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={14} style={{ color: "#B08D57" }} />
                    <span className="text-xs" style={{ color: "#9CA3AF", fontFamily: "Cairo, sans-serif" }}>
                      {format(new Date(article.createdAt), 'dd MMMM yyyy', { locale: ar })}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold text-base mb-3 leading-snug line-clamp-2 group-hover:text-gold transition-colors"
                    style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
                  >
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p
                    className="text-sm mb-5 line-clamp-2 leading-relaxed"
                    style={{ color: "#6B7280", fontFamily: "Cairo, sans-serif" }}
                  >
                    {article.excerpt || "اضغط لقراءة تفاصيل المقال..."}
                  </p>

                  {/* Read more */}
                  <div
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                    style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
                  >
                    اقرأ المزيد
                    <ArrowLeft size={16} className="transform group-hover:-translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
