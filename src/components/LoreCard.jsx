import { Link } from 'react-router-dom'

function LoreCard({ lore, isOpen, onToggle, relatedMovies = [], relatedCharacters = [] }) {
  return (
    <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl text-ivory">{lore.title}</h3>
          <p className="mt-2 text-sm text-[#f5f0e3]/70">{lore.summary}</p>
        </div>
        <button
          className="rounded-full border border-[#c4a867]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold"
          onClick={onToggle}
        >
          {isOpen ? 'Read less' : 'Read more'}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 space-y-3 text-sm text-[#f5f0e3]/70">
          <p>{lore.details}</p>
          {relatedMovies.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Related Movies</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedMovies.map((movie) => (
                  <Link
                    key={movie.label}
                    to={movie.to}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#f5f0e3]/80"
                  >
                    {movie.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
          {relatedCharacters.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Related Characters</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {relatedCharacters.map((character) => (
                  <Link
                    key={character.label}
                    to={character.to}
                    className="rounded-full border border-[#c4a867]/40 px-3 py-1 text-xs text-gold"
                  >
                    {character.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default LoreCard

