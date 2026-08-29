export default function ArticlesLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-9 w-40 bg-gray-200 rounded-lg mb-2" />
          <div className="h-5 w-64 bg-gray-100 rounded-md" />
        </div>
        <div className="h-11 w-36 bg-gray-200 rounded-lg" />
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-4 bg-gray-200 rounded flex-1" />
          ))}
        </div>
        <div className="divide-y divide-gray-100">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-6 px-6 py-4 items-center">
              <div className="h-5 flex-1 bg-gray-100 rounded" />
              <div className="h-6 w-20 bg-gray-100 rounded-full" />
              <div className="h-5 w-32 bg-gray-100 rounded" />
              <div className="flex gap-2">
                <div className="h-8 w-16 bg-gray-100 rounded-lg" />
                <div className="h-8 w-16 bg-gray-100 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
