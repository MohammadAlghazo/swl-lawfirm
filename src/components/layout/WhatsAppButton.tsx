"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin") || pathname === "/contact") return null;
  return <aside className="whatsapp-float" aria-label="التواصل السريع">
    <a href="https://wa.me/966544406986" target="_blank" rel="noopener noreferrer" aria-label="تواصل معنا عبر واتساب" title="تواصل عبر واتساب"><MessageCircle size={24} aria-hidden="true" /></a>
  </aside>;
}
