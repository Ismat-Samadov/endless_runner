'use client'

interface TileProps {
  letter: string
  state: 'correct' | 'present' | 'absent' | 'empty' | 'tbd'
  animate?: boolean
}

export default function Tile({ letter, state, animate }: TileProps) {
  const getStyles = () => {
    switch (state) {
      case 'correct':
        return 'bg-correct border-2 border-green-600 shadow-lg shadow-green-900/50'
      case 'present':
        return 'bg-present border-2 border-yellow-600 shadow-lg shadow-yellow-900/50'
      case 'absent':
        return 'bg-absent border-2 border-gray-700 shadow-md'
      case 'tbd':
        return 'bg-slate-700/50 border-2 border-slate-500 shadow-inner backdrop-blur-sm'
      default:
        return 'bg-slate-800/30 border-2 border-slate-700/50 shadow-inner'
    }
  }

  return (
    <div
      className={`
        w-16 h-16 flex items-center justify-center text-3xl font-bold uppercase rounded-md
        ${getStyles()}
        ${animate && letter && state === 'tbd' ? 'tile-pop' : ''}
        ${animate && state !== 'tbd' && state !== 'empty' ? 'tile-flip' : ''}
        transition-all duration-200
        transform hover:scale-105
      `}
    >
      {letter}
    </div>
  )
}
