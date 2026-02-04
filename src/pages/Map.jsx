import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { mapLocations } from '../data/mapLocations.js'
import { movies } from '../data/movies.js'
import { characters } from '../data/characters.js'
import SidePanel from '../components/SidePanel.jsx'

function MapPage() {
  const [searchParams] = useSearchParams()
  const [scale, setScale] = useState(1)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const focusId = searchParams.get('focus')
    if (focusId) {
      const location = mapLocations.find((item) => item.id === focusId)
      if (location) {
        setSelected(location)
      }
    }
  }, [searchParams])

  const handleSelect = (location) => {
    setSelected(location)
  }

  const relatedMovies = selected
    ? selected.relatedMovies.map((id) => movies.find((movie) => movie.id === id)).filter(Boolean)
    : []
  const relatedCharacters = selected
    ? selected.relatedCharacters.map((id) => characters.find((character) => character.id === id)).filter(Boolean)
    : []

  return (
    <div className="container-max section pt-24">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Hogwarts Map</h1>
        <p className="text-sm text-[#f5f0e3]/70">Explore key locations with interactive hotspots.</p>
      </div>
      <div className="relative rounded-3xl border border-[#c4a867]/20 bg-black/40 p-4">
        <div className="flex justify-end gap-2 pb-3 md:pb-0 md:absolute md:right-4 md:top-4 md:z-10">
          <button
            className="rounded-full border border-[#c4a867]/40 px-3 py-2 text-xs uppercase tracking-[0.2em] text-gold"
            onClick={() => setScale((prev) => Math.min(prev + 0.1, 1.5))}
          >
            +
          </button>
          <button
            className="rounded-full border border-[#c4a867]/40 px-3 py-2 text-xs uppercase tracking-[0.2em] text-gold"
            onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.8))}
          >
            -
          </button>
        </div>
        <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '16 / 9' }}>
          <div className="relative" style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
            <img
              src="https://placehold.co/1200x700?text=Hogwarts+Map+Placeholder"
              alt="Hogwarts map"
              className="h-full w-full object-cover"
            />
            {mapLocations.map((location) => (
              <button
                key={location.id}
                className="absolute flex h-6 w-6 items-center justify-center rounded-full border border-[#c4a867]/80 bg-black/70 text-[10px] text-gold"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                onClick={() => handleSelect(location)}
                aria-label={location.name}
              >
                +
              </button>
            ))}
          </div>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">
          Tap a hotspot to reveal details.
        </p>
      </div>

      <SidePanel isOpen={Boolean(selected)} onClose={() => setSelected(null)} title={selected?.name}>
        {selected && (
          <>
            <p>{selected.description}</p>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Key Events</p>
              <ul className="mt-2 list-disc pl-5">
                {selected.events.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Related Characters</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedCharacters.map((character) => (
                  <span key={character.id} className="rounded-full border border-[#c4a867]/40 px-3 py-1 text-xs text-gold">
                    {character.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Related Movies</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedMovies.map((movie) => (
                  <span key={movie.id} className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#f5f0e3]/80">
                    {movie.title}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </SidePanel>
    </div>
  )
}

export default MapPage



