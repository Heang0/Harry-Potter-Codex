function MovieCard({ movie, expanded, onToggle, onPrev, onNext }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c4a867]/20 bg-black/40">
      <div className="flex flex-col gap-4 p-5 lg:flex-row">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-48 w-full rounded-xl object-cover lg:h-56 lg:w-40"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl text-ivory">{movie.title}</h3>
              <p className="text-sm text-[#f5f0e3]/60">{movie.year}</p>
            </div>
            <button
              onClick={() => onToggle(movie.id)}
              className="rounded-full border border-[#c4a867]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold"
            >
              {expanded ? 'Hide Spoilers' : 'Show Spoilers'}
            </button>
          </div>
          <p className="mt-4 text-sm text-[#f5f0e3]/80">{movie.summary}</p>
          {expanded && (
            <div className="mt-4 space-y-3 text-sm text-[#f5f0e3]/80">
              <ul className="list-disc pl-5">
                {movie.events.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <button
                  className="rounded-full border border-[#c4a867]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold"
                  onClick={onPrev}
                >
                  Previous
                </button>
                <button
                  className="rounded-full border border-[#c4a867]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold"
                  onClick={onNext}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCard

