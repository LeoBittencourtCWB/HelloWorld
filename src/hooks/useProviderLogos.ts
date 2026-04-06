import { useQuery } from '@tanstack/react-query'
import tmdb from '../api/tmdb'
import { PLATFORMS } from '../constants/platforms'

interface TmdbProvider {
  provider_id: number
  logo_path: string
  provider_name: string
}

interface TmdbProvidersListResponse {
  results: TmdbProvider[]
}

export function useProviderLogos(): Map<number, string> {
  const { data } = useQuery<Map<number, string>>({
    queryKey: ['provider-logos'],
    queryFn: async () => {
      const { data } = await tmdb.get<TmdbProvidersListResponse>('/watch/providers/movie', {
        params: { watch_region: 'US' },
      })
      const platformIds = new Set(PLATFORMS.map((p) => p.id))
      const map = new Map<number, string>()
      for (const provider of data.results) {
        if (platformIds.has(provider.provider_id)) {
          map.set(provider.provider_id, provider.logo_path)
        }
      }
      return map
    },
    staleTime: 1000 * 60 * 60 * 24,
  })
  return data ?? new Map()
}
