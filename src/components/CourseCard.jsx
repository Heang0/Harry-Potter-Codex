import { Link } from 'react-router-dom'

function CourseCard({ course, professor, highlighted }) {
  return (
    <div
      className={`rounded-2xl border p-4 transition ${
        highlighted ? 'border-[#c4a867] bg-[#1a1f2e]' : 'border-[#c4a867]/20 bg-black/40'
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-ivory">{course.name}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-gold">{course.yearLevel}</span>
      </div>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/50">{course.type}</p>
      <p className="mt-3 text-sm text-[#f5f0e3]/80">{course.description}</p>
      <p className="mt-3 text-sm text-[#f5f0e3]/70">
        Professor:{' '}
        {professor ? (
          <Link to={`/characters/${professor.id}`} className="text-gold">
            {professor.name}
          </Link>
        ) : (
          <span className="text-gold">TBA</span>
        )}
      </p>
      <ul className="mt-3 list-disc pl-5 text-sm text-[#f5f0e3]/70">
        {course.learn.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default CourseCard

