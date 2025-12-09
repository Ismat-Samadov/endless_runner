import WordGuessGame from '@/components/WordGuessGame'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <h1 className="text-6xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Word Guess
          </h1>
          <p className="text-slate-400 text-lg">
            Guess the 5-letter word in 6 tries
          </p>
          <div className="flex gap-4 justify-center mt-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-correct rounded border border-green-600"></div>
              <span>Correct</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-present rounded border border-yellow-600"></div>
              <span>Wrong spot</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-absent rounded border border-gray-700"></div>
              <span>Not in word</span>
            </div>
          </div>
        </div>

        {/* Game */}
        <WordGuessGame />
      </div>
    </main>
  )
}
