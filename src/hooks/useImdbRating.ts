import { useQuery } from '@tanstack/react-query'
import { fetchExternalIds, fetchImdbRating } from '../api/movieService'
import { hasOmdbKey } from '../api/omdb'

export function useImdbRating(movieId: number) {
  return useQuery<string | undefined>({
    queryKey: ['imdb-rating', movieId],
    queryFn: async () => {
      const imdbId = await fetchExternalIds(movieId)
      if (!imdbId) return undefined
      return fetchImdbRating(imdbId)
    },
    enabled: hasOmdbKey(),
    staleTime: 1000 * 60 * 60 * 24,
  })
}
