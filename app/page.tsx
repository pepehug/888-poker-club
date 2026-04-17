export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        
        <h1 className="text-5xl font-bold tracking-tight">
          888 Poker Club
        </h1>

        <p className="mt-4 text-gray-300 text-lg">
          Private poker community • ClubGG games • Weekly action
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://t.me/yourlink"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:opacity-80 transition"
          >
            Join Telegram
          </a>

          <a
            href="#about"
            className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition"
          >
            Learn More
          </a>
        </div>

        <div className="mt-10 text-xs text-gray-500">
          High-stakes private tables • Invite only
        </div>

      </div>
    </main>
  );
}
