import { withPageMetadata } from "@/lib/metadata";
export const revalidate = 3600;

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Eye,
  Scale,
  Target,
  Diamond,
  Search,
  TrendingUp,
  ArrowLeft,
} from "lucide-react";

const metadata: Metadata = {
  title: "عن الشركة",
  description:
    "تعرف على شركة سمو الحكمة للمحاماة والاستشارات القانونية – رؤيتنا، رسالتنا، قيمنا، وفلسفتنا القانونية في تقديم خدمات احترافية للأفراد والشركات في المملكة العربية السعودية.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4]">

      {/* ===== HERO ===== */}
      <section className="relative bg-[#34495D] text-white pt-24 sm:pt-28 md:pt-36 pb-8 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[#34495D]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2B3D4E] opacity-50"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57] to-transparent opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-8 md:w-12 bg-[#B08D57]" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-[#B08D57] uppercase">
              تعرف علينا
            </span>
            <div className="h-px w-8 md:w-12 bg-[#B08D57]" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 flex flex-col gap-2 md:gap-3">
            <span>شركة سمو الحكمة للمحاماة</span>
            <span className="text-[#B08D57]">والاستشارات القانونية</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            منظومة مهنية متكاملة من الخدمات القانونية للأفراد وقطاع الأعمال، انطلاقاً من فهم دقيق للأنظمة وإدراك لطبيعة المصالح والتحديات المرتبطة بكل ملف.
          </p>
        </div>
      </section>

      {/* ===== من نحن ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image - شخص مع ميزان ذهبي */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[35/51] max-w-[380px] mx-auto" data-reveal>

                <Image
 fill
 sizes="(max-width: 1023px) 100vw, 50vw"

                  src="/images/legal-desk.webp"
                  alt="ميزان العدالة ومطرقة القضاء على مكتب قانوني"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-2 border-[#B08D57]/30 rounded-2xl -z-10" />
              <div className="absolute top-0 left-0 w-20 h-20 bg-[#B08D57]/10 rounded-xl -z-10" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[#B08D57] text-sm font-bold tracking-widest uppercase mb-4">
                من نحن
              </span>
              <h2 className="section-title mb-6">
                منظومة قانونية متكاملة تضع الحكمة في خدمة حقوقك
              </h2>
              <div className="gold-divider gold-divider-right mb-8" />
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
                <p>
                  شركة سمو الحكمة للمحاماة والاستشارات القانونية شركة مهنية تقدم منظومة متكاملة من الخدمات القانونية للأفراد وقطاع الأعمال، انطلاقاً من فهم دقيق للأنظمة، وإدراك لطبيعة المصالح والتحديات المرتبطة بكل ملف.
                </p>
                <p>
                  نعمل على تقديم المشورة القانونية، وإدارة النزاعات، وصياغة العقود، ودعم الأعمال والصفقات، وتمثيل العملاء أمام الجهات القضائية وشبه القضائية ذات الاختصاص، بأسلوب مهني يقوم على الدقة والوضوح والسرية وحماية المصالح.
                </p>
                <p className="font-semibold text-[#34495D]">
                  وفي سمو الحكمة نتعامل مع القانون باعتباره استجابة للنزاع فحسب؛ بل أداة لحماية القرار وإدارة المخاطر وبناء علاقات ومعاملات أكثر استقراراً واستدامة.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { icon: <Scale className="w-5 h-5" />, label: "فهم أعمق" },
                  { icon: <Eye className="w-5 h-5" />, label: "رؤية أوضح" },
                  { icon: <Shield className="w-5 h-5" />, label: "معالجة أدق" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 text-center border border-[#B08D57]/10 shadow-sm hover:shadow-md hover:border-[#B08D57]/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-[#34495D] rounded-xl flex items-center justify-center text-[#B08D57] mx-auto mb-2">
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-[#34495D]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== الرؤية والرسالة والقيم ===== */}
      <section className="section-padding bg-[#34495D]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block text-[#B08D57] text-sm font-bold tracking-widest uppercase mb-4">
              هويتنا المؤسسية
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              رؤيتنا، رسالتنا وقيمنا
            </h2>
            <div className="gold-divider mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 md:gap-8">
            {/* رؤيتنا */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:border-[#B08D57]/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B08D57]/20 transition-colors">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08D57]" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3">رؤيتنا</h3>
                <div className="w-6 sm:w-8 h-0.5 bg-[#B08D57] mb-3 sm:mb-4" />
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  أن تكون سمو الحكمة شريكاً قانونياً موثوقاً للأفراد والمنشآت، وأن تقدم نموذجاً مهنياً يواكب تطور البيئة العدلية وقطاع الأعمال في المملكة.
                </p>
              </div>
            </div>

            {/* رسالتنا */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/10 hover:border-[#B08D57]/40 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#B08D57]/20 transition-colors">
                  <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08D57]" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3">رسالتنا</h3>
                <div className="w-6 sm:w-8 h-0.5 bg-[#B08D57] mb-3 sm:mb-4" />
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  تقديم خدمات قانونية متكاملة تجمع بين سلامة الرأي، ودقة الصياغة، وكفاءة التمثيل، والاستباق في إدارة المخاطر لحماية حقوق عملائنا.
                </p>
              </div>
            </div>

            {/* قيمنا */}
            <div className="sm:col-span-2 lg:col-span-1 bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-2xl p-4 sm:p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#C9A96E]" />
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B08D57]/20 border border-[#B08D57]/40 rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#B08D57]" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white">قيمنا المؤسسية</h3>
                  <div className="w-8 h-0.5 bg-[#B08D57] mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-2.5 text-sm sm:text-base">
                {[
                  { title: "النزاهة", desc: "أمانة مهنية كأساس لكل قرار." },
                  { title: "السرية", desc: "حفظ خصوصية الملفات والمعلومات." },
                  { title: "الدقة", desc: "عناية فائقة بالتفاصيل القانونية." },
                  { title: "الوضوح", desc: "رأي قانوني مباشر يدعم القرار." },
                  { title: "الالتزام", desc: "مسؤولية ومتابعة مستمرة للملفات." },
                  { title: "الاستباق", desc: "اكتشاف المخاطر قبل تحولها لنزاع." },
                ].map((v, i) => (
                  <div key={i} className="flex items-start gap-1.5 py-2">
                    <span className="text-[#B08D57] font-bold shrink-0">•</span>
                    <span className="text-gray-300">
                      <span className="text-[#B08D57] font-bold">{v.title}: </span>
                      <span className="text-gray-300">{v.desc}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== الفلسفة القانونية ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#B08D57] text-sm font-bold tracking-widest uppercase mb-4">
                منهجنا
              </span>
              <h2 className="section-title mb-3">فلسفتنا القانونية</h2>
              <p className="text-[#B08D57] font-semibold text-lg mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 shrink-0" />
                الحماية القانونية تبدأ قبل النزاع
              </p>
              <div className="gold-divider gold-divider-right mb-8" />
              <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base">
                القيمة الحقيقية للخدمة القانونية لا تقتصر على معالجة المشكلة بعد وقوعها؛ بل تبدأ من منع المخاطر، وتنظيم العلاقات، وتحصين القرارات، وصياغة الالتزامات بوضوح منذ البداية.
              </p>
              <p className="text-[#34495D] font-bold text-base sm:text-lg mb-6">
                لذلك تقوم منهجيتنا على أربعة محاور:
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Search className="w-5 h-5" />, title: "الوقاية", desc: "رصد المخاطر والثغرات القانونية قبل تحولها إلى مطالبات أو نزاعات." },
                  { icon: <Shield className="w-5 h-5" />, title: "الحماية", desc: "بناء عقود وإجراءات ومواقف قانونية تحافظ على الحقوق والمصالح." },
                  { icon: <Scale className="w-5 h-5" />, title: "المعالجة", desc: "دراسة النزاع وتحديد خيارات التعامل معه وفق معطياته القانونية والعملية." },
                  { icon: <TrendingUp className="w-5 h-5" />, title: "الاستدامة", desc: "تقديم حلول تراعي الأثر المستقبلي للقرار ولا تقتصر على معالجة الموقف الآني." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-10 h-10 bg-[#34495D] rounded-xl flex items-center justify-center text-[#B08D57] shrink-0 group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#34495D] mb-0.5 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">

                <Image
 fill
 sizes="(max-width: 1023px) 100vw, 50vw"

                  src="/images/about-meeting.jpg"
                  alt="اجتماع فريق قانوني - سمو الحكمة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#34495D]/30 to-transparent" />
              </div>
              <div className="relative mt-4 border-r-2 border-gold pr-4 text-navy">
                <p className="text-sm sm:text-base font-bold leading-relaxed">
                  «قرار قانوني حكيم اليوم.. قد يمنع نزاعاً معقداً غداً»
                </p>
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 border-2 border-[#B08D57]/30 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== منهجية العمل ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content first on mobile (order-1 lg:order-2) to prevent two images touching */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-[#B08D57] text-sm font-bold tracking-widest uppercase mb-4">
                كيف نعمل
              </span>
              <h2 className="section-title mb-3">منهجية العمل</h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm sm:text-base">
                نؤمن بأن جودة الخدمة القانونية تبدأ من وضوح الإجراءات والتواصل مع العميل، لذلك تمر أعمالنا بمنهجية منظمة.
              </p>
              <div className="space-y-1">
                {[
                  { num: "01", title: "الاستماع والفهم", desc: "دراسة احتياج العميل والوقائع والمستندات والأهداف المرتبطة بالملف." },
                  { num: "02", title: "التقييم القانوني", desc: "تحليل الوضع النظامي وتحديد نقاط القوة والمخاطر والالتزامات المحتملة." },
                  { num: "03", title: "تحديد الخيارات", desc: "عرض المسارات القانونية الممكنة وآثار كل خيار بصورة واضحة تساعد على اتخاذ القرار." },
                  { num: "04", title: "التنفيذ والمتابعة", desc: "تنفيذ المسار المعتمد ومتابعة إجراءاته ومستجداته وفق نطاق التكليف." },
                  { num: "05", title: "الإحاطة والمراجعة", desc: "إبقاء العميل على اطلاع على المستجدات والنتائج والخطوات التالية." },
                ].map((step, i, arr) => (
                  <div key={i} className="flex gap-4 sm:gap-5 relative group pb-5 sm:pb-6">
                    {i < arr.length - 1 && (
                      <div className="absolute right-5 top-11 w-0.5 h-full bg-gray-100 z-0" />
                    )}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#34495D] text-[#B08D57] rounded-xl flex items-center justify-center font-bold text-xs shrink-0 relative z-10 group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-300">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#34495D] mb-0.5 text-sm sm:text-base">{step.title}</h4>
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image second on mobile (order-2 lg:order-1) */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">

                <Image
 fill
 sizes="(max-width: 1023px) 100vw, 50vw"

                  src="/images/about-handshake.jpg"
                  alt="مصافحة الثقة والالتزام - سمو الحكمة للمحاماة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#34495D]/40 to-transparent" />
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 bg-[#34495D]/90 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-[#B08D57]/20 z-10">
                  <p className="text-[11px] sm:text-xs text-[#B08D57] mb-0.5">شعارنا</p>
                  <p className="text-sm sm:text-base font-bold">لكل ملف مسار واضح</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#34495D] rounded-2xl p-10 text-center relative overflow-hidden">

            <p className="text-[#B08D57] text-xl font-bold relative z-10 mb-2">
              في سمو الحكمة، لا نقدم رأياً قانونياً فحسب
            </p>
            <p className="text-white text-2xl md:text-3xl font-bold relative z-10">
              بل نسعى إلى أن يكون القانون عنصراً داعماً لقرار أكثر حكمة
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-padding bg-[#F9F7F4]">
        <div className="container-custom text-center">
          <span className="inline-block text-[#B08D57] text-sm font-bold tracking-widest uppercase mb-4">
            هل أنت مستعد؟
          </span>
          <h2 className="section-title mb-4">تواصل معنا اليوم</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            سواء كنت تواجه تحدياً قانونياً أو تحتاج إلى استشارة وقائية، فريقنا جاهز لمساعدتك باحترافية وسرية تامة.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              احجز استشارة
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-navy-outline">
              تصفح خدماتنا
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export function generateMetadata() { return withPageMetadata(metadata, "/about"); }
