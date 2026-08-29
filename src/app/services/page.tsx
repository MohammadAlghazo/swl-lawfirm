import Link from "next/link";
import { Scale, Building2, Users, FileText, CheckCircle2, Shield, Gavel, Briefcase, FileSignature, Handshake, ScrollText, Landmark, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "خدماتنا",
  description: "نقدم منظومة متكاملة من الخدمات القانونية للشركات والأفراد تلبي كافة الاحتياجات بأعلى معايير الجودة.",
};

// Data for Integrated Legal System
const integratedServices = [
  "الاستشارات والمساندة القانونية",
  "التقاضي والتمثيل القضائي",
  "العقود والاتفاقيات والصياغة القانونية",
  "التحكيم والوساطة وتسوية النزاعات",
  "التنفيذ والتحصيل والمطالبات",
  "الشركات والاستثمار والحوكمة",
  "نظام العمل والعلاقات العمالية",
  "العقارات والتوثيق والتسجيل العيني",
  "الأحوال الشخصية والتركات",
  "الملكية الفكرية والامتياز التجاري",
  "الإفلاس وإعادة الهيكلة والتصفية",
  "الامتثال والتراخيص والإجراءات التنظيمية"
];

// Data for Corporate Services
const corporateServices = [
  "تأسيس الشركات والاستثمار",
  "الحوكمة والامتثال",
  "الإدارات القانونية",
  "الصفقات والعلاقات التجارية",
  "التراخيص والإجراءات التنظيمية",
  "التمثيل القضائي",
  "الاستشارات والمساندة القانونية",
  "التسوية والوساطة",
  "نظام العمل والتحقيقات العمالية",
  "صياغة ومراجعة العقود والاتفاقيات",
  "إنشاء الإدارات القانونية ودعمها والإشراف عليها",
  "تأسيس الشركات والاستثمار الأجنبي",
  "خدمات الامتياز التجاري",
  "خدمات التنفيذ",
  "التوثيق والتسجيل العيني",
  "صياغة السياسات الداخلية للمنشأة"
];

// Data for Individual Services
const individualServices = [
  {
    title: "التمثيل القضائي والتنفيذ",
    desc: "التمثيل أمام كافة المحاكم واللجان ومتابعة إجراءات التنفيذ.",
    icon: Gavel
  },
  {
    title: "الأحوال الشخصية والتركات",
    desc: "إدارة قضايا الأحوال الشخصية وقسمة التركات وحصر التركات.",
    icon: Users
  },
  {
    title: "صياغة العقود المدنية",
    desc: "إعداد وصياغة ومراجعة العقود المدنية بحماية حقوق موكلينا.",
    icon: FileSignature
  },
  {
    title: "المطالبات المدنية والعمالية",
    desc: "الترافع ومتابعة الدعاوى والمطالبات أمام الجهات القضائية.",
    icon: Scale
  },
  {
    title: "المطالبات والدعاوى الإدارية",
    desc: "الترافع ومتابعة الدعاوى والمطالبات أمام الجهات القضائية.",
    icon: Landmark
  },
  {
    title: "الدعوى الجنائية",
    desc: "التمثيل في القضايا الجنائية بكافة مراحلها أمام الجهات القضائية.",
    icon: Shield
  },
  {
    title: "التوثيق والتسجيل العيني",
    desc: "بصفتنا مكتباً مرخصاً، نقدم خدمات أعمال التوثيق، وخدمات التسجيل العيني للعقار.",
    icon: ScrollText
  },
  {
    title: "المصالحة والوساطة بالنزاعات",
    desc: "تقديم حلول ودية وفعالة لتسوية النزاعات بما يحفظ الحقوق ويختصر الوقت.",
    icon: Handshake
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <span className="text-sm font-semibold uppercase tracking-widest text-gold">خدماتنا</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 leading-tight">
            منظومة قانونية متكاملة
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            نقدم طيفاً شاملاً من الخدمات القانونية المصممة بعناية فائقة لتلبية احتياجات عملائنا من الشركات والأفراد بأعلى معايير الجودة المهنية والسرية التامة.
          </p>
        </div>

        {/* Section 1: Integrated Legal System (Tags Style) */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {integratedServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/30 transition-all duration-300 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center gap-2 md:gap-3 group"
              >
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-navy text-gold flex items-center justify-center text-xs md:text-sm font-bold group-hover:scale-110 transition-transform flex-shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="text-navy font-bold text-sm md:text-base leading-tight">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Corporate Services */}
        <div className="mb-20 md:mb-32">
          <div className="bg-white rounded-3xl p-6 md:p-16 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 text-center mb-10 md:mb-16">
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-4 md:mb-6 opacity-80" />
              <h2 className="text-2xl md:text-4xl font-bold text-navy mb-3 md:mb-4">خدمات الشركات والجهات غير الربحية</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                نقدم مجموعة متكاملة من الخدمات القانونية المصممة لتلبية احتياجات عملائنا بأعلى معايير الجودة المهنية والسرية والالتزام.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 relative z-10">
              {corporateServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-navy font-bold text-sm md:text-base leading-relaxed">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Individual Services */}
        <div className="mb-20">
          <div className="text-center mb-10 md:mb-16">
            <Users className="w-12 h-12 md:w-16 md:h-16 text-gold mx-auto mb-4 md:mb-6 opacity-80" />
            <h2 className="text-2xl md:text-4xl font-bold text-navy mb-3 md:mb-4">خدمات الأفراد</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              نقدم حلولاً قانونية متكاملة تلبي احتياجات الأفراد وتحمي حقوقهم.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {individualServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-navy-light rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-gold" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-navy mb-2 md:mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/pattern.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">هل تبحث عن استشارة قانونية متخصصة؟</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              فريقنا من المستشارين والمحامين على أتم الاستعداد لتقديم الدعم القانوني الذي تحتاجه لحماية حقوقك ومصالحك.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-gold hover:bg-gold-light text-white font-bold py-4 px-8 rounded-lg transition-colors inline-flex items-center justify-center gap-2">
                <span>اطلب استشارة الآن</span>
                <HeartHandshake className="w-5 h-5" />
              </Link>
              <a href="tel:+966544406986" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition-colors border border-white/20 inline-flex items-center justify-center gap-2" dir="ltr">
                <span>+966 54 440 6986</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
