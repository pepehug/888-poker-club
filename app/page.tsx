export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* glowing background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/20 blur-[120px]" />
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[140px]" />
      </div>

      {/* content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">

        <div className="text-center max-w-2xl">

          {/* badge */}
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest text-gray-300 mb-6">
            PRIVATE CASINO CLUB • CLUBGG NETWORK
          </div>

          {/* main title */}
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              888 Poker
            </span>
            <br />
            Club
          </h1>

          {/* subtitle */}
          <p className="mt-6 text-gray-300 text-lg md:text-xl">
            High-stakes private poker games. Weekly action. Elite players only.
          </p>

          {/* glass card */}
          <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl">
            <p className="text-sm text-gray-300">
              Join our exclusive Telegram to access private ClubGG tables, promos, and weekly high-stakes games.
            </p>
          </div>

          {/* buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://t.me/yourlink"
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-red-500 text-black hover:scale-105 transition transform shadow-lg shadow-red-500/20"
            >
              Join Telegram
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition"
            >
              Learn More
            </a>

          </div>

          {/* footer line */}
          <div className="mt-10 text-xs text-gray-500 tracking-widest">
            VIP TABLES • FAST PAYOUTS • TRUSTED COMMUNITY
          </div>

        </div>
      </div>

    </main>
  );
}
