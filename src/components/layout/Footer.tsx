import Link from "next/link";
import { LockKeyhole, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "عن الشركة" },
  { href: "/services", label: "خدماتنا" },
  { href: "/team", label: "فريق العمل" },
  { href: "/blog", label: "المركز الإعلامي" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Footer() {
  return <footer className="site-footer">
    <div className="container-custom">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="!text-gold-light text-lg font-bold">سمو الحكمة للمحاماة</Link>
          <p className="text-xs mt-2">رقم الترخيص: <span className="text-white">47685</span></p>
          <div className="flex flex-wrap gap-x-5 text-xs" aria-label="حسابات التواصل الاجتماعي">
            <a href="https://www.instagram.com/swl_ksa/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.tiktok.com/@swl_ksa0" target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href="https://x.com/swl_ksa" target="_blank" rel="noopener noreferrer" aria-label="حساب سمو الحكمة على إكس">X</a>
          </div>
        </div>
        <nav aria-label="روابط أسفل الصفحة"><h3>تعرّف علينا</h3><ul className="footer-links">{quickLinks.map(({ href, label }) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></nav>
        <div className="footer-contact">
          <h3>تواصل معنا</h3>
          <a href="tel:+966544406986" className="gap-2"><Phone size={15} className="text-gold-light shrink-0" aria-hidden="true" /><span dir="ltr">+966 54 440 6986</span></a>
          <a href="mailto:info@swl-lawfirm.com.sa" className="footer-email gap-2" aria-label="راسلنا عبر البريد الإلكتروني" title="info@swl-lawfirm.com.sa"><Mail size={15} className="text-gold-light shrink-0" aria-hidden="true" /><span dir="ltr">info@swl-lawfirm.com.sa</span></a>
        </div>
        <div className="footer-branches">
          <h3 className="flex items-center gap-2"><MapPin size={16} className="text-gold-light" aria-hidden="true" />مكاتبنا</h3>
          <div className="footer-addresses">
            <div><p className="text-white font-semibold">جدة — المقر الرئيسي</p><p>شارع عبدالله السليمان</p></div>
            <div><p className="text-white font-semibold">المدينة المنورة</p><p>كورنيش وادي العقيق</p><a href="tel:+966570230900" dir="ltr">+966 57 023 0900</a></div>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><p>© {new Date().getFullYear()} سمو الحكمة للمحاماة. جميع الحقوق محفوظة.</p><Link href="/admin/login" className="footer-admin-link" aria-label="لوحة التحكم" title="لوحة التحكم"><LockKeyhole size={14} strokeWidth={1.5} aria-hidden="true" /></Link></div>
    </div>
  </footer>;
}
