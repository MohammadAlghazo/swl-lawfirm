import prisma from "@/lib/prisma";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import DeleteMessageButton from "@/components/admin/DeleteMessageButton";

export const dynamic = "force-dynamic";

export default async function AdminMessagesPage() {

  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-navy mb-2">رسائل العملاء</h1>
        <p className="text-gray-600">هنا تظهر جميع الرسائل والاستفسارات المرسلة من صفحة "تواصل معنا"</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {messages.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            لا توجد رسائل حتى الآن.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-gray-50 text-gray-600 text-sm font-bold border-b border-gray-100">
                <tr>
                  <th className="py-4 px-6">الاسم</th>
                  <th className="py-4 px-6">رقم الجوال</th>
                  <th className="py-4 px-6">البريد الإلكتروني</th>
                  <th className="py-4 px-6 w-2/5">نص الرسالة</th>
                  <th className="py-4 px-6">التاريخ</th>
                  <th className="py-4 px-6 w-16 text-center">حذف</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-navy whitespace-nowrap">
                      {msg.name}
                    </td>
                    <td className="py-4 px-6 font-medium" dir="ltr">
                      <a href={`tel:${msg.phone}`} className="text-[#1B2B4B] font-bold hover:underline">
                        {msg.phone}
                      </a>
                    </td>
                    <td className="py-4 px-6">
                      {msg.email ? (
                        <a href={`mailto:${msg.email}`} className="text-gray-500 hover:text-[#1B2B4B] transition-colors">
                          {msg.email}
                        </a>
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-sm leading-relaxed max-w-md whitespace-normal break-words">
                      {msg.message}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                      {format(new Date(msg.createdAt), 'dd MMMM yyyy, h:mm a', { locale: ar })}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <DeleteMessageButton id={msg.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
