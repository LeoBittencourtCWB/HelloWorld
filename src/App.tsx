import useFilterStore from './store/useFilterStore'
import { useProviderLogos } from './hooks/useProviderLogos'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TabBar from './components/tabs/TabBar'
import PlatformFilter from './components/filters/PlatformFilter'
import MovieGrid from './components/movies/MovieGrid'

export default function App() {
  const { activeTab, activePlatforms, setTab, togglePlatform, clearFilters } = useFilterStore()
  const providerLogos = useProviderLogos()

  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <TabBar activeTab={activeTab} onTabChange={setTab} />
        <PlatformFilter
          activePlatforms={activePlatforms}
          providerLogos={providerLogos}
          onToggle={togglePlatform}
          onClear={clearFilters}
        />
        <MovieGrid />
      </main>
      <Footer />
    </div>
  )
}
