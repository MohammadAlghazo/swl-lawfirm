export default function Loading() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] flex items-center justify-center pt-20">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
          <svg
            className="animate-spin"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="#E5DDD0"
              strokeWidth="4"
            />
            <path
              d="M24 4 A20 20 0 0 1 44 24"
              stroke="#B08D57"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 bg-[#B08D57] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-[#B08D57] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-[#B08D57] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
        <p className="mt-4 text-[#1B2B4B] font-semibold text-sm opacity-60">جارٍ التحميل...</p>
      </div>
    </div>
  );
}
