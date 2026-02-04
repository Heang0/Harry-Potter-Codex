function TimelineEvent({ event, onSelect }) {
  return (
    <button
      onClick={() => onSelect(event)}
      className="group flex w-full flex-col gap-2 rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4 text-left transition hover:-translate-y-1 hover:border-[#c4a867]/60"
    >
      <span className="text-xs uppercase tracking-[0.3em] text-gold">{event.year}</span>
      <h3 className="text-lg text-ivory">{event.title}</h3>
      <p className="text-sm text-[#f5f0e3]/70">{event.description}</p>
      <div className="flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <span key={tag} className="badge rounded-full px-3 py-1 text-[10px]">
            {tag}
          </span>
        ))}
      </div>
    </button>
  )
}

export default TimelineEvent

