import { useMovies } from '../../hooks/useMovies'
import { useWatchProviders } from '../../hooks/useWatchProviders'
import useFilterStore from '../../store/useFilterStore'
import MovieCard from './MovieCard'
import MovieCardSkeleton from './MovieCardSkeleton'
import ErrorMessage from '../ui/ErrorMessage'
import EmptyState from '../ui/EmptyState'

export default function MovieGrid() {
  const { activeTab, activePlatforms, clearFilters } = useFilterStore()
  const { data: movies, isLoading, isError, refetch, error } = useMovies(activeTab)

  const movieIds = movies?.map((m) => m.id) ?? []
  const providerMap = useWatchProviders(movieIds)

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <MovieCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (isError) {
    const msg = error instanceof Error ? error.message : undefined
    return <ErrorMessage message={msg} onRetry={() => refetch()} />
  }

  const filtered = (movies ?? []).filter((movie) => {
    if (activePlatforms.size === 0) return true
    const providers = providerMap.get(movie.id) ?? []
    return providers.some((p) => activePlatforms.has(p.provider_id))
  })

  if (filtered.length === 0) {
    return <EmptyState onClear={clearFilters} />
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filtered.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          providers={providerMap.get(movie.id) ?? []}
        />
      ))}
    </div>
  )
}
