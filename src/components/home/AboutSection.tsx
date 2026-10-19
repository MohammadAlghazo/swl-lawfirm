import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, Scale, Shield } from "lucide-react";

const pillars = [
  { icon: Scale, title: "معالجة أدق", desc: "تحفظ الحقوق وتدعم القرار" },
  { icon: Eye, title: "رؤية أوضح", desc: "للخيارات والمخاطر والآثار القانونية" },
  { icon: Shield, title: "فهم أعمق", desc: "للقضية والاحتياج قبل تقديم الرأي" },
];

export default function AboutSection() {
  return <section className="section-padding">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div data-reveal>
          <span className="section-label">عن سمو الحكمة</span>
          <h2 className="section-title mb-5">الحكمة في خدمة حقوقك</h2>
          <p className="text-slate-600 leading-loose mb-6">شركة مهنية تقدم خدمات قانونية للأفراد وقطاع الأعمال، انطلاقاً من فهم دقيق للأنظمة وإدراك لطبيعة المصالح والتحديات المرتبطة بكل ملف.</p>
          <Link href="/about" className="service-request">تعرّف على الشركة <ArrowLeft size={18} aria-hidden="true" /></Link>
        </div>
        <div className="service-hero-image service-hero-image--portrait" data-reveal>
          <Image src="/images/legal-desk.webp" alt="ميزان العدالة — عناية بالتفاصيل القانونية" fill sizes="330px" className="object-contain" />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-navy/15">
        {pillars.map(({ icon: Icon, title, desc }) => <div key={title} className="flex items-start gap-4" data-reveal><Icon className="text-gold-dark shrink-0 mt-1" size={25} aria-hidden="true" /><div><h3 className="font-bold text-lg mb-1">{title}</h3><p className="text-sm text-slate-600 leading-loose">{desc}</p></div></div>)}
      </div>
    </div>
  </section>;
}
