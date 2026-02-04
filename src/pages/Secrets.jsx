import { useState } from 'react'
import { Link } from 'react-router-dom'
import { loreSections, glossary, watchOrder, bestSpells, iconicLocations } from '../data/lore.js'
import { movies } from '../data/movies.js'
import { characters } from '../data/characters.js'
import LoreCard from '../components/LoreCard.jsx'

function Secrets() {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="container-max section">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Secrets & Lore</h1>
        <p className="text-sm text-[#f5f0e3]/70">Expand the legends behind Hogwarts and beyond.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {loreSections.map((lore) => {
          const relatedMovieLinks = lore.relatedMovies
            .map((id) => movies.find((movie) => movie.id === id))
            .filter(Boolean)
            .map((movie) => ({ label: movie.title, to: `/movies?highlight=${movie.id}` }))
          const relatedCharacterLinks = lore.relatedCharacters
            .map((id) => characters.find((character) => character.id === id))
            .filter(Boolean)
            .map((character) => ({ label: character.name, to: `/characters/${character.id}` }))
          return (
            <LoreCard
              key={lore.id}
              lore={lore}
              isOpen={openId === lore.id}
              onToggle={() => setOpenId(lore.id)}
              relatedMovies={relatedMovieLinks}
              relatedCharacters={relatedCharacterLinks}
            />
          )
        })}
        ))}
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-5">
          <h2 className="text-xl text-gold">Watching/Reading Order</h2>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Books</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-[#f5f0e3]/70">
            {watchOrder.books.map((book) => (
              <li key={book}>{book}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Movies</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-[#f5f0e3]/70">
            {watchOrder.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-5">
          <h2 className="text-xl text-gold">Iconic Locations</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#f5f0e3]/70">
            {iconicLocations.map((location) => (
              <li key={location.mapId}>
                <Link to={`/map?focus=${location.mapId}`} className="text-gold">
                  {location.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-5">
          <h2 className="text-xl text-gold">Best Spells for Beginners</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-[#f5f0e3]/70">
            {bestSpells.map((spell) => (
              <li key={spell}>{spell}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-[#c4a867]/20 bg-black/40 p-6">
        <h2 className="text-2xl text-gold">Glossary</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {glossary.map((item) => (
            <div key={item.term} className="rounded-xl border border-white/10 bg-black/30 p-4">
              <h3 className="text-lg text-ivory">{item.term}</h3>
              <p className="text-sm text-[#f5f0e3]/70">{item.definition}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Secrets


