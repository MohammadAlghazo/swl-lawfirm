"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/services", label: "خدماتنا" },
  { href: "/team", label: "فريق العمل" },
  { href: "/blog", label: "المركز الإعلامي" },
  { href: "/contact", label: "تواصل معنا" },
];

const services = [
  "الاستشارات القانونية",
  "التقاضي والتمثيل القضائي",
  "العقود والاتفاقيات",
  "الشركات والحوكمة",
  "نظام العمل والعلاقات العمالية",
  "العقارات والتوثيق",
];

// TikTok icon SVG
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.84a8.27 8.27 0 004.84 1.55V6.94a4.85 4.85 0 01-1.07-.25z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0F1A2E", color: "#ffffff" }}>
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: "#B08D57", backgroundColor: "rgba(176, 141, 87, 0.1)" }}
              >
                <span className="text-lg" style={{ color: "#B08D57" }}>⚖</span>
              </div>
              <div>
                <div className="font-bold text-base" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                  سمو الحكمة
                </div>
                <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                  LAW FIRM
                </div>
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Cairo, sans-serif", lineHeight: "1.8" }}
            >
              شركة مهنية تقدم منظومة متكاملة من الخدمات القانونية للأفراد وقطاع الأعمال، انطلاقاً من فهم دقيق للأنظمة.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                رقم الترخيص:
              </span>
              <span className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.8)" }}>
                47685
              </span>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-5">
              {[
                {
                  href: "https://www.instagram.com/swl_ksa/",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                  label: "Instagram",
                },
                { href: "https://www.tiktok.com/@swl_ksa0", icon: <TikTokIcon />, label: "TikTok" },
                {
                  href: "https://x.com/swl_ksa",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ),
                  label: "X",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ backgroundColor: "rgba(176, 141, 87, 0.1)", color: "#B08D57", border: "1px solid rgba(176, 141, 87, 0.2)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#B08D57";
                    (e.currentTarget as HTMLElement).style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(176, 141, 87, 0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#B08D57";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3
              className="font-bold text-base mb-5 relative pb-3"
              style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
            >
              روابط سريعة
              <span
                className="absolute bottom-0 right-0 w-10 h-0.5"
                style={{ background: "linear-gradient(90deg, #B08D57, transparent)" }}
              />
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm flex items-center gap-2 transition-all duration-300 group"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Cairo, sans-serif" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#B08D57";
                      (e.currentTarget as HTMLElement).style.paddingRight = "8px";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
                      (e.currentTarget as HTMLElement).style.paddingRight = "0";
                    }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#B08D57" }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3
              className="font-bold text-base mb-5 relative pb-3"
              style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
            >
              خدماتنا
              <span
                className="absolute bottom-0 right-0 w-10 h-0.5"
                style={{ background: "linear-gradient(90deg, #B08D57, transparent)" }}
              />
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm flex items-center gap-2 transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Cairo, sans-serif" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B08D57")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#B08D57" }} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3
              className="font-bold text-base mb-5 relative pb-3"
              style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}
            >
              تواصل معنا
              <span
                className="absolute bottom-0 right-0 w-10 h-0.5"
                style={{ background: "linear-gradient(90deg, #B08D57, transparent)" }}
              />
            </h3>
            <ul className="space-y-4">
              {/* Jeddah Branch */}
              <li>
                <p className="text-xs font-bold mb-1.5" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                  فرع جدة
                </p>
                <div className="flex items-start gap-2 mb-1">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#B08D57" }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Cairo, sans-serif" }}>
                    شارع عبدالله السليمان
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0" style={{ color: "#B08D57" }} />
                  <a
                    href="tel:+966544406986"
                    className="text-xs transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    dir="ltr"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B08D57")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    +966 54 440 6986
                  </a>
                </div>
              </li>

              {/* Madinah Branch */}
              <li>
                <p className="text-xs font-bold mb-1.5" style={{ color: "#B08D57", fontFamily: "Cairo, sans-serif" }}>
                  فرع المدينة المنورة
                </p>
                <div className="flex items-start gap-2 mb-1">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#B08D57" }} />
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "Cairo, sans-serif" }}>
                    كورنيش وادي العقيق
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="flex-shrink-0" style={{ color: "#B08D57" }} />
                  <a
                    href="tel:+966570230900"
                    className="text-xs transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    dir="ltr"
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B08D57")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    +966 57 023 0900
                  </a>
                </div>
              </li>

              {/* Email & Website */}
              <li className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="flex-shrink-0" style={{ color: "#B08D57" }} />
                  <a
                    href="mailto:info@swl-lawfirm.com.sa"
                    className="text-xs transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B08D57")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    info@swl-lawfirm.com.sa
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="flex-shrink-0" style={{ color: "#B08D57" }} />
                  <a
                    href="https://www.swl-lawfirm.com.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B08D57")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                  >
                    www.swl-lawfirm.com.sa
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(176, 141, 87, 0.15)", backgroundColor: "rgba(0,0,0,0.2)" }}>
        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p
              className="text-xs text-center md:text-right"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Cairo, sans-serif" }}
            >
              © {currentYear} شركة سمو الحكمة للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
            </p>
            <p
              className="text-xs"
              style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Cairo, sans-serif" }}
            >
              رقم الترخيص: 47685
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
