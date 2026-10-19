import { withPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع فريق سمو الحكمة للمحاماة والاستشارات القانونية في جدة والمدينة المنورة.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "تواصل معنا | سمو الحكمة", description: "شاركنا احتياجك القانوني وتواصل مع فريقنا.", url: "/contact" },
};
const offices = [
  { name: "جدة — المقر الرئيسي", address: "شارع عبدالله السليمان، جدة", phone: "+966544406986", displayPhone: "+966 54 440 6986", query: "شركة سمو الحكمة للمحاماة شارع عبدالله السليمان جدة" },
  { name: "المدينة المنورة", address: "طريق كورنيش وادي العقيق، المدينة المنورة", phone: "+966570230900", displayPhone: "+966 57 023 0900", query: "شركة سمو الحكمة للمحاماة كورنيش وادي العقيق المدينة المنورة" },
];

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container-custom max-w-3xl text-center"><span className="section-label !text-gold-light">تواصل معنا</span><h1 className="text-3xl md:text-5xl font-bold leading-relaxed mb-4">كل خطوة تبدأ بحوار</h1><p className="text-white/80 leading-loose">شاركنا احتياجك القانوني، ولنناقش معاً الخطوة التالية.</p></div></section>
    <section className="section-padding"><div className="container-custom">
      <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-8 lg:gap-14 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-5">نحن بالقرب منك</h2><p className="text-slate-600 leading-loose mb-6">يمكنك الاتصال بنا مباشرة، أو إرسال رسالة عبر النموذج.</p>
          <div className="space-y-5 mb-8">
            <a href="tel:+966544406986" className="flex items-center gap-4 py-3 hover:text-gold-dark transition-colors"><Phone size={23} className="text-gold-dark shrink-0" aria-hidden="true" /><span dir="ltr" className="text-lg font-semibold">+966 54 440 6986</span></a>
            <a href="mailto:info@swl-lawfirm.com.sa" className="flex items-center gap-4 py-3 hover:text-gold-dark transition-colors"><Mail size={23} className="text-gold-dark shrink-0" aria-hidden="true" /><span dir="ltr" className="break-all">info@swl-lawfirm.com.sa</span></a>
            <div className="flex items-start gap-4 py-3"><Clock size={23} className="text-gold-dark shrink-0 mt-1" aria-hidden="true" /><div><p className="font-semibold">الأحد – الخميس</p><p className="text-slate-600">٨ صباحاً – ٥ مساءً</p></div></div>
          </div>
          <a href="https://wa.me/966544406986" target="_blank" rel="noopener noreferrer" className="btn-navy-outline">تواصل عبر واتساب</a>
          <div className="mt-8 pt-6 border-t border-navy/15"><h3 className="font-bold mb-2">عناية ووضوح في كل ملف</h3><p className="text-slate-600 text-[15px] leading-loose">نستمع لاحتياجك، وندرس تفاصيله، ونوضح لك المسارات القانونية المناسبة.</p></div>
        </div>
        <ContactForm />
      </div>
    </div></section>
    <section className="section-padding bg-white" id="office-map"><div className="container-custom">
      <span className="section-label">مكاتبنا</span><h2 className="section-title mb-8">يسعدنا استقبالكم</h2>
      <div className="grid md:grid-cols-2 gap-6">{offices.map((office) => <article key={office.name} className="border-t-2 border-gold pt-6" data-reveal>
        <MapPin size={25} className="text-gold-dark mb-4" aria-hidden="true" /><h3 className="text-xl font-bold mb-3">{office.name}</h3><p className="text-slate-600 mb-4 leading-loose">{office.address}</p><a href={`tel:${office.phone}`} dir="ltr" className="inline-flex min-h-11 items-center font-semibold hover:text-gold-dark">{office.displayPhone}</a><br /><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.query)}`} target="_blank" rel="noopener noreferrer" className="service-request">ابحث عن المكتب على خرائط Google</a>
      </article>)}</div>
    </div></section>
  </>;
}

export function generateMetadata() { return withPageMetadata(metadata, "/contact"); }
