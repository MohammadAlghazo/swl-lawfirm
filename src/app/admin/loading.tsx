export default function AdminLoading() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Header skeleton */}
      <div>
        <div className="h-9 w-64 bg-gray-200 rounded-lg mb-2" />
        <div className="h-5 w-96 bg-gray-100 rounded-md" />
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100" />
            </div>
            <div className="h-9 w-16 bg-gray-200 rounded mb-1" />
            <div className="h-4 w-28 bg-gray-100 rounded" />
            <div className="mt-4 h-4 w-24 bg-gray-100 rounded" />
          </div>
        ))}
      </div>

      {/* Table skeleton */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="h-6 w-40 bg-gray-200 rounded" />
        </div>
        <div className="divide-y divide-gray-100">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-6 px-6 py-4">
              <div className="h-5 w-28 bg-gray-100 rounded" />
              <div className="h-5 w-24 bg-gray-100 rounded" />
              <div className="h-5 w-40 bg-gray-100 rounded" />
              <div className="h-5 flex-1 bg-gray-100 rounded" />
              <div className="h-5 w-32 bg-gray-100 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
