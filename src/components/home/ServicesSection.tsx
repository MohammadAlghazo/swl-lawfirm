"use client";

import Link from "next/link";
import {
  MessageSquare, Gavel, FileText, Target, Building2,
  TrendingDown, ArrowLeft
} from "lucide-react";

const services = [
  { num: "01", icon: <MessageSquare size={24} />, title: "الاستشارات والمساندة القانونية" },
  { num: "02", icon: <Gavel size={24} />, title: "التقاضي والتمثيل القضائي" },
  { num: "03", icon: <FileText size={24} />, title: "العقود والاتفاقيات والصياغة القانونية" },
  { num: "04", icon: <Target size={24} />, title: "التحكيم والوساطة وتسوية النزاعات" },
  { num: "05", icon: <TrendingDown size={24} />, title: "التنفيذ والتحصيل والمطالبات" },
  { num: "06", icon: <Building2 size={24} />, title: "الشركات والاستثمار والحوكمة" },
];

export default function ServicesSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#1B2B4B" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
              خدماتنا
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
          </div>
          <h2 className="section-title section-title-white text-4xl md:text-5xl mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>
            منظومة قانونية متكاملة
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Cairo, sans-serif" }}>
            نقدم طيفاً شاملاً من الخدمات القانونية لحماية حقوقك ومصالحك
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service) => (
            <div
              key={service.num}
              className="group relative p-6 rounded-lg cursor-pointer transition-all duration-300"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(176, 141, 87, 0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(176, 141, 87, 0.08)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.15)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Number */}
              <span
                className="absolute top-4 left-4 text-5xl font-bold opacity-10 select-none"
                style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
              >
                {service.num}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(176, 141, 87, 0.12)" }}
              >
                <span style={{ color: "#B08D57" }}>{service.icon}</span>
              </div>

              {/* Title */}
              <h3
                className="font-semibold text-base leading-snug"
                style={{ color: "#ffffff", fontFamily: "Cairo, sans-serif" }}
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/services" className="btn-gold">
            <span>عرض جميع الخدمات</span>
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
