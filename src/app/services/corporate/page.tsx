import { withPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import ServiceSectorPage from "@/components/services/ServiceSectorPage";
import { corporateServices } from "@/data/servicesData";

const metadata: Metadata = {
  title: "خدمات الشركات والجهات غير الربحية",
  description: "حلول قانونية لقطاع الأعمال: تأسيس الشركات، الحوكمة والامتثال، العقود، والتمثيل القضائي والتجاري.",
  alternates: { canonical: "/services/corporate" },
  openGraph: { title: "خدمات الشركات | سمو الحكمة", description: "مساندة قانونية للشركات والجهات غير الربحية في المملكة العربية السعودية.", url: "/services/corporate", images: ["/images/about-meeting.jpg"] },
};

export default function CorporateServicesPage() {
  return <ServiceSectorPage sector="corporate" title="رؤية تحمي أعمالك" description="مساندة قانونية للشركات والجهات غير الربحية، من التأسيس وصياغة العقود إلى الحوكمة وإدارة النزاعات." image="/images/about-meeting.jpg" imageAlt="اجتماع لمناقشة أعمال الشركات والعقود" items={corporateServices} />;
}

export function generateMetadata() { return withPageMetadata(metadata, "/services/corporate"); }
