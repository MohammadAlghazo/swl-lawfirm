"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";
import { useState } from "react";

export default function ArticleImage({ src, alt, sizes }: { src: string | null; alt: string; sizes: string }) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  let safeSource: string | null = null;
  if (src?.startsWith("/") && !src.startsWith("//")) safeSource = src;
  else if (src) {
    try { const url = new URL(src); if (["http:", "https:"].includes(url.protocol) && !url.username && !url.password) safeSource = src; } catch { safeSource = null; }
  }
  if (!safeSource || failedSource === src) return <div role="img" aria-label={alt} className="absolute inset-0 bg-navy flex items-center justify-center"><BookOpen size={40} className="text-gold-light" aria-hidden="true" /></div>;
  return <Image src={safeSource} alt={alt} fill sizes={sizes} unoptimized={!safeSource.startsWith("/")} onError={() => setFailedSource(src)} className="object-cover transition-transform duration-500 group-hover:scale-105" />;
}
