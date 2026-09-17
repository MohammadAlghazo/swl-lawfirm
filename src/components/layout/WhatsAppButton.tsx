"use client";

import { usePathname } from "next/navigation";

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Hide the floating WhatsApp button inside admin dashboard pages
  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  const phoneNumber = "966544406986";
  const defaultMessage = encodeURIComponent(
    "السلام عليكم ورحمة الله وبركاته، أود الاستفسار عن الخدمات والاستشارات القانونية لدى شركة سمو الحكمة للمحاماة."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="التواصل السريع عبر واتساب"
      className="fixed bottom-6 left-6 z-50 flex items-center group select-none pointer-events-auto"
      dir="ltr"
    >
      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing Ripple Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-sm">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
        </span>

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 md:w-8 md:h-8"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.392-12.416C6.674 2 2.32 6.354 2.32 11.71c0 2.096.666 4.041 1.805 5.632L2.73 22l4.809-1.365c1.517.828 3.254 1.296 5.093 1.296 5.356 0 9.71-4.354 9.71-9.71 0-5.357-4.354-9.711-9.71-9.711z" />
        </svg>
      </a>

      {/* Expandable / Hover Badge Label (shows on hover or visible cleanly) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        dir="rtl"
        className="ml-3 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-sm text-navy px-3.5 py-2 rounded-full shadow-lg border border-gray-100 text-xs font-bold font-cairo hover:bg-white hover:text-[#25D366] transition-all duration-300 opacity-90 group-hover:opacity-100"
      >
        <span>تواصل عبر واتساب</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
      </a>
    </aside>
  );
}
