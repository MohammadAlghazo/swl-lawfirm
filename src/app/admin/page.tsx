import { MessageSquare, FileText } from "lucide-react";
import Link from "next/link";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const messagesCount = await prisma.contactMessage.count();
  const articlesCount = await prisma.article.count();

  const statCards = [
    {
      title: "الرسائل الواردة",
      value: messagesCount,
      icon: MessageSquare,
      color: "bg-blue-50 text-blue-600",
      link: "/admin/messages",
    },
    {
      title: "المقالات المنشورة",
      value: articlesCount,
      icon: FileText,
      color: "bg-gold/10 text-gold-dark",
      link: "/admin/articles",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-navy mb-2">مرحباً بك في لوحة التحكم 👋</h1>
        <p className="text-gray-600">نظرة عامة على أداء موقع شركة سمو الحكمة</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-navy mb-1">{stat.value}</h3>
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
              </div>
              {stat.link !== "#" && (
                <Link href={stat.link} className="mt-4 text-sm text-gold hover:text-gold-dark transition-colors font-bold flex items-center gap-1">
                  <span>عرض التفاصيل</span>
                  <span>&larr;</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Recent Activity placeholder */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-navy mb-6">النشاطات الأخيرة</h2>
        <div className="text-center py-12 text-gray-400">
          <p>لا توجد نشاطات لعرضها حالياً</p>
        </div>
      </div>
    </div>
  );
}
