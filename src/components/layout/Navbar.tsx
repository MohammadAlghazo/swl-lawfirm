"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowLeft, ChevronDown, Menu, Phone, X } from "lucide-react";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/team", label: "فريق العمل" },
  { href: "/blog", label: "المركز الإعلامي" },
  { href: "/contact", label: "تواصل معنا" },
];
const sectors = [
  { href: "/services", label: "جميع الخدمات" },
  { href: "/services/corporate", label: "الشركات والجهات غير الربحية" },
  { href: "/services/individual", label: "الأفراد والأعمال الخاصة" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  useEffect(() => () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const dismiss = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const toggle = toggleRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const background = Array.from(document.querySelectorAll<HTMLElement>("#main-content, footer, .whatsapp-float"));
    background.forEach((element) => { element.inert = true; });
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
      if (event.key === "Tab") {
        const controls = [toggleRef.current, ...Array.from(panelRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])].filter((element): element is HTMLButtonElement | HTMLAnchorElement => !!element);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => { if (desktop.matches) setMobileOpen(false); };
    desktop.addEventListener("change", handleResize);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      background.forEach((element) => { element.inert = false; });
      document.removeEventListener("keydown", handleKey);
      desktop.removeEventListener("change", handleResize);
      toggle?.focus({ preventScroll: true });
    };
  }, [mobileOpen]);

  const navLink = (href: string, label: string, mobile = false) => (
    <Link key={href} href={href} onClick={() => { setServicesOpen(false); if (mobile) setMobileOpen(false); }} aria-current={pathname === href ? "page" : undefined} className={mobile ? "mobile-nav-link" : "desktop-nav-link"}>
      {label}{mobile && <ArrowLeft size={17} aria-hidden="true" />}
    </Link>
  );

  return (
    <header className="site-header">
      <div className="container-custom header-inner">
        <Link href="/" className="brand-mark" aria-label="سمو الحكمة — الصفحة الرئيسية">
          <Image src="/images/logo.png" alt="شركة سمو الحكمة للمحاماة والاستشارات القانونية" width={800} height={1024} priority sizes="160px" />
        </Link>
        <nav aria-label="التنقل الرئيسي" className="hidden lg:flex items-center gap-1">
          {links.slice(0, 2).map(({ href, label }) => navLink(href, label))}
          <div ref={dropdownRef} className="relative services-disclosure" onMouseEnter={() => { cancelClose(); setServicesOpen(true); }} onMouseLeave={() => { cancelClose(); hoverTimer.current = setTimeout(() => { if (!dropdownRef.current?.contains(document.activeElement)) setServicesOpen(false); }, 180); }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false); }} onKeyDown={(event) => { if (event.key === "Escape") { cancelClose(); setServicesOpen(false); dropdownRef.current?.querySelector("button")?.focus(); } }}>
            <button type="button" className="desktop-nav-link flex items-center gap-1" aria-expanded={servicesOpen} aria-controls="desktop-services" onClick={() => setServicesOpen(!servicesOpen)}>
              خدماتنا <ChevronDown size={14} aria-hidden="true" className={servicesOpen ? "rotate-180" : ""} />
            </button>
            {servicesOpen && <div id="desktop-services" className="services-dropdown">{sectors.map(({ href, label }) => navLink(href, label))}</div>}
          </div>
          {links.slice(2).map(({ href, label }) => navLink(href, label))}
        </nav>
        <Link href="/contact" className="btn-gold header-consultation hidden lg:inline-flex">اطلب استشارة <ArrowLeft size={16} aria-hidden="true" /></Link>
        <button ref={toggleRef} type="button" className="nav-toggle lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-navigation" aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}>
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {mobileOpen && <div ref={panelRef} id="mobile-navigation" className="mobile-navigation lg:hidden">
        <nav aria-label="التنقل على الهاتف" className="container-custom">
          {links.slice(0, 2).map(({ href, label }) => navLink(href, label, true))}
          <div className="mobile-services">
            <p className="text-gold-light text-sm font-semibold mb-2">خدماتنا القانونية</p>
            {sectors.map(({ href, label }) => navLink(href, label, true))}
          </div>
          {links.slice(2).map(({ href, label }) => navLink(href, label, true))}
          <a href="tel:+966544406986" className="btn-gold w-full justify-center mt-6"><Phone size={17} aria-hidden="true" /><span dir="ltr">+966 54 440 6986</span></a>
        </nav>
      </div>}
    </header>
  );
}
