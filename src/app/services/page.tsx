import { withPageMetadata } from "@/lib/metadata";
export const revalidate = 3600;

import type { Metadata } from "next";
import ServicesClient from "@/components/services/ServicesClient";

const metadata: Metadata = {
  title: "خدماتنا القانونية",
  description:
    "نقدم منظومة قانونية متكاملة للشركات والأفراد تشمل الاستشارات، التقاضي، الحوكمة، العقود، والتحكيم بأعلى معايير الدقة والمهنية.",
  openGraph: {
    title: "خدماتنا القانونية",
    description: "منظومة قانونية متكاملة لخدمة الشركات والأفراد في المملكة العربية السعودية.",
    url: "https://www.swl-lawfirm.com.sa/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

export function generateMetadata() { return withPageMetadata(metadata, "/services"); }
