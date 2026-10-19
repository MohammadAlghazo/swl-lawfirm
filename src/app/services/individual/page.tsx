import { withPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import ServiceSectorPage from "@/components/services/ServiceSectorPage";
import { individualServices } from "@/data/servicesData";

const metadata: Metadata = {
  title: "خدمات الأفراد والأعمال الخاصة",
  description: "خدمات الأفراد: التمثيل القضائي، الأحوال الشخصية والتركات، العقود المدنية، المطالبات، والتوثيق العقاري.",
  alternates: { canonical: "/services/individual" },
  openGraph: { title: "خدمات الأفراد | سمو الحكمة", description: "خدمات قانونية للأفراد والأعمال الخاصة، بعناية ووضوح.", url: "/services/individual", images: ["/images/about-handshake.jpg"] },
};

export default function IndividualServicesPage() {
  return <ServiceSectorPage sector="individual" title="حقوقك تستحق العناية" description="دعم قانوني للأفراد والأعمال الخاصة في العقود والمطالبات وقضايا الأسرة والتركات، مع عناية بخصوصية كل ملف." image="/images/about-handshake.jpg" imageAlt="مصافحة في لقاء لمناقشة اتفاق قانوني" items={individualServices} />;
}

export function generateMetadata() { return withPageMetadata(metadata, "/services/individual"); }
