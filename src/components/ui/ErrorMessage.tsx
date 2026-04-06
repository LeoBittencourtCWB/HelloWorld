interface ErrorMessageProps {
  message?: string
  onRetry?: () => void
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-4xl mb-4">⚠️</div>
      <p className="text-gray-300 text-lg mb-2">Failed to load movies</p>
      {message && <p className="text-gray-500 text-sm mb-6 max-w-md">{message}</p>}
      {!message && (
        <p className="text-gray-500 text-sm mb-6 max-w-md">
          Make sure your TMDB API key is set in the <code className="bg-gray-800 px-1 rounded">.env</code> file.
        </p>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  )
}
