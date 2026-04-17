export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white flex items-center justify-center px-6">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-3xl">
        
        {/* Header */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-8 shadow-2xl">
          
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs tracking-[0.3em] text-gray-400">
              CLUB LOBBY
            </div>
            <div className="text-green-400 text-xs">
              ● ONLINE
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            888 Poker Club
          </h1>

          <p className="mt-3 text-gray-400">
            Private ClubGG-style poker community. Daily cash games, tournaments, and VIP tables.
          </p>

          {/* Stats row (ClubGG feel) */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-center">
              <div className="text-green-400 font-bold">24/7</div>
              <div className="text-xs text-gray-500">Action</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-center">
              <div className="text-yellow-400 font-bold">Low</div>
              <div className="text-xs text-gray-500">Rake</div>
            </div>
            <div className="bg-black/40 border border-white/5 rounded-xl p-3 text-center">
              <div className="text-white font-bold">VIP</div>
              <div className="text-xs text-gray-500">Tables</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-3">
            <a
              href="#"
              className="flex-1 bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl text-center transition"
            >
              Join Club (Telegram)
            </a>
            <a
              href="#"
              className="px-5 py-3 border border-white/10 rounded-xl text-gray-300 hover:bg-white/5"
            >
              View Games
            </a>
          </div>
        </div>

        {/* Footer hint */}
        <div className="text-center mt-6 text-xs text-gray-600">
          Inspired by private club poker ecosystems
        </div>
      </div>
    </div>
  );
}
