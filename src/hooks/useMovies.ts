import { useQuery } from '@tanstack/react-query'
import { fetchNowPlaying, fetchUpcoming } from '../api/movieService'
import type { TabType, TmdbMovieResult } from '../types/movie'

export function useMovies(tab: TabType) {
  return useQuery<TmdbMovieResult[]>({
    queryKey: ['movies', tab],
    queryFn: async () => {
      const response = tab === 'now_playing'
        ? await fetchNowPlaying()
        : await fetchUpcoming()
      return response.results
    },
    staleTime: 1000 * 60 * 5,
  })
}
