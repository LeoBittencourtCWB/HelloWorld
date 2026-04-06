import { useQueries } from '@tanstack/react-query'
import { fetchWatchProviders } from '../api/movieService'
import type { WatchProvider } from '../types/movie'

export function useWatchProviders(movieIds: number[]): Map<number, WatchProvider[]> {
  const results = useQueries({
    queries: movieIds.map((id) => ({
      queryKey: ['providers', id],
      queryFn: () => fetchWatchProviders(id),
      staleTime: 1000 * 60 * 60,
    })),
  })

  const providerMap = new Map<number, WatchProvider[]>()
  movieIds.forEach((id, index) => {
    const result = results[index]
    if (result.data) {
      providerMap.set(id, result.data)
    }
  })

  return providerMap
}
