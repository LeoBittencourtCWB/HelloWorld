export interface WatchProvider {
  provider_id: number
  provider_name: string
  logo_path: string
}

export interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  release_date: string
  vote_average: number
  imdb_id?: string
  imdb_rating?: string
  providers: WatchProvider[]
}

export interface Platform {
  id: number
  name: string
  color: string
}

export type TabType = 'now_playing' | 'upcoming'

export interface TmdbMovieResult {
  id: number
  title: string
  overview: string
  poster_path: string | null
  release_date: string
  vote_average: number
}

export interface TmdbMovieListResponse {
  results: TmdbMovieResult[]
  page: number
  total_pages: number
  total_results: number
}

export interface TmdbWatchProvidersResponse {
  results: {
    US?: {
      flatrate?: WatchProvider[]
      rent?: WatchProvider[]
      buy?: WatchProvider[]
    }
  }
}

export interface TmdbExternalIdsResponse {
  imdb_id: string | null
}

export interface OmdbRatingResponse {
  imdbRating: string
  Response: string
}
