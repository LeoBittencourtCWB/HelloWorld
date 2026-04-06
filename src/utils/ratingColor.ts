export function ratingColor(score: number): string {
  if (score >= 7) return 'text-green-400'
  if (score >= 5) return 'text-yellow-400'
  return 'text-red-400'
}
