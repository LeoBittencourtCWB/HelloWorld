import type { TabType } from '../../types/movie'

interface TabBarProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

const TABS: { id: TabType; label: string }[] = [
  { id: 'now_playing', label: 'Now Playing' },
  { id: 'upcoming', label: 'Upcoming' },
]

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="flex gap-2 mb-6">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'bg-white text-gray-900'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
