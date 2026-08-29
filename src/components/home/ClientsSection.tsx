"use client";

export default function ClientsSection() {
  const clients = [
    { name: "Alkawader Almaseih", abbr: "A.M" },
    { name: "Khabeer", abbr: "KH" },
    { name: "National Casting", abbr: "NC" },
    { name: "Coins Cup", abbr: "CC" },
  ];

  const memberships = [
    { name: "REGA", fullName: "الهيئة العامة للعقار" },
    { name: "SBA", fullName: "الهيئة السعودية للمحامين" },
    { name: "وزارة العدل", fullName: "Ministry of Justice" },
    { name: "HRSD", fullName: "الموارد البشرية والتنمية الاجتماعية" },
    { name: "منشآت", fullName: "مركز الامتياز التجاري" },
    { name: "منشآت", fullName: "مزايا" },
    { name: "الموثق", fullName: "Almwathiq" },
    { name: "خبرة", fullName: "Khibrah Platform" },
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {memberships.map((m) => (
              <div
                key={m.name + m.fullName}
                className="flex flex-col items-center justify-center p-5 rounded-lg text-center transition-all duration-300"
                style={{
                  backgroundColor: "#F9F7F4",
                  border: "1px solid rgba(27, 43, 75, 0.08)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(176, 141, 87, 0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(176, 141, 87, 0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#F9F7F4";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(27, 43, 75, 0.08)";
                }}
              >
                <div
                  className="text-base font-bold mb-1"
                  style={{ color: "#1B2B4B", fontFamily: "Cairo, sans-serif" }}
                >
                  {m.name}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "#9CA3AF", fontFamily: "Cairo, sans-serif" }}
                >
                  {m.fullName}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
