interface EmptyStateProps {
  onClear: () => void
}

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-4xl mb-4">🎬</div>
      <p className="text-gray-300 text-lg mb-2">No movies found</p>
      <p className="text-gray-500 text-sm mb-6">
        No movies are available on the selected platforms right now.
      </p>
      <button
        onClick={onClear}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
      >
        Clear Filters
      </button>
    </div>
  )
}
