function QuizProgress({ current, total }) {
  const percentage = Math.round((current / total) * 100)
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">
        <span>
          Question {current} of {total}
        </span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10">
        <div className="h-2 rounded-full bg-[#c4a867]" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}

export default QuizProgress

