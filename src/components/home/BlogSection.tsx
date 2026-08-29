"use client";

import Link from "next/link";
import { Calendar, ArrowLeft, Newspaper } from "lucide-react";

// Placeholder articles until DB is connected
const placeholderArticles = [
  {
    id: 1,
    title: "أهمية صياغة العقود التجارية وحماية حقوق الأطراف",
    summary: "تعرف على أبرز الأخطاء الشائعة في صياغة العقود التجارية وكيف تحمي نفسك قانونياً",
    date: "15 أغسطس 2025",
    slug: "commercial-contracts",
    category: "العقود القانونية",
  },
  {
    id: 2,
    title: "حقوق العمال وأصحاب العمل في نظام العمل السعودي",
    summary: "دليل شامل لفهم حقوقك والتزاماتك وفق نظام العمل في المملكة العربية السعودية",
    date: "10 أغسطس 2025",
    slug: "labor-law-rights",
    category: "قانون العمل",
  },
  {
    id: 3,
    title: "التحكيم التجاري بديلاً فعالاً عن التقاضي التقليدي",
    summary: "مزايا التحكيم في تسوية النزاعات التجارية وأثره في توفير الوقت والتكاليف",
    date: "5 أغسطس 2025",
    slug: "commercial-arbitration",
    category: "التحكيم والوساطة",
  },
];

export default function BlogSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {placeholderArticles.map((article) => (
            <article
              key={article.id}
              className="group rounded-lg overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(27, 43, 75, 0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(27, 43, 75, 0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(27, 43, 75, 0.1)";
              }}
            >
              {/* Image placeholder */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1B2B4B, #243660)" }}
              >
                <Newspaper size={40} style={{ color: "rgba(176, 141, 87, 0.4)" }} />
                {/* Category badge */}
                <span
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "rgba(176, 141, 87, 0.2)", color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
                >
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} style={{ color: "#B08D57" }} />
                  <span className="text-xs" style={{ color: "#9CA3AF", fontFamily: "Cairo, sans-serif" }}>
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-bold text-base mb-3 leading-snug line-clamp-2"
                  style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
                >
                  {article.title}
                </h3>

                {/* Summary */}
                <p
                  className="text-sm mb-5 line-clamp-2 leading-relaxed"
                  style={{ color: "#6B7280", fontFamily: "Cairo, sans-serif" }}
                >
                  {article.summary}
                </p>

                {/* Read more */}
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                  style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "8px")}
                >
                  اقرأ المزيد
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
