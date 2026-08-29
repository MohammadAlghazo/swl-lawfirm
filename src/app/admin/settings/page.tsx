import ChangePasswordForm from "@/components/admin/ChangePasswordForm";
import CreateAdminForm from "@/components/admin/CreateAdminForm";

export const metadata = {
  title: "الإعدادات | لوحة التحكم",
};

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-navy mb-2">إعدادات الحساب</h1>
        <p className="text-gray-600">إدارة الأمان وحسابات المشرفين في لوحة التحكم.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <ChangePasswordForm />
        <CreateAdminForm />
      </div>
    </div>
  );
}
