import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { movies } from '../data/movies.js'
import MovieCard from '../components/MovieCard.jsx'

function Movies() {
  const [searchParams] = useSearchParams()
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const highlight = searchParams.get('highlight')
    if (highlight) {
      setExpandedId(highlight)
    }
  }, [searchParams])

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handlePrev = (currentId) => {
    const index = movies.findIndex((movie) => movie.id === currentId)
    const prevIndex = (index - 1 + movies.length) % movies.length
    setExpandedId(movies[prevIndex].id)
  }

  const handleNext = (currentId) => {
    const index = movies.findIndex((movie) => movie.id === currentId)
    const nextIndex = (index + 1) % movies.length
    setExpandedId(movies[nextIndex].id)
  }

  return (
    <div className="container-max section">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Movie Summaries</h1>
        <p className="text-sm text-[#f5f0e3]/70">All eight films in chronological order with spoiler toggles.</p>
      </div>
      <div className="flex flex-col gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            expanded={expandedId === movie.id}
            onToggle={handleToggle}
            onPrev={() => handlePrev(movie.id)}
            onNext={() => handleNext(movie.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Movies


