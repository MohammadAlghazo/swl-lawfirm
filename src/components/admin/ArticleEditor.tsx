"use client";

import { validateAdminForm } from "@/lib/form-validation";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  Save,
  Loader2,
  Image as ImageIcon,
  UploadCloud,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Link as LinkIcon,
  RefreshCw,
} from "lucide-react";
import { compressImageOnClient, formatBytes } from "@/lib/image-compression";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function ArticleEditor({ initialData }: { initialData?: { id: number; title: string; slug: string; excerpt: string | null; content: string; coverImage: string | null; published: boolean } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgressText, setUploadProgressText] = useState("");
  const [compressionStats, setCompressionStats] = useState<{
    original: string;
    compressed: string;
    savings: number;
  } | null>(null);
  const [uploadError, setUploadError] = useState("");
  const [showManualUrl, setShowManualUrl] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    coverImage: initialData?.coverImage || "",
    published: initialData?.published !== undefined ? initialData.published : true,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    const validationError = validateAdminForm(e, "admin-form-error");
    if (validationError) { setError(validationError); return; }
    setIsLoading(true);
    setError("");

    if (!formData.content.replace(/<[^>]+>/g, "").trim()) { setError("أدخل محتوى المقال قبل الحفظ"); setIsLoading(false); return; }
    const isEditing = !!initialData;
    const url = isEditing ? `/api/articles/${initialData.id}` : "/api/articles";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "حدث خطأ أثناء حفظ المقال");
      }

      router.push("/admin/articles");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "تعذر حفظ المقال");
      setIsLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s\u0600-\u06FF-]/g, '') // Allow Arabic characters
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: formData.slug === "" || formData.slug === generateSlug(formData.title) 
        ? generateSlug(title) 
        : formData.slug
    });
  };

  const handleImageFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setUploadError("يرجى اختيار ملف صورة صالح (JPEG, PNG, WebP, AVIF).");
      return;
    }

    setIsUploading(true);
    setUploadError("");
    setCompressionStats(null);
    setUploadProgressText("جاري تحسين وضغط الصورة...");

    try {
      const compression = await compressImageOnClient(file, 1400, 900, 0.82);
      setCompressionStats({
        original: formatBytes(compression.originalSize),
        compressed: formatBytes(compression.compressedSize),
        savings: compression.savingsPercent,
      });

      setUploadProgressText("جاري رفع وحفظ الصورة...");

      const uploadBody = new FormData();
      uploadBody.append("file", compression.file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: uploadBody,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "فشل رفع الصورة");
      }

      setFormData((prev) => ({ ...prev, coverImage: data.url }));
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "تعذر رفع ومعالجة الصورة");
    } finally {
      setIsUploading(false);
      setUploadProgressText("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageFile(file);
    }
    e.target.value = "";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleImageFile(file);
    }
  };

  const handleManualUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, coverImage: val }));
    if (val.includes("drive.google.com")) {
      setUploadError("تنبيه: روابط جوجل درايف غير مدعومة مباشرة في المتصفح؛ يرجى رفع ملف الصورة من جهازك بالأعلى للحصول على أفضل سرعة ودقة.");
    } else {
      setUploadError("");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <form noValidate onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div role="alert" id="admin-form-error" className="bg-red-50 text-red-500 p-4 rounded-lg text-sm font-medium border border-red-100">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                عنوان المقال <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={handleTitleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                placeholder="اكتب عنوان المقال هنا..."
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                رابط المقال (Slug) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                placeholder="example-article-slug"
                dir="ltr"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                محتوى المقال <span className="text-red-500">*</span>
              </label>
              <div className="bg-white" dir="ltr">
                <ReactQuill 
                  theme="snow" 
                  value={formData.content} 
                  onChange={(content) => setFormData({ ...formData, content })}
                  className="article-editor"
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      [{ 'align': [] }],
                      ['link', 'image'],
                      ['clean']
                    ]
                  }}
                />
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-navy mb-4">نشر المقال</h3>

              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.published}
                    onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                    className="w-5 h-5 rounded text-gold focus:ring-gold accent-gold"
                  />
                  <span className="text-sm font-bold text-gray-700">نشر المقال فوراً</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center items-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-bold text-white hover:bg-navy-light transition-all disabled:opacity-70"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Save className="w-5 h-5" />
                    <span>حفظ المقال</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-navy mb-4">صورة المقال</h3>

              <div className="space-y-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/avif"
                  className="hidden"
                  onChange={handleFileChange}
                />

                {formData.coverImage ? (
                  <div className="space-y-3">
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 aspect-video bg-gray-100 group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={formData.coverImage}
                        alt="معاينة صورة المقال"
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={isUploading}
                          className="px-3.5 py-2 rounded-lg bg-white/95 text-navy text-xs font-bold shadow-sm hover:bg-white transition-all flex items-center gap-1.5 active:scale-95"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>تغيير الصورة</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, coverImage: "" }));
                            setCompressionStats(null);
                          }}
                          disabled={isUploading}
                          className="px-3.5 py-2 rounded-lg bg-red-600 text-white text-xs font-bold shadow-sm hover:bg-red-700 transition-all flex items-center gap-1.5 active:scale-95"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>إزالة</span>
                        </button>
                      </div>
                    </div>

                    {compressionStats && (
                      <div className="text-xs p-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>
                          تم تحسين الصورة: خفض الحجم بنسبة {compressionStats.savings}% ({compressionStats.original} ⬅ {compressionStats.compressed})
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => !isUploading && fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-2.5 ${
                        isDragging
                          ? "border-[#B08D57] bg-[#B08D57]/5 scale-[0.99]"
                          : "border-gray-300 hover:border-[#B08D57] bg-white hover:bg-gray-50/50"
                      } ${isUploading ? "opacity-75 pointer-events-none" : ""}`}
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="w-8 h-8 text-[#B08D57] animate-spin" />
                          <p className="text-sm font-bold text-navy">{uploadProgressText}</p>
                          <p className="text-xs text-gray-400">جاري المعالجة بدون التأثير على جودة العرض...</p>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-[#B08D57] border border-gray-100">
                            <UploadCloud className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-navy">
                              اضغط لاختيار صورة من جهازك
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              أو اسحب ملف الصورة وأفلته هنا
                            </p>
                          </div>
                          <p className="text-[11px] text-gray-400">
                            يتم ضغط الصورة تلقائياً وتحويلها لصيغة WebP فائقة السرعة
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {uploadError && (
                  <div className="text-xs p-3 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                    <span className="leading-relaxed">{uploadError}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-gray-200/60">
                  <button
                    type="button"
                    onClick={() => setShowManualUrl(!showManualUrl)}
                    className="text-xs text-gray-500 hover:text-navy transition-colors flex items-center gap-1.5"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                    <span>{showManualUrl ? "إخفاء الرابط الخارجي" : "أو إدخال رابط صورة يدوي"}</span>
                  </button>

                  {showManualUrl && (
                    <div className="mt-3">
                      <div className="relative">
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <ImageIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                          type="url"
                          value={formData.coverImage}
                          onChange={handleManualUrlChange}
                          className="w-full rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-xs focus:ring-2 focus:ring-gold outline-none"
                          placeholder="https://..."
                          dir="ltr"
                        />
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1.5">
                        لأفضل سرعة للموقع، نوصي برفع الصورة مباشرة من جهازك بالأعلى.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-navy mb-4">مقتطف قصير</h3>
              <div>
                <textarea
                  rows={4}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-gold outline-none"
                  placeholder="وصف قصير للمقال يظهر في الصفحة الرئيسية..."
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
