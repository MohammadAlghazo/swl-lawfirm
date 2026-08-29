export const revalidate = 3600; // Cache for 1 hour

import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import TeamSection from "@/components/home/TeamSection";
import BlogSection from "@/components/home/BlogSection";
import ClientsSection from "@/components/home/ClientsSection";

export const metadata: Metadata = {
  title: "شركة سمو الحكمة للمحاماة والاستشارات القانونية | رؤية قانونية أعمق",
  description:
    "شركة سمو الحكمة للمحاماة والاستشارات القانونية - رؤية قانونية أعمق. نقدم خدمات قانونية متكاملة للأفراد والشركات في المملكة العربية السعودية من فرعَي جدة والمدينة المنورة.",
  openGraph: {
    title: "شركة سمو الحكمة للمحاماة والاستشارات القانونية",
    description: "رؤية قانونية أعمق - خدمات قانونية متكاملة في المملكة العربية السعودية",
    url: "https://www.swl-lawfirm.com.sa",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <BlogSection />
      <ClientsSection />
    </>
  );
}
