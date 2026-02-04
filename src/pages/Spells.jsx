import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { spells, spellCategories } from '../data/spells.js'
import { characters } from '../data/characters.js'
import SearchBar from '../components/SearchBar.jsx'
import FilterDropdown from '../components/FilterDropdown.jsx'
import SpellCard from '../components/SpellCard.jsx'
import Modal from '../components/Modal.jsx'

function Spells() {
  const [searchParams] = useSearchParams()
  const highlightId = searchParams.get('highlight')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [selectedSpell, setSelectedSpell] = useState(null)

  useEffect(() => {
    if (highlightId) {
      const found = spells.find((spell) => spell.id === highlightId)
      if (found) {
        setSelectedSpell(found)
      }
    }
  }, [highlightId])

  const filtered = useMemo(() => {
    return spells.filter((spell) => {
      const matchesSearch = spell.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'all' ? true : spell.category === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

  const categoryOptions = [
    { label: 'All Categories', value: 'all' },
    ...spellCategories.map((cat) => ({ label: cat, value: cat })),
  ]

  const relatedCharacters = selectedSpell
    ? selectedSpell.relatedCharacters
        .map((id) => characters.find((character) => character.id === id))
        .filter(Boolean)
    : []

  return (
    <div className="container-max section">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Spell Archive</h1>
        <p className="text-sm text-[#f5f0e3]/70">Study spellcraft by category, caution, and usage.</p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1">
          <SearchBar value={search} onChange={setSearch} placeholder="Search spells..." />
        </div>
        <div className="md:w-72">
          <FilterDropdown value={category} onChange={setCategory} options={categoryOptions} label="Category" />
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((spell) => (
          <SpellCard
            key={spell.id}
            spell={spell}
            onSelect={setSelectedSpell}
            highlighted={highlightId === spell.id}
          />
        ))}
      </div>

      <Modal isOpen={Boolean(selectedSpell)} onClose={() => setSelectedSpell(null)} title={selectedSpell?.name}>
        {selectedSpell && (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">{selectedSpell.pronunciation}</p>
            <p>{selectedSpell.effect}</p>
            <p className="text-[#f5f0e3]/60">{selectedSpell.example}</p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">
              <span>Category: {selectedSpell.category}</span>
              <span>Caution: {selectedSpell.caution}</span>
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
          </>
        )}
      </Modal>
    </div>
  )
}

export default Spells


