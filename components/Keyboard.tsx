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
    if (state === 'correct') return 'bg-correct border-green-600 shadow-lg shadow-green-900/30'
    if (state === 'present') return 'bg-present border-yellow-600 shadow-lg shadow-yellow-900/30'
    if (state === 'absent') return 'bg-slate-600 border-slate-700 shadow-md'
    return 'bg-slate-700 border-slate-600 shadow-lg hover:bg-slate-600'
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
    <div className="w-full max-w-2xl px-2">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="flex gap-1.5 justify-center mb-2">
          {row.map((key) => {
            const isSpecial = key === 'ENTER' || key === 'DELETE'
            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                disabled={disabled}
                className={`
                  ${isSpecial ? 'px-4 text-xs min-w-[60px]' : 'w-10 md:w-12'}
                  h-14 rounded-lg font-bold uppercase border-2
                  ${getKeyStyles(key)}
                  hover:scale-105 active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  transition-all duration-150
                  text-white
                `}
              >
                {key}
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
