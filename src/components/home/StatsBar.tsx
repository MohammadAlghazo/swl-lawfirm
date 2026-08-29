"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 12, suffix: "+", label: "سنة خبرة" },
  { number: 4, suffix: "+", label: "شركاء متخصصون" },
  { number: 2, suffix: "+", label: "فرع في المملكة" },
  { number: 0, suffix: "", label: "منظومة قانونية متكاملة", isText: true },
];

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const step = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: "#1B2B4B" }}>
      <div className="container-custom py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center py-10 px-6 text-center ${
                i < stats.length - 1 ? "border-l border-gold/20" : ""
              }`}
              style={{ borderColor: "rgba(176, 141, 87, 0.2)" }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2 tabular-nums"
                style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
              >
                {stat.isText ? (
                  <span className="text-3xl md:text-4xl">متكاملة</span>
                ) : (
                  <CountUp target={stat.number} suffix={stat.suffix} />
                )}
              </div>
              <div
                className="text-sm md:text-base font-medium"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Cairo, sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
