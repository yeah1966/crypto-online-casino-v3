import Link from 'next/link';
import Image from 'next/image';

const dogeCasinos = [
  {
    name: 'BitStarz Casino',
    logo: '/logos/bitstarz.png',
    description: '⚡ Fast DOGE payouts and wide crypto support',
    href: '#', // TODO: Fill with correct affiliate link
  },
  {
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    description: '🎯 Long-standing sportsbook with DOGE support',
    href: '#',
  },
  {
    name: '7Bit Casino',
    logo: '/logos/7bit.png',
    description: '🌀 Retro vibes with full DOGE integration',
    href: '#',
  },
  {
    name: 'Crypto Loko',
    logo: '/logos/cryptoloko.png',
    description: '📱 Mobile-optimized fun with meme-level branding',
    href: '#',
  },
  {
    name: 'WildVegas Casino',
    logo: '/logos/wildvegas.png',
    description: '🎰 Flashy UI and smooth DOGE onboarding',
    href: '#',
  },
];

const stepIcons = ['👛', '💵', '🏆', '💸', '🎰'];

export default function DogecoinCasinoGuide() {
  return (
    <>

      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/dogecoin-casino-guide.png"
          alt="Dogecoin Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-orange-300/40"
          priority
        />
        {/* Mascot top right, only on desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-8 mr-[-36px] z-30">
          <Image
            src="/favicon-512.png"
            alt="Dogecoin Mascot"
            width={82}
            height={82}
            className="drop-shadow-2xl"
          />
          {/* DOGE logo in hand */}
          <div className="absolute right-1 bottom-1">
            <Image src="/icons/doge.svg" alt="DOGE SVG icon" width={26} height={26} />
          </div>
        </div>
      </div>
      {/* Breadcrumbs */}
      <nav className="text-sm text-orange-200 mb-6 mt-4 ml-2" aria-label="breadcrumb">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-orange-400">Dogecoin Casinos</li>
        </ol>
      </nav>
      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-orange-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">🟠 BEST DOGE CASINOS – PLAY WITH DOGECOIN IN 2025</span>
          <Image src="/icons/doge.svg" alt="DOGE SVG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-orange-400 mb-2 uppercase tracking-wide">Why Dogecoin Casinos Are Surprisingly Popular</h2>
          <p className="text-white/90 mb-2">
            Dogecoin (DOGE) started as a meme but has grown into a widely accepted cryptocurrency — even in the online gambling world. In 2025, DOGE casinos combine fun, speed, and crypto convenience.
          </p>
          <ul className="mb-4 ml-1 md:ml-4 space-y-1">
            <li className="flex items-center gap-2 text-white/90"><span className="text-orange-400 text-lg">🐕</span> <span className="font-semibold">Launched as a joke, now accepted at top casinos</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-orange-400 text-lg">⚡</span> <span className="font-semibold">Fast and low-cost transactions on the Dogecoin network</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-orange-400 text-lg">💬</span> <span className="font-semibold">Strong community and meme culture appeal</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-orange-400 text-lg">🎁</span> <span className="font-semibold">Often featured in fun, themed bonuses</span></li>
            <li className="flex items-center gap-2 text-white/90"><span className="text-orange-400 text-lg">📲</span> <span className="font-semibold">Works with Trust Wallet, MetaMask (via wrappers), and more</span></li>
          </ul>
          <p className="text-white/80 mt-2">This guide highlights the top DOGE-friendly casinos where you can play with Dogecoin today.</p>
        </section>
        {/* Benefits of DOGE Gambling */}
        <section className="mb-8 rounded-2xl border border-orange-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide">Benefits of Dogecoin Gambling</h2>
          <ul className="list-disc ml-6 text-white/90 space-y-1">
            <li className="flex items-center gap-2"><span className="text-orange-400">🚀</span> Quick deposits and withdrawals</li>
            <li className="flex items-center gap-2"><span className="text-orange-400">💰</span> Very low transaction fees</li>
            <li className="flex items-center gap-2"><span className="text-orange-400">😎</span> Fun, lighthearted branding — perfect for casual players</li>
            <li className="flex items-center gap-2"><span className="text-orange-400">🌍</span> Global access with no banking restrictions</li>
            <li className="flex items-center gap-2"><span className="text-orange-400">📈</span> Increasing support across crypto-friendly platforms</li>
          </ul>
        </section>
        <section id="casino-list" className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-orange-400 uppercase tracking-wide">Top DOGE Casinos to Try in 2025</h2>
          <div className="bg-orange-900/60 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6">
            {dogeCasinos.map((casino, i) => (
              <div key={casino.name} className="flex items-center gap-4 bg-orange-800/40 rounded-lg p-3 hover:shadow-2xl transition-all">
                <Image src={casino.logo} alt={`${casino.name} logo`} width={48} height={48} className="rounded-full shadow-md bg-white/90" />
                <div className="flex-1">
                  <span className="font-bold text-white text-lg">{casino.name}</span>
                  <span className="block text-orange-200 text-sm">{casino.description}</span>
                </div>
                <a
                  href={casino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 text-black font-bold rounded-full px-4 py-2 text-base shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-110 hover:shadow-orange-400/60 transition-all animate-pulse hover:animate-none focus:outline-none"
                  style={{ boxShadow: '0 0 12px 2px #fdba74, 0 0 32px 4px #fb923c' }}
                >
                  <Image src="/icons/doge.svg" alt="DOGE SVG icon" width={20} height={20} />
                  Play Now
                </a>
              </div>
            ))}
          </div>
        </section>
        {/* Step-by-step block */}
        <section className="mb-10 rounded-2xl border border-orange-400/30 bg-black/80 p-5 shadow-lg">
          <h2 className="text-xl font-bold text-orange-400 mb-4 uppercase tracking-wide">Step-by-Step: From Wallet to Wager</h2>
          <ol className="list-decimal ml-6 text-white/90 mb-2 space-y-1">
            <li><span className="text-orange-400">👛</span> Get a DOGE-compatible wallet (e.g., Trust Wallet, MetaMask w/ wrapper, Atomic Wallet)</li>
            <li><span className="text-orange-400">💵</span> Buy DOGE on an exchange like Binance or Kraken</li>
            <li><span className="text-orange-400">🏆</span> Pick a Dogecoin casino from our trusted list</li>
            <li><span className="text-orange-400">💸</span> Deposit DOGE and grab your welcome bonus</li>
            <li><span className="text-orange-400">🎰</span> Start playing slots, tables, or live dealer games</li>
          </ol>
        </section>
        {/* Safety block */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">Is Dogecoin Safe for Gambling?</h2>
          <ul className="list-disc ml-6 text-white/90 mb-2">
            <li>✅ Use offshore-licensed casinos listed on our site</li>
            <li>✅ Enable 2FA and store wallet recovery keys safely</li>
            <li>✅ Avoid unknown gambling sites</li>
            <li>✅ Don’t leave large DOGE balances in hot wallets</li>
          </ul>
        </section>
        {/* CTA + Internal links */}
        <div className="flex justify-center mt-10 mb-8">
          <a
            href="/crypto-casino-reviews"
            className="font-bold text-lg px-7 py-3 rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-105 hover:shadow-orange-400/60 transition-all focus:outline-none"
            style={{ boxShadow: '0 0 12px 2px #fdba74, 0 0 32px 4px #fb923c' }}
          >
            View All Crypto Casino Reviews
          </a>
        </div>
        <div className="mb-12 mt-6 flex flex-col md:flex-row gap-3 justify-center items-center">
          <span className="text-white/80 font-semibold">See also:</span>
          <Link href="/guides/bitcoin-casinos" className="text-yellow-300 hover:underline font-bold">Bitcoin Casinos</Link>
          <Link href="/guides/best-ethereum-casinos" className="text-purple-300 hover:underline font-bold">Ethereum Casinos</Link>
          <Link href="/guides/best-litecoin-casinos" className="text-blue-300 hover:underline font-bold">Litecoin Casinos</Link>
          <Link href="/guides/tether-casino-guide" className="text-green-300 hover:underline font-bold">Tether Casinos</Link>
          <Link href="/guides/binance-casino-guide" className="text-yellow-400 hover:underline font-bold">Binance Casinos</Link>
          <Link href="/guides/usdc-casino-guide" className="text-purple-400 hover:underline font-bold">USDC Casinos</Link>
        </div>
      </main>
    </>
  );
}
