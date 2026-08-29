import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة | سمو الحكمة",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        <div className="relative mb-8">
          <p className="text-[160px] font-bold text-[#1B2B4B]/5 leading-none select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#1B2B4B] rounded-2xl flex items-center justify-center shadow-xl">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-[#1B2B4B] mb-3">الصفحة غير موجودة</h1>
        <div className="w-12 h-0.5 bg-[#B08D57] mx-auto mb-6" />
        <p className="text-gray-500 leading-relaxed mb-8 max-w-md mx-auto">
          يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها. تأكد من صحة الرابط أو عد إلى الصفحة الرئيسية.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-gold">
            الصفحة الرئيسية
          </Link>
          <Link href="/contact" className="btn-navy-outline">
            تواصل معنا
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 mb-4">أو تصفح أقسام الموقع:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: "/about", label: "عن الشركة" },
              { href: "/services", label: "خدماتنا" },
              { href: "/blog", label: "المركز الإعلامي" },
              { href: "/team", label: "فريق العمل" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#1B2B4B] font-medium hover:text-[#B08D57] transition-colors px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#B08D57]/30"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
