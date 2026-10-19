"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="home-hero" data-no-reveal>
      <Image src="/images/hero-bg.jpg" alt="ميزان العدالة والكتب القانونية" fill priority sizes="100vw" quality={85} className="object-cover object-center" />
      <div className="container-custom">
        <div className="hero-copy" data-entrance>
          <p className="!text-gold-light !text-sm font-semibold mb-4">سمو الحكمة للمحاماة والاستشارات القانونية</p>
          <h1>رؤية قانونية <span className="text-gold-light">أعمق</span></h1>
          <p>خدمات قانونية للأفراد وقطاع الأعمال، برؤية واضحة وعناية بالتفاصيل التي تصنع فرقاً في قرارك.</p>
          <div className="flex flex-col min-[420px]:flex-row gap-3 mt-8">
            <Link href="/contact" className="btn-gold">اطلب استشارة قانونية <ArrowLeft size={18} aria-hidden="true" /></Link>
            <Link href="/services" className="btn-white-outline">تعرّف على خدماتنا</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
