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
        return 'bg-correct border-2 border-emerald-400/50 text-white font-extrabold'
      case 'present':
        return 'bg-present border-2 border-amber-400/50 text-white font-extrabold'
      case 'absent':
        return 'bg-absent border-2 border-gray-600/50 text-white/90'
      case 'tbd':
        return 'glass border-2 border-blue-500/30 text-white font-bold shadow-lg shadow-blue-500/20'
      default:
        return 'glass border-2 border-white/10 text-transparent'
    }
  }

  return (
    <div
      className={`
        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
        flex items-center justify-center
        text-xl sm:text-2xl md:text-3xl
        font-bold uppercase rounded-xl
        ${getStyles()}
        ${animate && letter && state === 'tbd' ? 'tile-pop' : ''}
        ${animate && state !== 'tbd' && state !== 'empty' ? 'tile-flip' : ''}
        transition-all duration-300
        transform hover:scale-110 active:scale-95
        relative
        overflow-hidden
      `}
    >
      <div className="relative z-10">{letter}</div>
      {state !== 'empty' && state !== 'tbd' && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      )}
    </div>
  )
}
