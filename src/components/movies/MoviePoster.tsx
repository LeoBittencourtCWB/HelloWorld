import { useState } from 'react'

interface MoviePosterProps {
  posterPath: string | null
  title: string
}

const IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE || 'https://image.tmdb.org/t/p'

export default function MoviePoster({ posterPath, title }: MoviePosterProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (!posterPath || error) {
    return (
      <div className="w-full aspect-[2/3] bg-gray-800 flex items-center justify-center rounded-t-lg">
        <span className="text-4xl">🎬</span>
      </div>
    )
  }

  return (
    <div className="w-full aspect-[2/3] bg-gray-800 rounded-t-lg overflow-hidden relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      <img
        src={`${IMAGE_BASE}/w500${posterPath}`}
        alt={title}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}
