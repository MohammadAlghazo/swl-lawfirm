"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";

type ContactFormData = { name: string; phone: string; email: string; message: string };
const normalizePhone = (value: string) => value.replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit))).replace(/[\s()-]/g, "");

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactFormData>({ defaultValues: { name: "", phone: "", email: "", message: "" } });

  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (service) setValue("message", `أرغب في الاستفسار عن خدمة: ${service.slice(0, 200)}\n`);
  }, [setValue]);
  useEffect(() => { if (status === "success") successRef.current?.focus(); }, [status]);

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data), signal: controller.signal });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "تعذر إرسال الرسالة. يرجى المحاولة مجدداً.");
      reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error && error.name !== "AbortError" ? error.message : "تعذر تأكيد وصول الرسالة. تواصل معنا هاتفياً قبل إعادة الإرسال.");
      setStatus("error");
    } finally { clearTimeout(timeout); }
  };

  const fieldClass = "w-full px-4 py-3 min-h-12 rounded-md border border-slate-300 bg-white text-navy focus:border-gold transition-colors disabled:opacity-60";
  return <div className="bg-white rounded-lg border border-navy/15 p-5 sm:p-8" id="contact-form">
    <h2 className="text-2xl font-bold mb-3">أرسل لنا رسالة</h2>
    <p className="text-slate-600 text-[15px] leading-loose mb-7">عرّفنا باحتياجك، وسيتواصل معك فريقنا. الحقول المشار إليها بنجمة مطلوبة.</p>
    {status === "success" ? <div ref={successRef} tabIndex={-1} role="status" className="py-8 text-center">
      <CheckCircle2 className="w-12 h-12 text-gold-dark mx-auto mb-4" aria-hidden="true" /><h3 className="text-xl font-bold mb-3">وصلتنا رسالتك</h3><p className="text-slate-600 mb-6">شكراً لتواصلك مع سمو الحكمة. سيقوم فريقنا بمراجعة رسالتك والتواصل معك.</p><button type="button" className="btn-navy-outline" onClick={() => setStatus("idle")}>إرسال رسالة أخرى</button>
    </div> : <form noValidate onSubmit={handleSubmit(onSubmit)} aria-busy={isSubmitting} className="space-y-6">
      {status === "error" && <div role="alert" className="flex gap-3 text-red-800 bg-red-50 rounded-md p-4"><AlertCircle size={20} className="shrink-0 mt-1" aria-hidden="true" /><p className="text-sm">{errorMessage}</p></div>}
      <div className="grid sm:grid-cols-2 gap-6">
        <div><label htmlFor="name" className="block font-semibold text-sm mb-2">الاسم الكريم *</label><input id="name" autoComplete="name" maxLength={120} className={fieldClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name", { required: "أدخل اسمك الكريم", validate: value => !!value.trim() || "أدخل اسمك الكريم" })} />{errors.name && <p id="name-error" className="text-red-700 text-sm mt-2">{errors.name.message}</p>}</div>
        <div><label htmlFor="phone" className="block font-semibold text-sm mb-2">رقم الجوال *</label><input id="phone" type="tel" inputMode="tel" dir="ltr" autoComplete="tel" maxLength={24} placeholder="05xxxxxxxx" className={fieldClass} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone", { setValueAs: normalizePhone, required: "أدخل رقم جوالك", pattern: { value: /^\+?[0-9]{9,15}$/, message: "أدخل رقم جوال صحيحاً، مع رمز الدولة عند الحاجة" } })} />{errors.phone && <p id="phone-error" className="text-red-700 text-sm mt-2">{errors.phone.message}</p>}</div>
      </div>
      <div><label htmlFor="email" className="block font-semibold text-sm mb-2">البريد الإلكتروني <span className="text-slate-500 font-normal">(اختياري)</span></label><input id="email" type="email" dir="ltr" autoComplete="email" maxLength={254} placeholder="name@example.com" className={fieldClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email", { setValueAs: (value: string) => value.trim(), pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "أدخل بريداً إلكترونياً صحيحاً" } })} />{errors.email && <p id="email-error" className="text-red-700 text-sm mt-2">{errors.email.message}</p>}</div>
      <div><label htmlFor="message" className="block font-semibold text-sm mb-2">تفاصيل الرسالة *</label><textarea id="message" rows={6} maxLength={5000} className={`${fieldClass} resize-none`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} {...register("message", { required: "اكتب موضوع رسالتك", validate: value => value.trim().length >= 10 || "أضف تفاصيل أكثر؛ ١٠ أحرف على الأقل" })} />{errors.message && <p id="message-error" className="text-red-700 text-sm mt-2">{errors.message.message}</p>}</div>
      <button type="submit" disabled={isSubmitting} className="btn-gold w-full disabled:opacity-60 disabled:transform-none"><span className="min-w-36 text-center">{isSubmitting ? "جارٍ إرسال الرسالة…" : "إرسال الرسالة"}</span>{isSubmitting ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <ArrowLeft size={18} aria-hidden="true" />}</button>
    </form>}
  </div>;
}
