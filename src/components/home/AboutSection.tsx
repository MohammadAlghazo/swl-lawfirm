"use client";

import Link from "next/link";
import { Scale, Eye, Lightbulb, ArrowLeft } from "lucide-react";

const pillars = [
  {
    icon: <Scale size={28} />,
    title: "معالجة أدق",
    desc: "تحفظ الحقوق وتدعم القرار",
  },
  {
    icon: <Eye size={28} />,
    title: "رؤية أوضح",
    desc: "للخيارات والمخاطر والآثار القانونية",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "فهم أعمق",
    desc: "للقضية والاحتياج قبل تقديم الرأي",
  },
];

export default function AboutSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                من نحن
              </span>
            </div>

            <h2 className="section-title mb-6">
              شركة متخصصة في
              <br />
              <span style={{ color: "#B08D57" }}>الخدمات القانونية المتكاملة</span>
            </h2>

            <div className="h-0.5 w-16 mb-8" style={{ background: "linear-gradient(90deg, #B08D57, transparent)" }} />

            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#374151", fontFamily: "Cairo, sans-serif", lineHeight: "2" }}
            >
              شركة سمو الحكمة للمحاماة والاستشارات القانونية شركة مهنية تقدم منظومة متكاملة من الخدمات القانونية للأفراد وقطاع الأعمال، انطلاقاً من فهم دقيق للأنظمة، وإدراك لطبيعة المصالح والتحديات المرتبطة بكل ملف.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#374151", fontFamily: "Cairo, sans-serif", lineHeight: "2" }}
            >
              نعمل على تقديم المشورة القانونية، وإدارة النزاعات، وصياغة العقود، ودعم الأعمال والصفقات، وتمثيل العملاء أمام الجهات القضائية وشبه القضائية ذات الاختصاص، بأسلوب مهني يقوم على الدقة والوضوح وحماية المصالح.
            </p>

            <Link href="/about" className="btn-gold">
              <span>اقرأ أكثر عنا</span>
              <ArrowLeft size={18} />
            </Link>
          </div>

          {/* Pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="flex items-start gap-5 p-6 rounded-lg transition-all duration-300 group"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(176, 141, 87, 0.15)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(27, 43, 75, 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.15)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Number */}
                <div
                  className="text-5xl font-bold opacity-10 select-none absolute"
                  style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(176, 141, 87, 0.1)" }}
                >
                  <span style={{ color: "#B08D57" }}>{p.icon}</span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="text-lg font-bold mb-1.5"
                    style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "#6B7280", fontFamily: "Cairo, sans-serif" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
