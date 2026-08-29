"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ArrowRight, Save, Loader2, Image as ImageIcon } from "lucide-react";
import "react-quill/dist/quill.snow.css";

// Dynamic import for ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ArticleEditor({ initialData }: { initialData?: any }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    coverImage: initialData?.coverImage || "",
    published: initialData?.published !== undefined ? initialData.published : true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

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
    } catch (err: any) {
      setError(err.message);
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

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-lg text-sm font-medium border border-red-100">
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
                  className="h-96 mb-12"
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
                <div>
                  <label className="block text-sm text-gray-700 mb-2">رابط الصورة (URL)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <ImageIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="url"
                      value={formData.coverImage}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 py-2 pl-3 pr-10 text-sm focus:ring-2 focus:ring-gold outline-none"
                      placeholder="https://..."
                      dir="ltr"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">مؤقتاً، يرجى إدخال رابط صورة مباشرة</p>
                </div>
                
                {formData.coverImage && (
                  <div className="mt-4 rounded-lg overflow-hidden border border-gray-200 aspect-video relative bg-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={formData.coverImage} 
                      alt="Preview" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-navy mb-4">مقتطف قصير</h3>
              <div>
                <textarea
                  rows={4}
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-gold outline-none"
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
