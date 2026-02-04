function QuizQuestion({ question, onAnswer }) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-ivory">{question.question}</h3>
      <div className="grid gap-3">
        {question.options.map((option, index) => (
          <button
            key={option}
            onClick={() => onAnswer(index)}
            className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-4 text-left text-sm text-[#f5f0e3]/80 transition hover:border-[#c4a867]/60"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuizQuestion

