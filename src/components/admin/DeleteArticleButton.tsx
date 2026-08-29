"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteArticleButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("هل أنت متأكد من حذف هذا المقال نهائياً؟")) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      } else {
        alert("حدث خطأ أثناء حذف المقال");
        setIsDeleting(false);
      }
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء حذف المقال");
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded transition-colors disabled:opacity-50"
      title="حذف المقال"
    >
      {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
    </button>
  );
}
