import axios from 'axios'

const omdb = axios.create({
  baseURL: 'https://www.omdbapi.com',
  params: {
    apikey: import.meta.env.VITE_OMDB_API_KEY,
  },
})

export const hasOmdbKey = (): boolean => {
  const key = import.meta.env.VITE_OMDB_API_KEY
  return typeof key === 'string' && key.trim().length > 0
}

export default omdb
