import { withPageMetadata } from "@/lib/metadata";
export const revalidate = 3600;

import Image from "next/image";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "فريق العمل",
  description: "تعرف على نخبة المحامين والمستشارين القانونيين في شركة سمو الحكمة للمحاماة والاستشارات القانونية.",
};

const teamMembers = [
  {
    id: 1,
    name: "عبدالعزيز مرزوق السهلي",
    role: "رئيس مجلس الإدارة",
    description: "يمتلك خبرة واسعة في الإدارة وتطوير الأعمال، حيث تولّى عدداً من المناصب القيادية في شركات سعودية متعددة.\n\nيتمتع بخبرة في بناء وتطوير الأعمال، وإدارة العمليات، ودعم النمو المؤسسي، ويسهم في توجيه الشركة وتعزيز استراتيجيتها وتوسعها.",
    imagePath: "/images/team/abdulaziz-alsahli-v3.png",
  },
  {
    id: 2,
    name: "ريان عيسى السهلي",
    role: "شريك مؤسس",
    description: "محامٍ ومستشار قانوني بخبرة تمتد لأكثر من ١٢ عاماً في المجال القانوني، حاصل على درجة الماجستير في القانون، ومرخص كمستشار عمالي من وزارة العمل وحاصل على شهادة الحوكمة وإدارة المخاطر والامتثال (GRCP).\n\nتولى عدداً من المناصب القانونية والتنفيذية، حيث اكتسب خبرة متقدمة في تقديم الاستشارات القانونية، وإدارة الشؤون القانونية، وصياغة ومراجعة العقود، والحوكمة والامتثال، وإدارة المخاطر القانونية.",
    imagePath: "/images/team/rayan-v2.png",
  },
  {
    id: 3,
    name: "عبدالعزيز عبدالمحسن الحجيلي",
    role: "شريك مؤسس",
    description: "محامٍ مرخص يمتلك خبرة قانونية تتجاوز ٧ سنوات في المجال القانوني، وحاصل على درجة البكالوريوس في الشريعة الإسلامية ودرجة الماجستير في القانون، ومستشار استشارات عمالية معتمد من وزارة الموارد البشرية والتنمية الاجتماعية.\n\nيتمتع بخبرة في تقديم الاستشارات القانونية والترافع وصياغة اللوائح والمذكرات والعقود، ويسهم في تعزيز الحلول القانونية المهنية التي تقدمها الشركة لعملائها، وصياغة ومراجعة العقود والحوكمة والامتثال، وإدارة المخاطر القانونية.",
    imagePath: "/images/team/abdulaziz-alhujaili-v2.png",
  },
  {
    id: 4,
    name: "تركي الحجاجي",
    role: "شريك مهني",
    description: "محام ومستشار قانوني وموثق معتمد حاصل على درجة الماجستير في القانون بمرتبة الشرف، بخبرة مهنية تتجاوز ٧ سنوات في المجال القانوني وحاصل على رخصة ممارسة التسجيل العقاري.\n\nوتشمل خبراته القانونية تأسيس الشركات وتوثيق عقودها، وصياغة ومراجعة الاتفاقيات، وتوثيق أعمال الرهن والتصرفات العقارية والإفراغات، بالإضافة إلى تقديم خدمات الوساطة العقارية.",
    imagePath: "/images/team/turki-v2.png",
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pb-20 bg-gray-50 font-cairo">
      {/* Header Section */}
      <section className="bg-navy text-white pt-24 sm:pt-28 md:pt-36 pb-6 sm:pb-8 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#34495D]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2B3D4E] opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2.5 md:mb-5">فريق العمل</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            نخبة من المحامين والمستشارين القانونيين الذين يجمعون بين الخبرة العميقة والمهنية العالية لحماية مصالحك وتحقيق أهدافك.
          </p>
        </div>
      </section>

      {/* Team Members List */}
      <section className="container mx-auto px-4 mt-4 sm:mt-8 md:mt-14 relative z-20">

        <div className="max-w-5xl mx-auto space-y-16">
          {teamMembers.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={member.id}
                data-reveal
                className={`flex flex-col md:flex-row items-center gap-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Image Side */}
                <div className="w-full md:w-2/5 h-80 md:h-[460px] relative bg-gray-100 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-50 z-0"></div>
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill

                    className="object-cover object-top z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Decorative element matching the zigzag design */}
                  <div className={`absolute bottom-0 w-full h-1 bg-gold z-20`}></div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2 leading-relaxed">{member.name}</h2>
                  <p className="text-lg font-bold text-gold mb-6">{member.role}</p>

                  <div className="space-y-4">
                    {member.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-loose text-[15px]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
}

export function generateMetadata() { return withPageMetadata(metadata, "/team"); }
