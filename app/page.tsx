import WordGuessGame from '@/components/WordGuessGame'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-4 sm:py-8 px-3 sm:px-4 relative z-10">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-8 fade-in">
          <div className="mb-2 sm:mb-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-2 sm:mb-3
                           bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                           bg-clip-text text-transparent
                           drop-shadow-2xl
                           tracking-tight
                           animate-pulse-subtle">
              WORD GUESS
            </h1>
            <div className="h-1 w-24 sm:w-32 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>

          <p className="text-slate-300 text-sm sm:text-lg mb-4 sm:mb-6 font-medium">
            Guess the 5-letter word in 6 tries
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center text-xs sm:text-sm">
            <div className="glass rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-correct rounded-lg border-2 border-emerald-400/50 shadow-lg shadow-emerald-500/30"></div>
              <span className="text-slate-200 font-medium">Correct</span>
            </div>
            <div className="glass rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-present rounded-lg border-2 border-amber-400/50 shadow-lg shadow-amber-500/30"></div>
              <span className="text-slate-200 font-medium">Wrong spot</span>
            </div>
            <div className="glass rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-absent rounded-lg border-2 border-gray-600/50"></div>
              <span className="text-slate-200 font-medium">Not in word</span>
            </div>
          </div>
        </div>

        {/* Game */}
        <WordGuessGame />
      </div>

      {/* Decorative elements */}
      <div className="fixed top-10 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
    </main>
  )
}
