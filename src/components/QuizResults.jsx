function QuizResults({ score, total, onReset, review }) {
  return (
    <div className="space-y-6 text-center">
      <h2 className="text-3xl text-gold">Your Score</h2>
      <p className="text-xl text-ivory">
        {score} / {total}
      </p>
      <button
        onClick={onReset}
        className="rounded-full border border-[#c4a867]/40 px-6 py-2 text-xs uppercase tracking-[0.2em] text-gold"
      >
        Try Again
      </button>
      <div className="space-y-3 text-left">
        {review.map((item) => (
          <div key={item.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm text-ivory">{item.question}</p>
            <p className="mt-2 text-xs text-[#f5f0e3]/60">Your answer: {item.userAnswer}</p>
            <p className="text-xs text-gold">Correct: {item.correctAnswer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizResults

