import Badge from './Badge.jsx'

function SpellCard({ spell, onSelect, highlighted }) {
  return (
    <button
      onClick={() => onSelect(spell)}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        highlighted ? 'border-[#c4a867] bg-[#1a1f2e]' : 'border-[#c4a867]/20 bg-black/40 hover:border-[#c4a867]/60'
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-ivory">{spell.name}</h3>
        <Badge tone={spell.caution === 'dark' ? 'dark' : 'gold'}>{spell.caution}</Badge>
      </div>
      <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/50">{spell.category}</p>
      <p className="mt-2 text-sm text-[#f5f0e3]/70">{spell.effect}</p>
    </button>
  )
}

export default SpellCard

