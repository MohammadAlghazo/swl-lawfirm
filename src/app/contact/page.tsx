import ContactForm from "@/components/contact/ContactForm";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | شركة سمو الحكمة للمحاماة",
  description:
    "نحن هنا لتقديم أفضل الاستشارات والحلول القانونية. تواصل مع فريقنا المتميز في شركة سمو الحكمة لتحديد موعد استشارتك.",
};

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416C6.674 2 2.32 6.354 2.32 11.71c0 2.096.666 4.041 1.805 5.632L2.73 22l4.809-1.365c1.517.828 3.254 1.296 5.093 1.296 5.356 0 9.71-4.354 9.71-9.71 0-5.357-4.354-9.711-9.71-9.711z" />
  </svg>
);

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-24 bg-gray-50 font-cairo">
      {/* Header Section */}
      <section className="bg-navy text-white pt-44 pb-20 relative overflow-hidden">
        {/* Solid / Soft Background */}
        <div className="absolute inset-0 bg-[#1B2B4B]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#111c33] opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">دعنا نحمي مصالحك القانونية</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            الخطوة الأولى نحو الحل تبدأ باستشارة صحيحة. فريقنا من الخبراء والمستشارين جاهز للرد على استفساراتك وتقديم التوجيه القانوني الأمثل لحالتك.
          </p>
        </div>
      </section>

      {/* Main Content: Sidebar + Form */}
      <section className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy mb-6">لماذا تتواصل معنا؟</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-gold-dark" />
                  </div>
                  <p className="text-gray-700">
                    <strong>سرية تامة:</strong> نضمن لك أعلى درجات الخصوصية والسرية لمعلوماتك وقضاياك.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-gold-dark" />
                  </div>
                  <p className="text-gray-700">
                    <strong>استجابة سريعة:</strong> فريقنا متواجد للرد على استفساراتك العاجلة في أسرع وقت.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-gold-dark" />
                  </div>
                  <p className="text-gray-700">
                    <strong>خبرة واسعة:</strong> مستشارونا يمتلكون خبرة عميقة في مختلف مجالات القانون السعودي.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-navy text-white rounded-2xl shadow-lg p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold rounded-bl-full opacity-10 group-hover:scale-110 transition-transform duration-500"></div>

              <h2 className="text-2xl font-bold mb-8 relative z-10">معلومات الاتصال المباشر</h2>

              <div className="space-y-6 relative z-10">
                {/* Phone & WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <PhoneCall className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">اتصل بنا أو راسلنا</p>
                    <div className="flex items-center flex-wrap gap-2.5">
                      <a
                        href="tel:+966544406986"
                        className="font-bold text-lg hover:text-gold-light transition-colors"
                        dir="ltr"
                      >
                        +966 54 440 6986
                      </a>
                      <a
                        href="https://wa.me/966544406986"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-all text-xs font-bold shadow-sm"
                        title="تواصل فوري عبر واتساب"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>واتساب</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">البريد الإلكتروني</p>
                    <a
                      href="mailto:info@swl-lawfirm.com.sa"
                      className="font-bold hover:text-gold-light transition-colors"
                    >
                      info@swl-lawfirm.com.sa
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">ساعات العمل</p>
                    <p className="font-bold">الأحد - الخميس: 8 صباحاً - 5 مساءً</p>
                  </div>
                </div>

                {/* Main Headquarters */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">المقر الرئيسي</p>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">جدة</span>
                      <a
                        href="#office-map"
                        className="text-xs bg-gold/20 text-gold-light hover:bg-gold hover:text-navy px-2.5 py-1 rounded-md border border-gold/30 transition-all font-medium inline-flex items-center gap-1"
                      >
                        <span>عرض الخريطة</span>
                        <span>↓</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Dedicated Map & Branches Section */}
        <div id="office-map" className="mt-20 pt-10 border-t border-gray-200">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark text-xs font-bold mb-3 border border-gold/30">
              مواقع فروعنا
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
              تفضل بزيارة مكاتبنا
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              يسعدنا استقبالكم في مقرنا الرئيسي بجدة أو فرع المدينة المنورة لتقديم أرقى الاستشارات القانونية ومتابعة شؤونكم بكل عناية
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Branch Cards Panel */}
              <div className="lg:col-span-5 p-6 md:p-8 bg-gradient-to-b from-[#1B2B4B] to-[#111c33] text-white flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Branch 1: Jeddah (Main Headquarters) */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gold/20 text-gold flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <h3 className="font-bold text-lg text-white">فرع جدة (المقر الرئيسي)</h3>
                      </div>
                      <span className="text-[11px] bg-gold/20 text-gold px-2.5 py-0.5 rounded-full font-bold">
                        الرئيسي
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                      <span>شارع عبدالله السليمان، جدة، المملكة العربية السعودية</span>
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href="https://maps.app.goo.gl/RU1pgYgDiK5bA7Hy7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold text-navy text-xs font-bold hover:bg-gold-light transition-all shadow-md"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>الاتجاهات عبر Google Maps ↗</span>
                      </a>
                      <a
                        href="https://wa.me/966544406986"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-all shadow-md"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>واتساب</span>
                      </a>
                      <a
                        href="tel:+966544406986"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-all"
                        dir="ltr"
                      >
                        +966 54 440 6986
                      </a>
                    </div>
                  </div>

                  {/* Branch 2: Madinah */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gold/20 text-gold flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <h3 className="font-bold text-lg text-white">فرع المدينة المنورة</h3>
                      </div>
                      <span className="text-[11px] bg-white/10 text-gray-300 px-2.5 py-0.5 rounded-full font-medium">
                        فرع
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                      <span>طريق كورنيش وادي العقيق، المدينة المنورة، المملكة العربية السعودية</span>
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href="https://maps.app.goo.gl/RU1pgYgDiK5bA7Hy7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gold/90 text-navy text-xs font-bold hover:bg-gold transition-all shadow-md"
                      >
                        <MapPin className="w-3.5 h-3.5" />
                        <span>الموقع على الخريطة ↗</span>
                      </a>
                      <a
                        href="tel:+966570230900"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-all"
                        dir="ltr"
                      >
                        +966 57 023 0900
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer of panel */}
                <div className="mt-6 pt-5 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
                  <span>أوقات العمل: 8 ص - 5 م (الأحد - الخميس)</span>
                  <span className="text-gold font-semibold">ترخيص رقم: 47685</span>
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[400px] relative bg-slate-100">
                <iframe
                  src="https://maps.google.com/maps?q=24.4630094,39.5779704&hl=ar&z=15&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع شركة سمو الحكمة للمحاماة على الخريطة"
                />
                {/* Floating pill button to open Google Maps */}
                <div className="absolute bottom-4 left-4 z-10 pointer-events-auto">
                  <a
                    href="https://maps.app.goo.gl/RU1pgYgDiK5bA7Hy7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 backdrop-blur-md shadow-lg px-4 py-2.5 rounded-full text-navy hover:text-gold-dark text-xs font-bold flex items-center gap-2 border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span>فتح في تطبيق خرائط Google ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
