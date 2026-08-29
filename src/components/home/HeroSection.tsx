"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Scale, Shield, BookOpen } from "lucide-react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [badgeRef.current, titleRef.current, subtitleRef.current, ctaRef.current];
    elements.forEach((el, i) => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        setTimeout(() => {
          if (el) {
            el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        }, 150 + i * 200);
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="مكتب محاماة - ميزان العدالة والكتب القانونية"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* ── Multi-layer Overlay for readability ── */}
      {/* Layer 1: deep navy overlay - lightened so image shows clearer */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(10,18,35,0.78) 0%, rgba(27,43,75,0.68) 50%, rgba(10,18,35,0.78) 100%)",
        }}
      />
      {/* Layer 2: subtle texture dots for depth */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(rgba(176,141,87,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Layer 3: bottom fade to ensure stats bar blends */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(10,18,35,0.5))",
        }}
      />

      {/* ── Gold corner decorations ── */}
      <div className="absolute top-0 right-0 w-28 h-28 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-0.5" style={{ backgroundColor: "#B08D57" }} />
        <div className="absolute top-0 right-0 w-0.5 h-full" style={{ backgroundColor: "#B08D57" }} />
      </div>
      <div className="absolute bottom-0 left-0 w-28 h-28 opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-0.5" style={{ backgroundColor: "#B08D57" }} />
        <div className="absolute bottom-0 left-0 w-0.5 h-full" style={{ backgroundColor: "#B08D57" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container-custom text-center pt-32 pb-24">

        {/* Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
          style={{
            backgroundColor: "rgba(176, 141, 87, 0.12)",
            borderColor: "rgba(176, 141, 87, 0.35)",
            backdropFilter: "blur(4px)",
          }}
        >
          <Scale size={14} style={{ color: "#B08D57" }} />
          <span
            className="text-xs font-medium"
            style={{ color: "#C9A96E", fontFamily: "Cairo, sans-serif" }}
          >
            شركة سمو الحكمة للمحاماة والاستشارات القانونية
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="font-bold mb-6 leading-tight"
          style={{
            color: "#ffffff",
            fontFamily: "Cairo, sans-serif",
            fontSize: "clamp(42px, 7vw, 80px)",
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          رؤية قانونية{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #C9A96E, #B08D57, #D4AA6B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            أعمق
          </span>
        </h1>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 opacity-50" style={{ backgroundColor: "#B08D57" }} />
          <div className="w-2 h-2 rotate-45" style={{ backgroundColor: "#B08D57" }} />
          <div className="h-px w-16 opacity-50" style={{ backgroundColor: "#B08D57" }} />
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="max-w-2xl mx-auto mb-10"
          style={{
            color: "rgba(255,255,255,0.82)",
            fontFamily: "Cairo, sans-serif",
            fontSize: "clamp(15px, 2vw, 19px)",
            lineHeight: "1.9",
            textShadow: "0 1px 8px rgba(0,0,0,0.4)",
          }}
        >
          نقدم خدمات قانونية متكاملة وحلولاً دقيقة لحماية أعمالك وقراراتك — بأسلوب مهني يقوم على الدقة والوضوح وحماية المصالح
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold text-base px-8 py-4">
            <span>اطلب استشارة قانونية</span>
            <ArrowLeft size={18} />
          </Link>
          <Link href="/services" className="btn-white-outline text-base px-8 py-4">
            <span>تعرف على خدماتنا</span>
          </Link>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-16">
          {[
            { icon: <Scale size={15} />, text: "معالجة أدق" },
            { icon: <BookOpen size={15} />, text: "رؤية أوضح" },
            { icon: <Shield size={15} />, text: "فهم أعمق" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(4px)",
              }}
            >
              <span style={{ color: "#B08D57" }}>{icon}</span>
              <span
                className="text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Cairo, sans-serif" }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div
          className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "rgba(176,141,87,0.6)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ backgroundColor: "#B08D57" }} />
        </div>
      </div>
    </section>
  );
}
