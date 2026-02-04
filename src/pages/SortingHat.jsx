import { useMemo, useState, useEffect } from 'react'
import { sortingHatQuestions } from '../data/sortingHatQuestions.js'
import { houses } from '../data/houses.js'

const initialScores = {
  Gryffindor: 0,
  Slytherin: 0,
  Ravenclaw: 0,
  Hufflepuff: 0,
}

function SortingHat() {
  const [current, setCurrent] = useState(0)
  const [scores, setScores] = useState(initialScores)
  const [result, setResult] = useState(null)
  const [lastResult, setLastResult] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('sorting-hat-result')
    if (stored) {
      setLastResult(JSON.parse(stored))
    }
  }, [])

  const handleAnswer = (answer) => {
    setScores((prev) => ({
      ...prev,
      [answer.house]: prev[answer.house] + answer.weight,
    }))
    if (current === sortingHatQuestions.length - 1) {
      const finalScores = {
        ...scores,
        [answer.house]: scores[answer.house] + answer.weight,
      }
      const houseName = Object.entries(finalScores).sort((a, b) => b[1] - a[1])[0][0]
      const houseData = houses.find((house) => house.name === houseName)
      const resultPayload = { house: houseName, traits: houseData?.traits || [] }
      setResult(resultPayload)
      localStorage.setItem('sorting-hat-result', JSON.stringify(resultPayload))
      setLastResult(resultPayload)
    } else {
      setCurrent((prev) => prev + 1)
    }
  }

  const resetQuiz = () => {
    setCurrent(0)
    setScores(initialScores)
    setResult(null)
  }

  const currentQuestion = sortingHatQuestions[current]
  const resultHouse = useMemo(() => houses.find((house) => house.name === result?.house), [result])

  return (
    <div className="container-max section">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Sorting Hat Quiz</h1>
        <p className="text-sm text-[#f5f0e3]/70">Answer the questions to discover your Hogwarts house.</p>
      </div>

      {result ? (
        <div className="rounded-3xl border border-[#c4a867]/20 bg-black/40 p-8 text-center">
          <h2 className="text-2xl text-gold">You belong to {result.house}</h2>
          <img
            src={resultHouse?.crest}
            alt={`${result.house} crest`}
            className="mx-auto mt-4 h-40 w-32 rounded-2xl object-cover"
          />
          <p className="mt-4 text-sm text-[#f5f0e3]/70">
            Your answers aligned most with {result.house}. Traits: {result.traits.join(', ')}.
          </p>
          <button
            onClick={resetQuiz}
            className="mt-6 rounded-full border border-[#c4a867]/40 px-6 py-2 text-xs uppercase tracking-[0.2em] text-gold"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="rounded-3xl border border-[#c4a867]/20 bg-black/40 p-8">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">
            <span>
              Question {current + 1} of {sortingHatQuestions.length}
            </span>
            {lastResult && <span>Last: {lastResult.house}</span>}
          </div>
          <h2 className="mt-4 text-2xl text-ivory">{currentQuestion.question}</h2>
          <div className="mt-6 grid gap-3">
            {currentQuestion.answers.map((answer) => (
              <button
                key={answer.text}
                onClick={() => handleAnswer(answer)}
                className="rounded-2xl border border-[#c4a867]/20 bg-black/30 p-4 text-left text-sm text-[#f5f0e3]/80 transition hover:border-[#c4a867]/60"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SortingHat


