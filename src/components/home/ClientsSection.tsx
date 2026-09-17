"use client";
import Image from "next/image";

export default function ClientsSection() {
  const clients = [
    { name: "Alkawader Almaseih", abbr: "A.M" },
    { name: "Khabeer", abbr: "KH" },
    { name: "National Casting", abbr: "NC" },
    { name: "Coins Cup", abbr: "CC" },
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
      {/* Clients Section */}
      <section className="section-padding" style={{ backgroundColor: "#F9F7F4" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                عملاؤنا
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
            </div>
            <h2 className="section-title text-4xl" style={{ fontFamily: "Cairo, sans-serif" }}>
              من عملائنا
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center justify-center p-8 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(27, 43, 75, 0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.3)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(27, 43, 75, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(27, 43, 75, 0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-3"
                  style={{ backgroundColor: "rgba(176, 141, 87, 0.1)", color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
                >
                  {client.abbr}
                </div>
                <span
                  className="text-sm font-semibold text-center"
                  style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                اعتماداتنا
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "#B08D57" }} />
            </div>
            <h2 className="section-title text-4xl" style={{ fontFamily: "Cairo, sans-serif" }}>
              العضويات والاعتمادات
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            {memberships.map((m) => (
              <div
                key={m.name}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl text-center transition-all duration-300 w-36 h-36 md:w-44 md:h-40"
                style={{
                  backgroundColor: "#F9F7F4",
                  border: "1px solid rgba(27, 43, 75, 0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#ffffff";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.25)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(27, 43, 75, 0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F7F4";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(27, 43, 75, 0.08)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
                title={m.name}
              >
                <div className="relative w-full h-full mb-2 flex-1 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div
                  className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -bottom-6 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm border border-gray-100"
                  style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
                >
                  {m.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
