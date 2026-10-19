"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const teamMembers = [
  {
    name: "عبدالعزيز مرزوق السهلي",
    position: "رئيس مجلس الإدارة",
    image: "/images/team/abdulaziz-alsahli-v3.png",
  },
  {
    name: "ريان عيسى السهلي",
    position: "شريك مؤسس",
    image: "/images/team/rayan-v2.png",
  },
  {
    name: "عبدالعزيز عبدالمحسن الحجيلي",
    position: "شريك مؤسس",
    image: "/images/team/abdulaziz-alhujaili-v2.png",
  },
  {
    name: "تركي الحجاجي",
    position: "شريك مهني",
    image: "/images/team/turki-v2.png",
  },
];

export default function TeamSection() {
  return (
    <section className="section-padding bg-[#F9F7F4]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-[#B08D57]" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B08D57]">
              فريق العمل
            </span>
            <div className="h-px w-8 sm:w-12 bg-[#B08D57]" />
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#34495D] mb-2 sm:mb-3">
            فريق متخصص
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto px-2">
            نخبة من المستشارين والمحامين ذوي الخبرات المهنية المتخصصة
          </p>
        </div>

        {/* Team Grid: 2 columns on mobile (2x2 grid), 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 bg-white border border-[#B08D57]/15 hover:border-[#B08D57]/40 shadow-xs hover:shadow-lg hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="mx-auto mb-3 sm:mb-5 relative w-20 h-20 sm:w-24 sm:h-24">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto overflow-hidden relative bg-gray-100 border-2 sm:border-3 border-[#B08D57]/30 group-hover:border-[#B08D57] transition-colors">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill

                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="font-bold text-sm sm:text-base mb-1 leading-snug text-[#34495D]">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold text-[#B08D57]">
                {member.position}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/team" className="btn-gold text-xs sm:text-sm px-6 py-3">
            <span>التعرف على الفريق كاملاً</span>
            <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
