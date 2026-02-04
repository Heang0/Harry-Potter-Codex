import { useMemo, useState } from 'react'
import { quizQuestions, quizCategories } from '../data/quizQuestions.js'
import QuizQuestion from '../components/QuizQuestion.jsx'
import QuizProgress from '../components/QuizProgress.jsx'
import QuizResults from '../components/QuizResults.jsx'

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

function Quiz() {
  const [category, setCategory] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuiz, setCurrentQuiz] = useState([])
  const [answers, setAnswers] = useState([])
  const [showResults, setShowResults] = useState(false)

  const startQuiz = (selectedCategory) => {
    const pool =
      selectedCategory === 'All'
        ? quizQuestions
        : quizQuestions.filter((question) => question.category === selectedCategory)
    const picks = shuffle(pool).slice(0, 10)
    setCategory(selectedCategory)
    setCurrentQuiz(picks)
    setCurrentIndex(0)
    setAnswers([])
    setShowResults(false)
  }

  const handleAnswer = (answerIndex) => {
    const current = currentQuiz[currentIndex]
    setAnswers((prev) => [...prev, { id: current.id, answerIndex }])
    if (currentIndex === currentQuiz.length - 1) {
      setShowResults(true)
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const score = useMemo(() => {
    return answers.reduce((total, answer) => {
      const question = currentQuiz.find((item) => item.id === answer.id)
      if (!question) return total
      return total + (question.answer === answer.answerIndex ? 1 : 0)
    }, 0)
  }, [answers, currentQuiz])

  const review = useMemo(() => {
    return answers.map((answer) => {
      const question = currentQuiz.find((item) => item.id === answer.id)
      return {
        id: answer.id,
        question: question.question,
        userAnswer: question.options[answer.answerIndex],
        correctAnswer: question.options[question.answer],
      }
    })
  }, [answers, currentQuiz])

  return (
    <div className="container-max section">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl text-gold">Knowledge Quiz</h1>
        <p className="text-sm text-[#f5f0e3]/70">Pick a category and answer 10 questions.</p>
      </div>

      {currentQuiz.length === 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {['All', ...quizCategories].map((item) => (
            <button
              key={item}
              onClick={() => startQuiz(item)}
              className="rounded-2xl border border-[#c4a867]/20 bg-black/40 p-6 text-left text-ivory transition hover:border-[#c4a867]/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e3]/60">Category</p>
              <h2 className="mt-2 text-xl text-gold">{item}</h2>
            </button>
          ))}
        </div>
      ) : showResults ? (
        <QuizResults score={score} total={currentQuiz.length} onReset={() => setCurrentQuiz([])} review={review} />
      ) : (
        <div className="space-y-6">
          <QuizProgress current={currentIndex + 1} total={currentQuiz.length} />
          <QuizQuestion question={currentQuiz[currentIndex]} onAnswer={handleAnswer} />
        </div>
      )}
    </div>
  )
}

export default Quiz


