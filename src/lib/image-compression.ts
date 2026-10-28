export interface CompressionResult {
  file: File;
  previewUrl: string;
  originalSize: number;
  compressedSize: number;
  savingsPercent: number;
}

export async function compressImageOnClient(
  file: File,
  maxWidth = 1400,
  maxHeight = 900,
  quality = 0.82
): Promise<CompressionResult> {
  const originalSize = file.size;

  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let { width, height } = img;
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return reject(new Error("Failed to create canvas context"));
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            return reject(new Error("Image compression failed"));
          }

          const newFileName = file.name.replace(/\.[^.]+$/, "") + ".webp";
          const compressedFile = new File([blob], newFileName, { type: "image/webp" });
          const compressedSize = blob.size;
          const savingsPercent = Math.max(
            0,
            Math.round(((originalSize - compressedSize) / originalSize) * 100)
          );
          const previewUrl = URL.createObjectURL(blob);

          resolve({
            file: compressedFile,
            previewUrl,
            originalSize,
            compressedSize,
            savingsPercent,
          });
        },
        "image/webp",
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Invalid image file"));
    };

    img.src = objectUrl;
  });
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 بايت";
  const k = 1024;
  const sizes = ["بايت", "كيلوبايت", "ميجابايت", "جيجابايت"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}
