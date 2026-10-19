import type { Metadata } from "next";

export function withPageMetadata(metadata: Metadata, path: string): Metadata {
  const title = typeof metadata.title === "string" ? metadata.title : "سمو الحكمة للمحاماة";
  const description = metadata.description || "خدمات قانونية للأفراد وقطاع الأعمال من سمو الحكمة للمحاماة والاستشارات القانونية.";
  return {
    ...metadata,
    alternates: { ...metadata.alternates, canonical: path },
    openGraph: { type: "website", locale: "ar_SA", siteName: "سمو الحكمة للمحاماة", title, description, images: [{ url: "/images/hero-bg.jpg", alt: "سمو الحكمة للمحاماة والاستشارات القانونية" }], ...metadata.openGraph, url: path },
  };
}
