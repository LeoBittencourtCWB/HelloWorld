export default function MovieCardSkeleton() {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden animate-pulse">
      <div className="w-full aspect-[2/3] bg-gray-800" />
      <div className="p-3 space-y-2">
        <div className="h-4 bg-gray-800 rounded w-3/4" />
        <div className="h-3 bg-gray-800 rounded w-1/2" />
        <div className="flex gap-1 mt-2">
          <div className="w-5 h-5 bg-gray-800 rounded" />
          <div className="w-5 h-5 bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  )
}
