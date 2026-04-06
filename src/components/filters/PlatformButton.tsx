import type { Platform } from '../../types/movie'

interface PlatformButtonProps {
  platform: Platform
  active: boolean
  logoPath?: string
  onToggle: (id: number) => void
}

const IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE || 'https://image.tmdb.org/t/p'

export default function PlatformButton({ platform, active, logoPath, onToggle }: PlatformButtonProps) {
  return (
    <button
      onClick={() => onToggle(platform.id)}
      style={active ? { borderColor: platform.color, boxShadow: `0 0 0 1px ${platform.color}` } : undefined}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap border ${
        active
          ? 'bg-gray-800 text-white border-transparent'
          : 'bg-gray-900 text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-200'
      }`}
    >
      {logoPath && (
        <img
          src={`${IMAGE_BASE}/original${logoPath}`}
          alt={platform.name}
          className="w-5 h-5 rounded object-cover"
        />
      )}
      <span>{platform.name}</span>
    </button>
  )
}
