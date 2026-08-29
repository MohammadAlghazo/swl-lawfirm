"use client";

import { useState } from "react";
import { Loader2, UserPlus } from "lucide-react";

export default function CreateAdminForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/admin/settings/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("تم إضافة المشرف الجديد بنجاح");
        setFormData({ name: "", email: "", password: "" });
      } else {
        setError(data.error || "حدث خطأ ما");
      }
    } catch (err) {
      setError("تعذر الاتصال بالخادم");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="border-b border-gray-100 p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold-dark">
          <UserPlus className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-navy">إضافة مشرف جديد</h2>
          <p className="text-sm text-gray-500">إنشاء حساب جديد بصلاحيات إدارة كاملة</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 font-medium">
            {error}
          </div>
        )}
        
        {success && (
          <div className="p-4 bg-green-50 text-green-600 rounded-lg text-sm border border-green-100 font-medium">
            {success}
          </div>
        )}

        <div>
          <label className="block text-sm font-bold text-navy mb-2">اسم المشرف (اختياري)</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
            placeholder="مثال: أحمد عبد الله"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-2">البريد الإلكتروني</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-left"
            dir="ltr"
            placeholder="admin@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-2">كلمة المرور</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-left"
            dir="ltr"
            required
            minLength={6}
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold hover:bg-gold-light text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            <span>إضافة المشرف</span>
          </button>
        </div>
      </form>
    </div>
  );
}
