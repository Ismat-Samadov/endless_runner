'use client'

import { useState, useEffect } from 'react'
import Grid from './Grid'

const WORD_LIST = [
  'REACT', 'NEXT', 'CLOUD', 'BUILD', 'MAGIC', 'SPARK', 'QUICK', 'WORLD',
  'BRAVE', 'SMILE', 'PEACE', 'HAPPY', 'CLEAN', 'DREAM', 'LIGHT', 'POWER',
  'FRESH', 'SMART', 'FOCUS', 'SHINE', 'GRACE', 'TRUST', 'VALUE', 'NOBLE'
]

const WORD_LENGTH = 5
const MAX_GUESSES = 6

export default function WordGuessGame() {
  const [answer, setAnswer] = useState('')
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [gameState, setGameState] = useState<'playing' | 'won' | 'lost'>('playing')
  const [shake, setShake] = useState(false)

  // Initialize game
  useEffect(() => {
    const randomWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    setAnswer(randomWord)
  }, [])

  // Handle keyboard input
  useEffect(() => {
    if (gameState !== 'playing') return

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSubmit()
      } else if (e.key === 'Backspace') {
        handleDelete()
      } else if (/^[A-Za-z]$/.test(e.key)) {
        handleLetter(e.key.toUpperCase())
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentGuess, gameState, guesses])

  const handleLetter = (letter: string) => {
    if (currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(prev => prev + letter)
    }
  }

  const handleDelete = () => {
    setCurrentGuess(prev => prev.slice(0, -1))
  }

  const handleSubmit = () => {
    if (currentGuess.length !== WORD_LENGTH) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }

    const newGuesses = [...guesses, currentGuess]
    setGuesses(newGuesses)

    // Check win/loss conditions
    if (currentGuess === answer) {
      setGameState('won')
    } else if (newGuesses.length === MAX_GUESSES) {
      setGameState('lost')
    }

    setCurrentGuess('')
  }

  const resetGame = () => {
    const randomWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    setAnswer(randomWord)
    setGuesses([])
    setCurrentGuess('')
    setGameState('playing')
    setShake(false)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Grid
        guesses={guesses}
        currentGuess={currentGuess}
        answer={answer}
        maxGuesses={MAX_GUESSES}
        wordLength={WORD_LENGTH}
        shake={shake}
      />

      {/* Instructions */}
      {gameState === 'playing' && (
        <div className="text-center mt-4 mb-2 fade-in">
          <p className="text-slate-400 text-sm sm:text-base font-medium">
            Type your guess and press <span className="glass px-2 py-1 rounded-md text-blue-400 border border-blue-400/30">Enter</span>
          </p>
        </div>
      )}

      {gameState !== 'playing' && (
        <div className="text-center mt-4 sm:mt-6 fade-in">
          <div className="glass rounded-3xl p-6 sm:p-8 border-2 border-white/10 shadow-2xl mb-6">
            {gameState === 'won' ? (
              <div>
                <div className="text-6xl sm:text-7xl mb-3 animate-bounce">🎉</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-3
                                bg-gradient-to-r from-green-400 to-emerald-500
                                bg-clip-text text-transparent
                                drop-shadow-xl">
                  VICTORY!
                </div>
                <div className="text-base sm:text-lg text-slate-300 mb-4">
                  You guessed the word in{' '}
                  <span className="text-green-400 font-bold text-xl sm:text-2xl">
                    {guesses.length}
                  </span>{' '}
                  {guesses.length === 1 ? 'try' : 'tries'}!
                </div>
                <div className="flex gap-1 justify-center mb-4">
                  {Array.from({ length: guesses.length }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-500/50"></div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-6xl sm:text-7xl mb-3">💔</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-3
                                bg-gradient-to-r from-red-400 to-pink-500
                                bg-clip-text text-transparent
                                drop-shadow-xl">
                  GAME OVER
                </div>
                <div className="text-base sm:text-lg text-slate-300 mb-2">
                  The word was
                </div>
                <div className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500
                                border-2 border-purple-400/50 shadow-lg shadow-purple-500/30 mb-4">
                  <span className="text-white font-black text-2xl sm:text-3xl md:text-4xl tracking-wider">
                    {answer}
                  </span>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={resetGame}
            className="glass border-2 border-blue-400/50
                       bg-gradient-to-r from-blue-500/20 to-purple-600/20
                       hover:from-blue-500/30 hover:to-purple-600/30
                       text-white font-bold
                       py-3 sm:py-4 px-8 sm:px-12
                       rounded-2xl
                       shadow-xl hover:shadow-2xl
                       shadow-blue-500/20 hover:shadow-blue-500/40
                       transform hover:scale-105 active:scale-95
                       transition-all duration-300
                       text-base sm:text-lg
                       pulse-glow
                       relative overflow-hidden group"
          >
            <div className="relative z-10 flex items-center gap-2 justify-center">
              <span>Play Again</span>
              <span className="text-xl">🎮</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      )}
    </div>
  )
}
