import type { WatchProvider } from '../../types/movie'
import { useImdbRating } from '../../hooks/useImdbRating'
import MoviePoster from './MoviePoster'
import RatingBadge from './RatingBadge'
import PlatformBadges from './PlatformBadges'
import { formatDate } from '../../utils/formatDate'

interface MovieCardProps {
  id: number
  title: string
  posterPath: string | null
  releaseDate: string
  voteAverage: number
  providers: WatchProvider[]
}

export default function MovieCard({
  id,
  title,
  posterPath,
  releaseDate,
  voteAverage,
  providers,
}: MovieCardProps) {
  const { data: imdbRating } = useImdbRating(id)

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:ring-1 hover:ring-gray-600 transition-all group cursor-pointer">
      <div className="relative">
        <MoviePoster posterPath={posterPath} title={title} />
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md">
          <RatingBadge imdbRating={imdbRating} tmdbScore={voteAverage} />
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-white text-sm font-semibold leading-tight line-clamp-2 group-hover:text-gray-100">
          {title}
        </h3>
        <p className="text-gray-500 text-xs mt-1">{formatDate(releaseDate)}</p>
        <PlatformBadges providers={providers} />
      </div>
    </div>
  )
}
