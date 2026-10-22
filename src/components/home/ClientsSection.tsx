"use client";

import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    {
      name: "الكوادر الماسية",
      enName: "Alkawader Almaseih",
      logo: "/images/clients/alkawader.png",
    },
    {
      name: "خبراء الأمانة (خبير)",
      enName: "Khabeer",
      logo: "/images/clients/khabeer.png",
    },
    {
      name: "ناشونال كاستينق للمقاولات",
      enName: "National Casting",
      logo: "/images/clients/national-casting.png",
    },
    {
      name: "كوينز كب",
      enName: "Coins Cup",
      logo: "/images/clients/coinscup.png",
    },
  ];

  const memberships = [
    { name: "الهيئة العامة للعقار", image: "/images/memberships/rega.png" },
    { name: "الهيئة السعودية للمحامين", image: "/images/memberships/sba.png" },
    { name: "وزارة العدل", image: "/images/memberships/moj.png" },
    { name: "الموارد البشرية", image: "/images/memberships/hrsd.png" },
    { name: "منشآت", image: "/images/memberships/monshaat.png" },
    { name: "منشآت مزايا", image: "/images/memberships/monshaat-mazaya.png" },
    { name: "الموثق", image: "/images/memberships/almwathiq.png" },
    { name: "منصة خبرة", image: "/images/memberships/khibrah.png" },
    { name: "الجمعية العلمية القضائية", image: "/images/memberships/qadaa.png" },
  ];

  return (
    <>
      {/* ── Clients Section ── */}
      <section className="section-padding bg-[#F9F7F4]">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <div className="h-px w-8 sm:w-12 bg-[#B08D57]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B08D57]">
                عملاؤنا
              </span>
              <div className="h-px w-8 sm:w-12 bg-[#B08D57]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34495D]">
              من عملائنا
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group flex flex-col items-center justify-center p-4 sm:p-7 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-lg hover:border-[#B08D57]/40 transition-all duration-300"
              >
                <div className="relative w-full h-14 sm:h-20 flex items-center justify-center mb-2.5 sm:mb-4 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-bold text-[#34495D] text-center leading-snug ">
                  {client.name}
                </span>
                <span className="text-xs text-gray-400 font-medium text-center mt-0.5 line-clamp-1">
                  {client.enName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Memberships & Accreditations Section ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <div className="h-px w-8 sm:w-12 bg-[#B08D57]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B08D57]">
                اعتماداتنا
              </span>
              <div className="h-px w-8 sm:w-12 bg-[#B08D57]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#34495D]">
              العضويات والاعتمادات
            </h2>
          </div>

          {/* Responsive 3-columns on mobile (3x3 grid), 5 columns on desktop - Always Full Natural Colors */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-4 max-w-4xl mx-auto items-center">
            {memberships.map((m) => (
              <div
                key={m.name}
                className="group relative flex flex-col items-center justify-center p-2.5 sm:p-4 rounded-2xl bg-[#F9F7F4] hover:bg-white border border-[#34495D]/10 hover:border-[#B08D57]/40 shadow-xs hover:shadow-md transition-all duration-300 aspect-square"
                title={m.name}
              >
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 33vw, 160px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
