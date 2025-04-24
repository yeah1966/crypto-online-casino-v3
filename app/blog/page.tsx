export default function BlogPage() {
  return (
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full">
          <section className="w-full px-4 py-12 md:py-20 lg:py-28 text-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-extrabold neon-text mb-4">🎲 Casino Crypto Blog</h1>
              <p className="text-lg md:text-xl text-white/90">Read our latest posts on crypto gambling, bonuses, guides, and the future of decentralized casinos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <article className="bg-gradient-to-br from-purple-900 to-violet-700 p-6 rounded-2xl shadow-md hover:scale-105 transition">
                <h2 className="text-2xl font-bold mb-2">🪙 Top Crypto Tokens for Gambling in 2025</h2>
                <p className="text-white/90 mb-4">Which coins are fastest, cheapest, and most accepted in online crypto casinos?</p>
                <a href="/blog/top-crypto-tokens" className="text-yellow-400 hover:underline font-semibold">Read more →</a>
              </article>

              <article className="bg-gradient-to-br from-purple-900 to-violet-700 p-6 rounded-2xl shadow-md hover:scale-105 transition">
                <h2 className="text-2xl font-bold mb-2">🎰 How Crypto Casinos Stay Fair: Behind the Scenes</h2>
                <p className="text-white/90 mb-4">We reveal how provably fair systems actually work and how you can verify your game outcomes.</p>
                <a href="/blog/provably-fair" className="text-yellow-400 hover:underline font-semibold">Read more →</a>
              </article>

              <article className="bg-gradient-to-br from-purple-900 to-violet-700 p-6 rounded-2xl shadow-md hover:scale-105 transition">
                <h2 className="text-2xl font-bold mb-2">💸 Biggest Crypto Casino Jackpots Ever Won</h2>
                <p className="text-white/90 mb-4">Discover the wildest wins in crypto gambling history, from million-dollar spins to lucky streaks.</p>
                <a href="/blog/biggest-wins" className="text-yellow-400 hover:underline font-semibold">Read more →</a>
              </article>

              <article className="bg-gradient-to-br from-purple-900 to-violet-700 p-6 rounded-2xl shadow-md hover:scale-105 transition">
                <h2 className="text-2xl font-bold mb-2">📈 Crypto Gambling Trends: What's Hot in 2025?</h2>
                <p className="text-white/90 mb-4">From token rewards to NFT slot machines – we break down the most exciting trends in the crypto casino world.</p>
                <a href="/blog/trends-2025" className="text-yellow-400 hover:underline font-semibold">Read more →</a>
              </article>
            </div>

            {/* EXTRA FAQ SECTION FOR BLOG */}
            <div className="max-w-3xl mx-auto mt-20">
              <h2 className="text-3xl font-bold text-yellow-300 mb-8 text-center">🔎 Crypto Casino FAQ (Quick Answers)</h2>

              {/* Account & Privacy */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-pink-400 mb-3">🔐 Account & Privacy</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Do I need to verify my identity?</span>
                  <p className="text-white/90">Most crypto casinos don’t require KYC unless large withdrawals are made.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">Are crypto casinos anonymous?</span>
                  <p className="text-white/90">Many allow anonymous play using just an email and a crypto wallet.</p>
                </div>
              </div>

              {/* Deposits & Withdrawals */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-green-400 mb-3">💳 Deposits & Withdrawals</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Which cryptocurrencies can I use?</span>
                  <p className="text-white/90">Bitcoin, Ethereum, Litecoin, USDT, and more — varies per casino.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Are deposits instant?</span>
                  <p className="text-white/90">Usually yes — most crypto deposits are confirmed in seconds to minutes.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">How fast are withdrawals?</span>
                  <p className="text-white/90">Withdrawals with crypto can be processed instantly or within a few hours, depending on the casino.</p>
                </div>
              </div>

              {/* Games & Fairness */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-blue-400 mb-3">🎲 Games & Fairness</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Can I trust crypto casino games?</span>
                  <p className="text-white/90">Look for provably fair systems that let you verify results on the blockchain.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">What types of games are available?</span>
                  <p className="text-white/90">Slots, poker, blackjack, roulette, crash games, live dealers, and more.</p>
                </div>
              </div>

              {/* Bonuses & Promotions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-orange-400 mb-3">📈 Bonuses & Promotions</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Do crypto casinos offer welcome bonuses?</span>
                  <p className="text-white/90">Yes, many offer huge welcome packs up to 5 BTC or hundreds of free spins.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">What are wagering requirements?</span>
                  <p className="text-white/90">These are the conditions you must meet before you can withdraw bonus winnings.</p>
                </div>
              </div>

              {/* Legal & Regional */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-400 mb-3">🌍 Legal & Regional</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Is crypto gambling legal in my country?</span>
                  <p className="text-white/90">Gambling laws vary. Always check local regulations before playing.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">Can I play if I’m in the U.S./UK/etc.?</span>
                  <p className="text-white/90">Some casinos block restricted countries — use a VPN if permitted by the site.</p>
                </div>
              </div>

              {/* Mobile & Accessibility */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">📱 Mobile & Accessibility</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Can I play on mobile?</span>
                  <p className="text-white/90">Yes! Most crypto casinos are fully mobile-optimized.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">Do I need to install anything?</span>
                  <p className="text-white/90">No installation needed — play directly in your browser.</p>
                </div>
              </div>

              {/* New to Crypto */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-green-300 mb-3">🧠 New to Crypto?</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">What if I’ve never used crypto before?</span>
                  <p className="text-white/90">Don’t worry — most casinos guide you through setup, or check our <a href="/guides/getting-started" className="underline text-yellow-200">Getting Started Guide</a>.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">Which crypto wallet should I use?</span>
                  <p className="text-white/90">MetaMask, Trust Wallet, Ledger, Coinbase — see our <a href="/guides/crypto-payments-guide" className="underline text-yellow-200">Wallet Guide</a>.</p>
                </div>
              </div>

              {/* Security & Support */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-pink-300 mb-3">🛟 Security & Support</h3>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl mb-3">
                  <span className="font-bold text-yellow-200">Is my crypto safe on a casino site?</span>
                  <p className="text-white/90">Choose licensed and reputable casinos that use encryption and wallet separation.</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-violet-700 p-5 rounded-2xl">
                  <span className="font-bold text-yellow-200">What if I need help?</span>
                  <p className="text-white/90">Look for 24/7 live chat support or email options.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
