import type { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export const revalidate = 3600;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.swl-lawfirm.com.sa";
  const routes = ["", "/about", "/services", "/services/corporate", "/services/individual", "/team", "/blog", "/contact"];
  const entries: MetadataRoute.Sitemap = routes.map((route) => ({ url: `${baseUrl}${route}`, changeFrequency: route === "/blog" ? "weekly" : "monthly", priority: route === "" ? 1 : .8 }));
  try {
    const articles = await prisma.article.findMany({ where: { published: true }, select: { slug: true, updatedAt: true } });
    return [...entries, ...articles.map((article) => ({ url: `${baseUrl}/blog/${encodeURIComponent(article.slug)}`, lastModified: article.updatedAt, changeFrequency: "weekly" as const, priority: .7 }))];
  } catch {
    console.error("Sitemap article lookup unavailable");
    return entries;
  }
}
