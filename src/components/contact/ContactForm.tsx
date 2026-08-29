"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type ContactFormData = {
  name: string;
  phone: string;
  email?: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'حدث خطأ أثناء إرسال الرسالة.');
      }

      setSubmitStatus('success');
      reset(); // Clear the form
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'حدث خطأ غير متوقع. يرجى المحاولة لاحقاً.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-navy to-gold"></div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold text-navy mb-2">أرسل لنا رسالة</h3>
        <p className="text-gray-600 text-sm">
          قم بتعبئة النموذج أدناه وسيقوم فريقنا القانوني بالتواصل معك في أقرب وقت ممكن.
        </p>
      </div>

      {submitStatus === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in-up">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-bold text-green-800 mb-2">تم الإرسال بنجاح!</h4>
          <p className="text-green-700 mb-6">
            شكراً لتواصلك مع شركة سمو الحكمة. لقد استلمنا رسالتك وسنقوم بالرد عليك في أقرب وقت.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="text-navy font-bold hover:text-gold-dark transition-colors"
          >
            إرسال رسالة أخرى
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-bold text-navy">
                الاسم الكريم <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="أدخل اسمك الكامل"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                  errors.name 
                    ? 'border-red-300 focus:ring-red-200 bg-red-50' 
                    : 'border-gray-200 focus:border-gold focus:ring-gold/20 bg-gray-50 focus:bg-white'
                }`}
                {...register('name', { required: 'الاسم مطلوب' })}
              />
              {errors.name && <p className="text-red-500 text-xs font-bold mt-1">{errors.name.message}</p>}
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-bold text-navy">
                رقم الجوال <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="مثال: 0500000000"
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                  errors.phone 
                    ? 'border-red-300 focus:ring-red-200 bg-red-50' 
                    : 'border-gray-200 focus:border-gold focus:ring-gold/20 bg-gray-50 focus:bg-white'
                }`}
                {...register('phone', { 
                  required: 'رقم الجوال مطلوب',
                  pattern: {
                    value: /^[0-9+]{9,14}$/,
                    message: 'الرجاء إدخال رقم جوال صحيح'
                  }
                })}
              />
              {errors.phone && <p className="text-red-500 text-xs font-bold mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-bold text-navy">
              البريد الإلكتروني <span className="text-gray-400 font-normal text-xs">(اختياري)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@domain.com"
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all ${
                errors.email 
                  ? 'border-red-300 focus:ring-red-200 bg-red-50' 
                  : 'border-gray-200 focus:border-gold focus:ring-gold/20 bg-gray-50 focus:bg-white'
              }`}
              {...register('email', { 
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'الرجاء إدخال بريد إلكتروني صحيح'
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs font-bold mt-1">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-bold text-navy">
              تفاصيل الاستشارة أو الرسالة <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="اكتب تفاصيل استشارتك أو رسالتك هنا..."
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all resize-y ${
                errors.message 
                  ? 'border-red-300 focus:ring-red-200 bg-red-50' 
                  : 'border-gray-200 focus:border-gold focus:ring-gold/20 bg-gray-50 focus:bg-white'
              }`}
              {...register('message', { required: 'الرسالة مطلوبة', minLength: { value: 10, message: 'يجب أن تحتوي الرسالة على 10 أحرف على الأقل' } })}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs font-bold mt-1">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy text-white font-bold py-4 px-6 rounded-lg hover:bg-navy-dark transition-colors flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  جاري الإرسال...
                </>
              ) : (
                <>
                  إرسال الرسالة الآن
                  <Send className="w-5 h-5 rotate-180" />
                </>
              )}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
