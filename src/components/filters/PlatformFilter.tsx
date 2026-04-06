import { PLATFORMS } from '../../constants/platforms'
import PlatformButton from './PlatformButton'

interface PlatformFilterProps {
  activePlatforms: Set<number>
  providerLogos: Map<number, string>
  onToggle: (id: number) => void
  onClear: () => void
}

export default function PlatformFilter({
  activePlatforms,
  providerLogos,
  onToggle,
  onClear,
}: PlatformFilterProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-gray-400 text-sm font-medium">Filter by platform</span>
        {activePlatforms.size > 0 && (
          <button
            onClick={onClear}
            className="text-xs text-gray-500 hover:text-gray-300 underline transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {PLATFORMS.map((platform) => (
          <PlatformButton
            key={platform.id}
            platform={platform}
            active={activePlatforms.has(platform.id)}
            logoPath={providerLogos.get(platform.id)}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  )
}
