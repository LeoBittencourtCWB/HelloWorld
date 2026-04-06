import tmdb from './tmdb'
import omdb, { hasOmdbKey } from './omdb'
import type {
  TmdbMovieListResponse,
  TmdbWatchProvidersResponse,
  TmdbExternalIdsResponse,
  OmdbRatingResponse,
  WatchProvider,
} from '../types/movie'

export async function fetchNowPlaying(page = 1): Promise<TmdbMovieListResponse> {
  const { data } = await tmdb.get<TmdbMovieListResponse>('/movie/now_playing', {
    params: { page },
  })
  return data
}

export async function fetchUpcoming(page = 1): Promise<TmdbMovieListResponse> {
  const { data } = await tmdb.get<TmdbMovieListResponse>('/movie/upcoming', {
    params: { page },
  })
  return data
}

export async function fetchWatchProviders(movieId: number): Promise<WatchProvider[]> {
  const { data } = await tmdb.get<TmdbWatchProvidersResponse>(
    `/movie/${movieId}/watch/providers`
  )
  const us = data.results?.US
  if (!us) return []
  return us.flatrate ?? []
}

export async function fetchExternalIds(movieId: number): Promise<string | null> {
  const { data } = await tmdb.get<TmdbExternalIdsResponse>(
    `/movie/${movieId}/external_ids`
  )
  return data.imdb_id
}

export async function fetchImdbRating(imdbId: string): Promise<string | undefined> {
  if (!hasOmdbKey()) return undefined
  try {
    const { data } = await omdb.get<OmdbRatingResponse>('/', {
      params: { i: imdbId },
    })
    if (data.Response === 'True' && data.imdbRating !== 'N/A') {
      return data.imdbRating
    }
  } catch {
    // silently fail, caller falls back to TMDB rating
  }
  return undefined
}
