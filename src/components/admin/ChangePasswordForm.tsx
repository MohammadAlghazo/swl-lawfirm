"use client";

import { useState } from "react";
import { Loader2, KeyRound } from "lucide-react";

export default function ChangePasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    if (formData.newPassword !== formData.confirmPassword) {
      setError("كلمة المرور الجديدة وتأكيدها لا يتطابقان");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/settings/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("تم تغيير كلمة المرور بنجاح");
        setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
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
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
          <KeyRound className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-navy">تغيير كلمة المرور</h2>
          <p className="text-sm text-gray-500">تحديث كلمة المرور لحسابك الحالي</p>
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
          <label className="block text-sm font-bold text-navy mb-2">كلمة المرور الحالية</label>
          <input
            type="password"
            value={formData.currentPassword}
            onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-left"
            dir="ltr"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-2">كلمة المرور الجديدة</label>
          <input
            type="password"
            value={formData.newPassword}
            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-left"
            dir="ltr"
            required
            minLength={6}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-navy mb-2">تأكيد كلمة المرور الجديدة</label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
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
            className="w-full bg-navy hover:bg-navy-light text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
            <span>حفظ التغييرات</span>
          </button>
        </div>
      </form>
    </div>
  );
}
