import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { corePillars } from "@/data/servicesData";

export default function ServicesSection() {
  return <section className="section-padding bg-navy" id="services">
    <div className="container-custom">
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5 mb-8">
        <div><span className="section-label !text-gold-light">خدماتنا</span><h2 className="section-title text-white mb-3">مساندة قانونية لكل خطوة</h2><p className="text-white/75 text-base">من المشورة وصياغة العقود إلى التمثيل القضائي.</p></div>
        <Link href="/services" className="btn-white-outline shrink-0">جميع الخدمات <ArrowLeft size={17} aria-hidden="true" /></Link>
      </div>
      <div className="grid min-[480px]:grid-cols-2 lg:grid-cols-3 gap-x-8">
        {corePillars.slice(0, 6).map(({ icon: Icon, title, num }) => <Link href={`/services#service-details`} key={num} className="group flex items-center gap-4 py-6 border-b border-white/20 text-white transition-colors hover:text-gold-light">
          <Icon size={24} className="text-gold-light shrink-0" aria-hidden="true" /><h3 className="text-base font-semibold leading-relaxed flex-1">{title}</h3><ArrowLeft size={18} className="shrink-0 opacity-60 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
        </Link>)}
      </div>
    </div>
  </section>;
}
