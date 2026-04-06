import type { WatchProvider } from '../../types/movie'

interface PlatformBadgesProps {
  providers: WatchProvider[]
}

const IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE || 'https://image.tmdb.org/t/p'

export default function PlatformBadges({ providers }: PlatformBadgesProps) {
  if (!providers.length) return null

  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {providers.slice(0, 4).map((p) => (
        <img
          key={p.provider_id}
          src={`${IMAGE_BASE}/original${p.logo_path}`}
          alt={p.provider_name}
          title={p.provider_name}
          className="w-5 h-5 rounded object-cover"
        />
      ))}
      {providers.length > 4 && (
        <span className="text-gray-500 text-xs self-center">+{providers.length - 4}</span>
      )}
    </div>
  )
}
