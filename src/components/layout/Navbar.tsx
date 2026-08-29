"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/services", label: "خدماتنا" },
  { href: "/team", label: "فريق العمل" },
  { href: "/blog", label: "المركز الإعلامي" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const isTransparent = !isScrolled && isHomePage;

  return (
    <>
      {/* ══════════ MAIN NAV ══════════ */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: isTransparent ? "rgba(10,18,35,0.35)" : "#1B2B4B",
          backdropFilter: isTransparent ? "blur(4px)" : "none",
        }}
      >
        <div className="container-custom">
          <div
            className="flex items-center justify-between"
            style={{ height: "80px" }}
          >
            {/* ── LOGO ── */}
            <Link
              href="/"
              className="flex-shrink-0 transition-opacity duration-300 hover:opacity-85 block"
              style={{
                width: "180px",
                height: "70px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
            >
              <Image
                src="/images/logo.png"
                alt="شركة سمو الحكمة للمحاماة والاستشارات القانونية"
                width={800}
                height={800}
                priority
                className="object-contain block transition-transform duration-300"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: isTransparent ? "scale(1.8)" : "scale(1.6)",
                  filter: "brightness(0) invert(1) drop-shadow(0px 2px 4px rgba(0,0,0,0.3))"
                }}
              />
            </Link>

            {/* ── DESKTOP LINKS ── */}
            <div className="hidden lg:flex items-center gap-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2.5 text-sm font-medium rounded transition-all duration-300"
                    style={{
                      color: isActive ? "#C9A96E" : "rgba(255,255,255,0.88)",
                      fontFamily: "Cairo, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color = "#C9A96E";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color =
                          "rgba(255,255,255,0.88)";
                    }}
                  >
                    {link.label}
                    {/* Active underline */}
                    <span
                      className="absolute bottom-1 right-4 left-4 h-0.5 rounded-full transition-transform duration-300 origin-center"
                      style={{
                        backgroundColor: "#C9A96E",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                  </Link>
                );
              })}
            </div>

            {/* ── CTA + PHONE ── */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+966544406986"
                dir="ltr"
                className="flex items-center gap-1.5 text-xs transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Cairo, sans-serif" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#C9A96E")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.55)")
                }
              >
                <Phone size={13} />
                +966 54 440 6986
              </a>
              <Link href="/contact" className="btn-gold text-sm px-6 py-2.5">
                اطلب استشارة
              </Link>
            </div>

            {/* ── MOBILE TOGGLE ── */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md"
              style={{ color: "#ffffff" }}
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Gold bottom line when solid */}
        {!isTransparent && (
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(176,141,87,0.45), transparent)",
            }}
          />
        )}
      </nav>

      {/* ══════════ MOBILE OVERLAY ══════════ */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
      />

      {/* ══════════ MOBILE PANEL ══════════ */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full lg:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#1B2B4B" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-4 border-b"
            style={{ borderColor: "rgba(176,141,87,0.2)" }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <X size={22} />
            </button>
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                width: "200px",
                height: "60px",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                src="/images/logo.png"
                alt="سمو الحكمة"
                width={600}
                height={600}
                className="object-contain block"
                style={{ 
                  width: "100%", 
                  height: "100%",
                  transform: "scale(2.2)",
                  filter: "brightness(0) invert(1)"
                }}
              />
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3.5 rounded-md text-base font-medium transition-all duration-300"
                      style={{
                        color: isActive ? "#C9A96E" : "rgba(255,255,255,0.8)",
                        backgroundColor: isActive
                          ? "rgba(176,141,87,0.1)"
                          : "transparent",
                        fontFamily: "Cairo, sans-serif",
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: "#C9A96E" }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom CTA */}
          <div
            className="p-5 border-t space-y-3"
            style={{ borderColor: "rgba(176,141,87,0.2)" }}
          >
            <Link
              href="/contact"
              className="btn-gold w-full text-center justify-center block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              اطلب استشارة قانونية
            </Link>
            <a
              href="tel:+966544406986"
              dir="ltr"
              className="flex items-center justify-center gap-2 text-sm"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "Cairo, sans-serif",
              }}
            >
              <Phone size={14} />
              +966 54 440 6986
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
