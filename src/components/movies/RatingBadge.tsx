import { ratingColor } from '../../utils/ratingColor'

interface RatingBadgeProps {
  imdbRating?: string
  tmdbScore: number
}

export default function RatingBadge({ imdbRating, tmdbScore }: RatingBadgeProps) {
  const displayScore = imdbRating ?? tmdbScore.toFixed(1)
  const numericScore = imdbRating ? parseFloat(imdbRating) : tmdbScore
  const label = imdbRating ? 'IMDb' : 'TMDB'

  return (
    <div className="flex flex-col items-end gap-0.5">
      <div className={`flex items-center gap-1 font-bold text-sm ${ratingColor(numericScore)}`}>
        <span>★</span>
        <span>{displayScore}</span>
      </div>
      <span className="text-gray-500 text-[10px] font-medium">{label}</span>
    </div>
  )
}
