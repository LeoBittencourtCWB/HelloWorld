export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 mt-12 text-center text-gray-600 text-xs">
      <p>
        Movie data from{' '}
        <span className="text-gray-400">TMDB</span>
        {' · '}
        Ratings from{' '}
        <span className="text-gray-400">OMDB / IMDB</span>
      </p>
    </footer>
  )
}
