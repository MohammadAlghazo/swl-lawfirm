import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import type { ServiceItem } from "@/data/servicesData";

export function ServiceHero({ title, description, image, imageAlt, sector, portrait = false }: { title: string; description: string; image: string; imageAlt: string; sector?: string; portrait?: boolean }) {
  return <section className="page-hero">
    <div className="container-custom">
      <nav aria-label="مسار الصفحة" className="breadcrumbs">
        <Link href="/">الرئيسية</Link><ChevronLeft size={14} aria-hidden="true" />
        {sector ? <><Link href="/services">خدماتنا</Link><ChevronLeft size={14} aria-hidden="true" /><span aria-current="page">{sector}</span></> : <span aria-current="page">خدماتنا</span>}
      </nav>
      <div className="service-hero-layout">
        <div data-entrance>
          <span className="section-label !text-gold-light">{sector ? "خدماتنا القانونية" : "للأفراد وقطاع الأعمال"}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href="#service-details" className="btn-white-outline mt-7">استعرض الخدمات <ArrowLeft size={17} aria-hidden="true" /></a>
        </div>
        <div className={`service-hero-image${portrait ? " service-hero-image--portrait" : ""}`} data-entrance><Image src={image} alt={imageAlt} fill priority sizes={portrait ? "330px" : "(max-width: 767px) 100vw, 50vw"} quality={90} /></div>
      </div>
    </div>
  </section>;
}

export function SectorNavigation({ current }: { current: "all" | "corporate" | "individual" }) {
  return <nav aria-label="قطاعات الخدمات" className="sector-navigation">
    {[
      { id: "all", href: "/services", title: "جميع الخدمات" },
      { id: "corporate", href: "/services/corporate", title: "الشركات والجهات غير الربحية" },
      { id: "individual", href: "/services/individual", title: "الأفراد والأعمال الخاصة" },
    ].map((item) => <Link key={item.id} href={item.href} aria-current={item.id === current ? "page" : undefined}>{item.title}</Link>)}
  </nav>;
}

export function ServiceList({ items, headingLevel = "h2" }: { items: ServiceItem[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return <div className="service-list">{items.map((service) => {
    const Icon = service.icon;
    return <article key={service.title} data-reveal>
      <Icon className="service-icon" aria-hidden="true" />
      <div><Heading>{service.title}</Heading><p>{service.desc}</p><Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="service-request">طلب الخدمة <ArrowLeft size={16} aria-hidden="true" /></Link></div>
    </article>;
  })}</div>;
}

export function ConsultationBanner() {
  return <div className="consultation-banner" data-reveal>
    <div><h2>لنبدأ بفهم احتياجك</h2><p>شاركنا موضوعك، وسيتواصل معك فريقنا لمناقشة الخطوة التالية.</p></div>
    <Link href="/contact" className="btn-gold">تواصل مع فريقنا <ArrowLeft size={18} aria-hidden="true" /></Link>
  </div>;
}

export default function ServiceSectorPage({ sector, title, description, image, imageAlt, items }: { sector: "corporate" | "individual"; title: string; description: string; image: string; imageAlt: string; items: ServiceItem[] }) {
  return <>
    <ServiceHero title={title} description={description} image={image} imageAlt={imageAlt} sector={sector === "corporate" ? "قطاع الشركات" : "قطاع الأفراد"} />
    <div className="container-custom"><SectorNavigation current={sector} /></div>
    <section id="service-details" className="section-padding">
      <div className="container-custom">
        <div className="mb-4"><span className="section-label">{new Intl.NumberFormat("ar-SA").format(items.length)} خدمة قانونية</span><h2 className="section-title">كيف نساندك؟</h2></div>
        <ServiceList items={items} headingLevel="h3" />
      </div>
    </section>
    <section className="pb-16 md:pb-24"><div className="container-custom"><ConsultationBanner /></div></section>
  </>;
}
