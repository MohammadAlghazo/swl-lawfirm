"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Lock, Mail, ArrowRight, Loader2 } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "حدث خطأ أثناء تسجيل الدخول");
      }

      // Redirect to dashboard on success
      router.push("/admin");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center font-cairo">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-gold bg-gold/10">
            <Shield className="w-8 h-8 text-gold" />
          </div>
        </Link>
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy">
          تسجيل الدخول
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          لوحة التحكم الخاصة بشركة سمو الحكمة
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center border border-red-100">
                {error}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                البريد الإلكتروني
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="block w-full rounded-lg border border-gray-300 py-3 pl-3 pr-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm transition-all outline-none"
                  placeholder="admin@swl-lawfirm.com.sa"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 mb-2"
              >
                كلمة المرور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="block w-full rounded-lg border border-gray-300 py-3 pl-3 pr-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-gold focus:border-gold sm:text-sm transition-all outline-none"
                  placeholder="••••••••"
                  dir="ltr"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center items-center gap-2 rounded-lg bg-navy px-3 py-3 text-sm font-bold text-white shadow-sm hover:bg-navy-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <span>تسجيل الدخول</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm font-medium text-gold hover:text-gold-light transition-colors"
            >
              العودة للموقع الرئيسي
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
