import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { courses } from '../data/courses.js'
import { characters } from '../data/characters.js'
import SearchBar from '../components/SearchBar.jsx'
import CourseCard from '../components/CourseCard.jsx'

function Courses() {
  const [searchParams] = useSearchParams()
  const highlightId = searchParams.get('highlight')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return courses.filter((course) => course.name.toLowerCase().includes(search.toLowerCase()))
  }, [search])

  const grouped = useMemo(() => {
    return {
      Core: filtered.filter((course) => course.type === 'Core'),
      Elective: filtered.filter((course) => course.type === 'Elective'),
    }
  }, [filtered])

  const getProfessor = (professorId) => characters.find((character) => character.id === professorId)

  return (
    <div className="container-max section">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Hogwarts Courses</h1>
        <p className="text-sm text-[#f5f0e3]/70">Core curriculum and elective specialties.</p>
      </div>
      <SearchBar value={search} onChange={setSearch} placeholder="Search courses..." />
      <div className="mt-8 space-y-10">
        {Object.entries(grouped).map(([group, items]) => (
          <section key={group} className="space-y-4">
            <h2 className="text-2xl text-gold">{group}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {items.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  professor={getProfessor(course.professor)}
                  highlighted={highlightId === course.id}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Courses


