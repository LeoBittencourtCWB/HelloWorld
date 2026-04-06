import { create } from 'zustand'
import type { TabType } from '../types/movie'

interface FilterState {
  activePlatforms: Set<number>
  activeTab: TabType
  togglePlatform: (id: number) => void
  clearFilters: () => void
  setTab: (tab: TabType) => void
}

const useFilterStore = create<FilterState>((set) => ({
  activePlatforms: new Set<number>(),
  activeTab: 'now_playing',

  togglePlatform: (id) =>
    set((state) => {
      const next = new Set(state.activePlatforms)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return { activePlatforms: next }
    }),

  clearFilters: () => set({ activePlatforms: new Set<number>() }),

  setTab: (tab) => set({ activeTab: tab }),
}))

export default useFilterStore
