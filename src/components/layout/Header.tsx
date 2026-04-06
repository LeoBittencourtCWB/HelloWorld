export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        <span className="text-2xl">🎥</span>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">CineStream</h1>
          <p className="text-gray-400 text-xs">Track new releases across all streaming platforms</p>
        </div>
      </div>
    </header>
  )
}
