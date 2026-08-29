export const revalidate = 3600;

import { Metadata } from "next";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "عن الشركة | سمو الحكمة للمحاماة",
  description:
    "تعرف على شركة سمو الحكمة للمحاماة والاستشارات القانونية – رؤيتنا، رسالتنا، قيمنا، وفلسفتنا القانونية في تقديم خدمات احترافية للأفراد والشركات في المملكة العربية السعودية.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F7F4]">

      {/* ===== HERO ===== */}
      <section className="relative bg-[#1B2B4B] text-white pt-44 pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B08D57] to-transparent opacity-40" />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-block text-[#B08D57] text-sm font-semibold tracking-widest uppercase mb-6 border border-[#B08D57]/30 px-4 py-2 rounded-full">
            تعرف علينا
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 flex flex-col gap-4">
            <span>شركة سمو الحكمة للمحاماة</span>
            <span className="text-[#B08D57]">والاستشارات القانونية</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] bg-[#f0ece4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-scales.jpg"
                  alt="محامٍ وميزان العدالة - سمو الحكمة للمحاماة"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#B08D57]/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#B08D57]/10 rounded-xl -z-10" />
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
                <p className="font-semibold text-[#1B2B4B]">
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
                    <div className="w-10 h-10 bg-[#1B2B4B] rounded-xl flex items-center justify-center text-[#B08D57] mx-auto mb-2">
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-[#1B2B4B]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== الرؤية والرسالة والقيم ===== */}
      <section className="section-padding bg-[#1B2B4B]">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#B08D57]/40 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B08D57]/20 transition-colors">
                <Target className="w-7 h-7 text-[#B08D57]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">رؤيتنا</h3>
              <div className="w-8 h-0.5 bg-[#B08D57] mb-5" />
              <p className="text-gray-300 leading-relaxed text-sm">
                أن تكون سمو الحكمة شريكاً قانونياً موثوقاً للأفراد والمنشآت، وأن تقدم نموذجاً مهنياً يواكب تطور البيئة العدلية وقطاع الأعمال في المملكة العربية السعودية.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[#B08D57]/40 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B08D57]/20 transition-colors">
                <Diamond className="w-7 h-7 text-[#B08D57]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">رسالتنا</h3>
              <div className="w-8 h-0.5 bg-[#B08D57] mb-5" />
              <p className="text-gray-300 leading-relaxed text-sm">
                تقديم خدمات قانونية متكاملة تجمع بين سلامة الرأي، ودقة الصياغة، وكفاءة التمثيل، والاستباق في إدارة المخاطر؛ بما يسهم في حماية حقوق عملائنا ودعم قراراتهم وتحقيق مصالحهم المشروعة.
              </p>
            </div>

            <div className="bg-[#B08D57]/10 border border-[#B08D57]/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B08D57] to-[#C9A96E]" />
              <div className="w-14 h-14 bg-[#B08D57]/20 border border-[#B08D57]/40 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[#B08D57]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">قيمنا</h3>
              <div className="w-8 h-0.5 bg-[#B08D57] mb-5" />
              <ul className="space-y-2.5 text-sm">
                {[
                  { title: "النزاهة", desc: "نضع الأمانة المهنية في أساس كل علاقة وقرار." },
                  { title: "السرية", desc: "نحافظ على خصوصية المعلومات والملفات بأقصى درجات العناية." },
                  { title: "الدقة", desc: "نولي التفاصيل القانونية والآثار المترتبة اهتماماً بالغاً." },
                  { title: "الوضوح", desc: "نقدم الرأي القانوني بلغة واضحة تساعد على اتخاذ القرار." },
                  { title: "الالتزام", desc: "نتعامل مع كل ملف بمسؤولية ومتابعة مهنية." },
                  { title: "الاستباق", desc: "نعمل على اكتشاف المخاطر قبل أن تتحول إلى نزاعات." },
                ].map((v, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#B08D57] font-bold shrink-0 mt-0.5">•</span>
                    <span className="text-gray-300">
                      <span className="text-[#B08D57] font-bold">{v.title}: </span>
                      {v.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== الفلسفة القانونية ===== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <p className="text-gray-600 leading-relaxed mb-10">
                القيمة الحقيقية للخدمة القانونية لا تقتصر على معالجة المشكلة بعد وقوعها؛ بل تبدأ من منع المخاطر، وتنظيم العلاقات، وتحصين القرارات، وصياغة الالتزامات بوضوح منذ البداية.
              </p>
              <p className="text-[#1B2B4B] font-bold text-lg mb-8">
                لذلك تقوم منهجيتنا على أربعة محاور:
              </p>
              <div className="space-y-5">
                {[
                  { icon: <Search className="w-5 h-5" />, title: "الوقاية", desc: "رصد المخاطر والثغرات القانونية قبل تحولها إلى مطالبات أو نزاعات." },
                  { icon: <Shield className="w-5 h-5" />, title: "الحماية", desc: "بناء عقود وإجراءات ومواقف قانونية تحافظ على الحقوق والمصالح." },
                  { icon: <Scale className="w-5 h-5" />, title: "المعالجة", desc: "دراسة النزاع وتحديد خيارات التعامل معه وفق معطياته القانونية والعملية." },
                  { icon: <TrendingUp className="w-5 h-5" />, title: "الاستدامة", desc: "تقديم حلول تراعي الأثر المستقبلي للقرار ولا تقتصر على معالجة الموقف الآني." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-11 h-11 bg-[#1B2B4B] rounded-xl flex items-center justify-center text-[#B08D57] shrink-0 group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B2B4B] mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-meeting.jpg"
                  alt="اجتماع فريق قانوني - سمو الحكمة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4B]/30 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-4 bg-[#B08D57] text-white p-5 rounded-xl shadow-xl max-w-[240px]">
                <p className="text-sm font-bold leading-relaxed">
                  "قرار قانوني حكيم اليوم.. قد يمنع نزاعاً معقداً غداً"
                </p>
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#B08D57]/30 rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== منهجية العمل ===== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-handshake.jpg"
                  alt="مصافحة الثقة والالتزام - سمو الحكمة للمحاماة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B4B]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 bg-[#1B2B4B]/90 text-white px-5 py-3 rounded-xl border border-[#B08D57]/20 z-10">
                  <p className="text-xs text-[#B08D57] mb-0.5">شعارنا</p>
                  <p className="text-sm font-bold">لكل ملف مسار واضح</p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-[#B08D57] text-sm font-bold tracking-widest uppercase mb-4">
                كيف نعمل
              </span>
              <h2 className="section-title mb-3">منهجية العمل</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
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
                  <div key={i} className="flex gap-5 relative group pb-6">
                    {i < arr.length - 1 && (
                      <div className="absolute right-5 top-11 w-0.5 h-full bg-gray-100 z-0" />
                    )}
                    <div className="w-10 h-10 bg-[#1B2B4B] text-[#B08D57] rounded-xl flex items-center justify-center font-bold text-xs shrink-0 relative z-10 group-hover:bg-[#B08D57] group-hover:text-white transition-all duration-300">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B2B4B] mb-1 text-base">{step.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 bg-[#1B2B4B] rounded-2xl p-10 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
                backgroundSize: "24px 24px",
              }}
            />
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

    </main>
  );
}
