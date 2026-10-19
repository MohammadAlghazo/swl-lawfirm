import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { corePillars } from "@/data/servicesData";
import { ConsultationBanner, SectorNavigation, ServiceHero, ServiceList } from "./ServiceSectorPage";

const sectors = [
  { href: "/services/corporate", title: "الشركات والجهات غير الربحية", image: "/images/about-meeting.jpg", alt: "اجتماع عمل ومراجعة مستندات", description: "من التأسيس إلى إدارة النزاعات؛ مساندة قانونية ترافق أعمالك.", count: "١٢ خدمة لقطاع الأعمال" },
  { href: "/services/individual", title: "الأفراد والأعمال الخاصة", image: "/images/about-handshake.jpg", alt: "لقاء ومصافحة لإتمام اتفاق", description: "العقود والمطالبات وشؤون الأسرة والتركات، بعناية بكل تفصيل.", count: "٨ خدمات للأفراد" },
];

export default function ServicesClient() {
  return <>
    <ServiceHero title="لكل احتياج مسار قانوني" description="خدمات قانونية متكاملة للأفراد وقطاع الأعمال. اختر القطاع المناسب، وتعرّف على مجالات المساندة التي نقدمها." image="/images/legal-desk.webp" imageAlt="ميزان العدالة كاملاً بجوار مطرقة القضاء على مكتب قانوني" portrait />
    <div className="container-custom"><SectorNavigation current="all" /></div>
    <section id="service-details" className="section-padding">
      <div className="container-custom">
        <div className="mb-8"><span className="section-label">خدمات تناسب احتياجك</span><h2 className="section-title">كيف يمكننا مساعدتك؟</h2></div>
        <div className="grid md:grid-cols-2 gap-6">
          {sectors.map((sector) => <Link key={sector.href} href={sector.href} className="sector-card group" data-reveal>
            <div className="sector-card-image"><Image src={sector.image} alt={sector.alt} fill sizes="(max-width: 767px) 100vw, 25vw" /></div>
            <div className="sector-card-copy"><span className="section-label">{sector.count}</span><h3 className="text-xl font-bold leading-relaxed mb-3">{sector.title}</h3><p className="text-[15px] text-slate-600 leading-loose mb-5">{sector.description}</p><span className="inline-flex items-center gap-3 text-sm font-bold text-gold-dark">استعرض الخدمات <ArrowLeft size={18} aria-hidden="true" /></span></div>
          </Link>)}
        </div>
      </div>
    </section>
    <section className="section-padding bg-white">
      <div className="container-custom">
        <span className="section-label">مجالات الممارسة</span><h2 className="section-title mb-4">خبرات قانونية متكاملة</h2>
        <ServiceList items={corePillars} headingLevel="h3" />
      </div>
    </section>
    <section className="section-padding"><div className="container-custom"><ConsultationBanner /></div></section>
  </>;
}
