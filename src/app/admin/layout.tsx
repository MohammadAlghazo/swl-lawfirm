"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, MessageSquare, FileText, Settings, LogOut } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "الرئيسية", href: "/admin", icon: LayoutDashboard },
  { name: "الرسائل", href: "/admin/messages", icon: MessageSquare },
  { name: "المقالات", href: "/admin/articles", icon: FileText },
  { name: "الإعدادات", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 font-cairo" dir="rtl">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-navy text-white flex flex-col lg:fixed lg:inset-y-0 lg:right-0 z-40">
        <div className="p-6 border-b border-navy-light flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-gold bg-gold/10">
            <span className="text-gold font-bold">S</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">سمو الحكمة</h1>
            <p className="text-xs text-gray-400">لوحة التحكم</p>
          </div>
        </div>

        <nav className="flex lg:block flex-wrap lg:flex-1 gap-2 py-4 px-4 lg:space-y-2 lg:overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? "bg-gold text-white font-bold shadow-md" 
                    : "text-gray-300 hover:bg-navy-light hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-navy-light">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors disabled:opacity-50"
          >
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 lg:mr-64 p-4 sm:p-8 min-h-screen">
        {children}
      </div>
    </div>
  );
}
