import { useMemo, useState } from 'react'
import { timelineEvents } from '../data/timeline.js'
import { characters } from '../data/characters.js'
import FilterDropdown from '../components/FilterDropdown.jsx'
import TimelineEvent from '../components/TimelineEvent.jsx'
import Modal from '../components/Modal.jsx'

function Timeline() {
  const [tag, setTag] = useState('all')
  const [era, setEra] = useState('all')
  const [selected, setSelected] = useState(null)

  const tagOptions = useMemo(() => {
    const tags = Array.from(new Set(timelineEvents.flatMap((event) => event.tags))).sort()
    return [{ label: 'All Tags', value: 'all' }, ...tags.map((item) => ({ label: item, value: item }))]
  }, [])

  const eraOptions = useMemo(() => {
    const eras = Array.from(new Set(timelineEvents.map((event) => event.era))).sort()
    return [{ label: 'All Eras', value: 'all' }, ...eras.map((item) => ({ label: item, value: item }))]
  }, [])

  const filtered = useMemo(() => {
    return timelineEvents.filter((event) => {
      const matchesTag = tag === 'all' ? true : event.tags.includes(tag)
      const matchesEra = era === 'all' ? true : event.era === era
      return matchesTag && matchesEra
    })
  }, [tag, era])

  const relatedCharacters = selected
    ? selected.relatedCharacters.map((id) => characters.find((character) => character.id === id)).filter(Boolean)
    : []

  return (
    <div className="container-max section">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Wizarding Timeline</h1>
        <p className="text-sm text-[#f5f0e3]/70">Navigate the milestones of Hogwarts history.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FilterDropdown value={tag} onChange={setTag} options={tagOptions} label="Tag" />
        <FilterDropdown value={era} onChange={setEra} options={eraOptions} label="Era" />
      </div>
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:overflow-x-auto">
        {filtered.map((event) => (
          <div key={event.id} className="lg:min-w-[320px]">
            <TimelineEvent event={event} onSelect={setSelected} />
          </div>
        ))}
      </div>
      <Modal isOpen={Boolean(selected)} onClose={() => setSelected(null)} title={selected?.title}>
        {selected && (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">{selected.year}</p>
            <p>{selected.description}</p>
            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">
              {selected.tags.map((tagItem) => (
                <span key={tagItem}>{tagItem}</span>
              ))}
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

export default Timeline


