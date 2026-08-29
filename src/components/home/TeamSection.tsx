"use client";

import Link from "next/link";
import Image from "next/image";
import { User, ArrowLeft } from "lucide-react";

const teamMembers = [
  {
    name: "عبدالعزيز مرزوق السهلي",
    position: "رئيس مجلس الإدارة",
    image: "/images/team/abdulaziz-alsahli.png",
  },
  {
    name: "ريان عيسى السهلي",
    position: "شريك مؤسس",
    image: "/images/team/rayan.png",
  },
  {
    name: "عبدالعزيز عبدالمحسن الحجيلي",
    position: "شريك مؤسس",
    image: "/images/team/abdulaziz-alhujaili.png",
  },
  {
    name: "تركي الحجاجي",
    position: "شريك مهني",
    image: "/images/team/turki.png",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
              فريق العمل
            </span>
            <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
          </div>
          <h2 className="section-title text-4xl md:text-5xl mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>
            فريق متخصص
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "#6B7280", fontFamily: "Cairo, sans-serif" }}>
            نخبة من المستشارين والمحامين ذوي الخبرات المتخصصة
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center p-6 rounded-lg transition-all duration-300 ${index !== 0 ? 'hidden sm:block' : ''}`}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(176, 141, 87, 0.12)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(27, 43, 75, 0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.12)";
              }}
            >
              {/* Avatar */}
              <div className="mx-auto mb-5 relative w-24 h-24">
                <div
                  className="w-24 h-24 rounded-full mx-auto overflow-hidden relative bg-gray-100"
                  style={{
                    border: "3px solid rgba(176, 141, 87, 0.3)",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized={true}
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                {/* Gold accent ring */}
                <div
                  className="absolute inset-0 w-24 h-24 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ border: "2px solid #B08D57", margin: "-2px" }}
                />
              </div>

              {/* Name */}
              <h3
                className="font-bold text-base mb-1.5 leading-snug"
                style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
              >
                {member.name}
              </h3>

              {/* Position */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(176, 141, 87, 0.1)",
                  color: "#B08D57",
                  fontFamily: "Cairo, sans-serif",
                }}
              >
                {member.position}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/team" className="btn-navy-outline">
            <span>تعرف أكثر على فريق العمل</span>
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
