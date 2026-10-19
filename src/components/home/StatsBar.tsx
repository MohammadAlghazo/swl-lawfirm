"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

const stats = [
  { value: 12, suffix: "+", label: "سنة خبرة" },
  { value: 4, label: "شركاء متخصصون" },
  { value: 2, label: "فرع في المملكة" },
  { value: "متكاملة", label: "منظومة قانونية" },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const inView = useInView(sectionRef, { once: true, amount: 0.4 });

  useEffect(() => {
    const update = (progress: number) => {
      stats.forEach(({ value }, index) => {
        if (typeof value === "number" && valueRefs.current[index]) {
          valueRefs.current[index]!.textContent = String(Math.floor(progress * value));
        }
      });
    };
    update(0);
    if (!inView) return;
    const control = animate(0, 1, { duration: 1.8, ease: "easeOut", onUpdate: update, onComplete: () => update(1) });
    return () => control.stop();
  }, [inView]);

  return <section ref={sectionRef} className="stats-bar" aria-label="سمو الحكمة بالأرقام" data-no-reveal>
    <div className="container-custom"><dl className="stats-grid">
      {stats.map(({ value, suffix, label }, index) => <div key={label} className="stat-item">
        <dt>{label}</dt>
        <dd dir={typeof value === "number" ? "ltr" : "rtl"} className={typeof value === "string" ? "stat-word" : undefined}>
          {typeof value === "number" ? <><span className="sr-only">{value}{suffix}</span><span aria-hidden="true"><span ref={(element) => { valueRefs.current[index] = element; }}>{value}</span>{suffix}</span></> : value}
        </dd>
      </div>)}
    </dl></div>
  </section>;
}
