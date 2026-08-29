"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full text-center">
        <div className="w-20 h-20 bg-[#1B2B4B] rounded-2xl flex items-center justify-center mx-auto mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#1B2B4B] mb-3">حدث خطأ غير متوقع</h1>
        <div className="w-12 h-0.5 bg-[#B08D57] mx-auto mb-6" />
        <p className="text-gray-500 leading-relaxed mb-8">
          نأسف، حدث خطأ أثناء تحميل الصفحة. يمكنك المحاولة مجدداً أو العودة إلى الصفحة الرئيسية.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-gold"
          >
            حاول مجدداً
          </button>
          <Link href="/" className="btn-navy-outline">
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
