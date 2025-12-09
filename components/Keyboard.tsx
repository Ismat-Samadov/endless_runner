'use client'

type LetterState = 'correct' | 'present' | 'absent' | 'empty' | 'tbd'

interface KeyboardProps {
  onKeyPress: (key: string) => void
  onDelete: () => void
  onSubmit: () => void
  letterStates: Record<string, LetterState>
  disabled: boolean
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE'],
]

export default function Keyboard({ onKeyPress, onDelete, onSubmit, letterStates, disabled }: KeyboardProps) {
  const getKeyStyles = (key: string) => {
    const state = letterStates[key]
    if (state === 'correct') return 'bg-correct border-emerald-400/50'
    if (state === 'present') return 'bg-present border-amber-400/50'
    if (state === 'absent') return 'bg-absent border-gray-600/50'
    return 'glass border-white/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20'
  }

  const handleClick = (key: string) => {
    if (disabled) return

    if (key === 'ENTER') {
      onSubmit()
    } else if (key === 'DELETE') {
      onDelete()
    } else {
      onKeyPress(key)
    }
  }

  return (
    <div className="w-full max-w-2xl px-2 slide-up">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="flex gap-1 sm:gap-1.5 justify-center mb-1.5 sm:mb-2">
          {row.map((key) => {
            const isSpecial = key === 'ENTER' || key === 'DELETE'
            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                disabled={disabled}
                className={`
                  ${isSpecial ? 'px-2 sm:px-4 text-[10px] sm:text-xs min-w-[50px] sm:min-w-[65px]' : 'w-7 sm:w-10 md:w-11'}
                  h-12 sm:h-14 md:h-16
                  rounded-lg font-bold uppercase border-2
                  ${getKeyStyles(key)}
                  hover:scale-105 active:scale-95
                  disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
                  transition-all duration-200
                  text-white text-xs sm:text-sm md:text-base
                  shadow-lg
                  relative overflow-hidden
                  select-none
                `}
              >
                <div className="relative z-10">{key}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
