import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { characters } from '../data/characters.js'
import { spells } from '../data/spells.js'
import { courses } from '../data/courses.js'

function CharacterDetail() {
  const { id } = useParams()
  const character = useMemo(() => characters.find((c) => c.id === id), [id])

  if (!character) {
    return (
      <div className="container-max section">
        <p className="text-[#f5f0e3]/70">Character not found.</p>
        <Link to="/characters" className="mt-4 inline-flex text-gold">
          Back to Characters
        </Link>
      </div>
    )
  }

  const friendLinks = character.relationships.friends
    .map((friendId) => characters.find((c) => c.id === friendId))
    .filter(Boolean)
  const enemyLinks = character.relationships.enemies
    .map((enemyId) => characters.find((c) => c.id === enemyId))
    .filter(Boolean)
  const spellLinks = character.spellsUsed
    .map((spellId) => spells.find((spell) => spell.id === spellId))
    .filter(Boolean)
  const courseLinks = character.coursesTaken
    .map((courseId) => courses.find((course) => course.id === courseId))
    .filter(Boolean)

  return (
    <div className="container-max section detail-pad">
      <Link
        to="/characters"
        className="inline-flex rounded-full border border-[#c4a867]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold"
        style={{ marginTop: '0.5rem' }}
      >
        Back to Characters
      </Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <img src={character.image} alt={character.name} className="h-96 w-full rounded-3xl object-cover" />
          <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4">
            <h2 className="text-2xl text-gold">{character.name}</h2>
            <p className="text-sm text-[#f5f0e3]/70">{character.house}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">{character.role}</p>
            <p className="mt-3 text-sm text-[#f5f0e3]/70">Blood status: {character.bloodStatus}</p>
          </div>
          {/* Actor section removed per request */}
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-6">
            <h3 className="text-xl text-gold">Biography</h3>
            <div className="mt-3 space-y-3 text-sm text-[#f5f0e3]/70">
              {character.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4">
              <h3 className="text-lg text-gold">Family</h3>
              <p className="mt-2 text-sm text-[#f5f0e3]/70">Father: {character.family.father}</p>
              <p className="text-sm text-[#f5f0e3]/70">Mother: {character.family.mother}</p>
              <p className="text-sm text-[#f5f0e3]/70">Siblings: {character.family.siblings}</p>
            </div>
            <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4">
              <h3 className="text-lg text-gold">Magic Facts</h3>
              <p className="mt-2 text-sm text-[#f5f0e3]/70">Wand: {character.wand}</p>
              <p className="text-sm text-[#f5f0e3]/70">Patronus: {character.patronus}</p>
              <p className="text-sm text-[#f5f0e3]/70">Boggart: {character.boggart}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4">
            <h3 className="text-lg text-gold">Timeline</h3>
            <p className="mt-2 text-sm text-[#f5f0e3]/70">First appearance: {character.firstAppearance}</p>
            <p className="text-sm text-[#f5f0e3]/70">Lived in: {character.locations.join(', ')}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4">
              <h3 className="text-lg text-gold">Relationships</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Friends</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {friendLinks.map((friend) => (
                  <Link
                    key={friend.id}
                    to={`/characters/${friend.id}`}
                    className="rounded-full border border-[#c4a867]/40 px-3 py-1 text-xs text-gold"
                  >
                    {friend.name}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Enemies</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {enemyLinks.map((enemy) => (
                  <Link
                    key={enemy.id}
                    to={`/characters/${enemy.id}`}
                    className="rounded-full border border-red-400/40 px-3 py-1 text-xs text-red-300"
                  >
                    {enemy.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4">
              <h3 className="text-lg text-gold">Related Content</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Spells Used</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {spellLinks.map((spell) => (
                  <Link
                    key={spell.id}
                    to={`/spells?highlight=${spell.id}`}
                    className="rounded-full border border-[#c4a867]/40 px-3 py-1 text-xs text-gold"
                  >
                    {spell.name}
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Courses Taken</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {courseLinks.map((course) => (
                  <Link
                    key={course.id}
                    to={`/courses?highlight=${course.id}`}
                    className="rounded-full border border-[#c4a867]/40 px-3 py-1 text-xs text-gold"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail


