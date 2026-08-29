import ContactForm from "@/components/contact/ContactForm";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | شركة سمو الحكمة للمحاماة",
  description: "نحن هنا لتقديم أفضل الاستشارات والحلول القانونية. تواصل مع فريقنا المتميز في شركة سمو الحكمة لتحديد موعد استشارتك.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-20 bg-gray-50 font-cairo">
      {/* Header Section */}
      <section className="bg-navy text-white pt-44 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%,#ffffff_100%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%,#ffffff_100%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">دعنا نحمي مصالحك القانونية</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            الخطوة الأولى نحو الحل تبدأ باستشارة صحيحة. فريقنا من الخبراء والمستشارين جاهز للرد على استفساراتك وتقديم التوجيه القانوني الأمثل لحالتك.
          </p>
        </div>
      </section>

      {/* Main Content */}
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
                  <p className="text-gray-700"><strong>سرية تامة:</strong> نضمن لك أعلى درجات الخصوصية والسرية لمعلوماتك وقضاياك.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-gold-dark" />
                  </div>
                  <p className="text-gray-700"><strong>استجابة سريعة:</strong> فريقنا متواجد للرد على استفساراتك العاجلة في أسرع وقت.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckIcon className="w-4 h-4 text-gold-dark" />
                  </div>
                  <p className="text-gray-700"><strong>خبرة واسعة:</strong> مستشارونا يمتلكون خبرة عميقة في مختلف مجالات القانون السعودي.</p>
                </li>
              </ul>
            </div>

            <div className="bg-navy text-white rounded-2xl shadow-lg p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold rounded-bl-full opacity-10 group-hover:scale-110 transition-transform duration-500"></div>

              <h2 className="text-2xl font-bold mb-8 relative z-10">معلومات الاتصال المباشر</h2>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <PhoneCall className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">اتصل بنا</p>
                    <p className="font-bold text-lg hover:text-gold-light transition-colors cursor-pointer" dir="ltr">+966 54 440 6986</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">البريد الإلكتروني</p>
                    <a href="mailto:info@swl-lawfirm.com.sa" className="font-bold hover:text-gold-light transition-colors">
                      info@swl-lawfirm.com.sa
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">ساعات العمل</p>
                    <p className="font-bold">الأحد - الخميس: 8 صباحاً - 5 مساءً</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-light rounded-xl flex items-center justify-center flex-shrink-0 border border-navy-light/50">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">المقر الرئيسي</p>
                    <p className="font-bold leading-relaxed">المملكة العربية السعودية،<br/>(سيتم إضافة العنوان التفصيلي)</p>
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
  )
}
