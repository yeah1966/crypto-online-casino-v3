import Link from 'next/link';
import Image from 'next/image';

const casinos = [
  {
    name: 'BitStarz Casino',
    logo: '/logos/bitstarz.png',
    description: 'Fast withdrawals, excellent ETH support',
    href: 'https://b1t5t4rz.com/b2b7d0ed7',
  },
  {
    name: 'CryptoLoko Casino',
    logo: '/logos/cryptoloko.png',
    description: 'Fast ETH payouts and wild game selection',
    href: 'https://cryptolokolink.com/click/77/441/6060/1',
  },
  {
    name: 'Cloudbet',
    logo: '/logos/cloudbet.png',
    description: 'Long-standing platform with Ethereum sports betting',
    href: 'https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo',
  },
  {
    name: '7Bit Casino',
    logo: '/logos/7bit.png',
    description: 'Retro vibes, modern ETH support',
    href: 'https://www.7bitcasino.com/a/b8c1d2e3f4',
  },
  {
    name: 'WildVegas Casino',
    logo: '/logos/wildvegas.png',
    description: 'Smooth ETH deposits and flashy UX',
    href: 'https://www.wildvegaslinks.com/click/11/4315/15512/1',
  },
];

const stepIcons = [
  '🦊', // Wallet
  '💱', // Exchange
  '🎰', // Choose casino
  '💸', // Deposit
  '🎲', // Play
];

export default function BestEthereumCasinos() {
  return (
    <>
      {/* Hero Banner & Mascotte */}
      <div className="relative w-full max-w-4xl mx-auto mb-6">
        <Image
          src="/og/ethereum-casino-guide.png"
          alt="Ethereum Casino Guide Hero"
          width={1200}
          height={400}
          className="rounded-3xl w-full object-cover shadow-2xl border-4 border-yellow-300/40"
          priority
        />
        {/* Mascotte rechtsboven, alleen op desktop */}
        <div className="hidden md:block absolute top-0 right-0 -mt-10 mr-[-70px] z-20 group">
          <Image
            src="/favicon-512.png"
            alt="Crypto Casino Mascot with Ethereum logo"
            width={120}
            height={120}
            className="drop-shadow-xl group-hover:animate-bounce transition-transform duration-300"
          />
          {/* Ethereum logo in hand */}
          <div className="absolute right-2 bottom-2">
            <Image src="/icons/eth.svg" alt="Ethereum SVG icon" width={32} height={32} />
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <nav className="text-sm text-purple-200 mb-6 mt-4 ml-2">
        <ol className="list-reset flex">
          <li><Link href="/">Home</Link> <span className="mx-2">→</span></li>
          <li><Link href="/guides">Guides</Link> <span className="mx-2">→</span></li>
          <li className="text-yellow-400">Best Ethereum Casinos</li>
        </ol>
      </nav>

      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-4 flex flex-col md:flex-row md:justify-between items-center gap-2">
          <span className="flex-1 text-center md:text-left">Best Ethereum Casinos – Gamble with ETH in 2025</span>
          <Image src="/icons/eth.svg" alt="Ethereum SVG icon" width={44} height={44} className="inline-block mx-auto md:mx-0" />
        </h1>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Why Ethereum Casinos Are Gaining Popularity</h2>
          <p className="text-white/90 mb-4">
            Ethereum is one of the most widely used cryptocurrencies in the world, known for its speed, smart contract capabilities, and widespread adoption. In online gambling, Ethereum stands out for offering:
          </p>
          <ul className="ml-6 text-white/90 mt-2 space-y-1">
            <li className="flex items-center gap-2"><span className="text-yellow-400">⚡️</span> Fast and cheap transactions</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🔒</span> Enhanced privacy compared to fiat</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🦊</span> Easy access via MetaMask & wallets</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🎰</span> Support from top-tier crypto casinos</li>
          </ul> 
          <p className="text-white/80 mt-4">
            In this guide, we’ll explore the best Ethereum-friendly online casinos, what you need to know before playing, and how to get started.
          </p>
        </section>

        {/* Benefits */}
        <section id="eth-benefits" className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2 mb-12">
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Benefits of ETH Gambling</h2>
          <ul className="ml-6 text-white/90 mt-2 space-y-1">
            <li className="flex items-center gap-2"><span className="text-yellow-400">⚡️</span> Lightning-fast deposits and withdrawals</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🔒</span> Improved privacy and fewer restrictions</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">💸</span> Lower transaction fees than Bitcoin</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400">🎁</span> Access to exclusive ETH bonuses</li>
          </ul>
        </section>

        {/* Top Casinos */}
        <section id="casino-list" className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Top Ethereum Casinos to Try in 2025</h2>
          <div className="bg-purple-900/80 rounded-xl p-4 shadow-lg flex flex-col gap-4 mt-6">
            {casinos.map((casino, i) => (
              <div key={casino.name} className="flex items-center gap-4 bg-purple-800/60 rounded-lg p-3 hover:shadow-2xl transition-all">
                <Image src={casino.logo} alt={`${casino.name} logo`} width={48} height={48} className="rounded-full shadow-md bg-white/90" />
                <div className="flex-1">
                  <span className="font-bold text-white text-lg">{casino.name}</span>
                  <span className="block text-purple-200 text-sm">{casino.description}</span>
                </div>
                <a
                  href={casino.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-300 via-pink-400 to-red-400 text-black font-bold rounded-full px-4 py-2 text-base shadow-lg border-2 border-white/80 drop-shadow-xl hover:scale-110 hover:shadow-yellow-400/60 transition-all animate-pulse hover:animate-none focus:outline-none"
                  style={{ boxShadow: '0 0 12px 2px #facc15, 0 0 32px 4px #ec4899' }}
                >
                  <Image src="/icons/eth.svg" alt="Ethereum SVG icon" width={20} height={20} />
                  Play Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="rounded-2xl border border-yellow-400/30 bg-black/80 p-5 shadow-lg flex flex-col gap-2 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">Step-by-Step: From Wallet to Winnings</h2>
          <ol className="ml-6 text-white/90 mt-2 space-y-2">
            <li className="flex items-center gap-2"><span className="text-yellow-400 text-xl">🦊</span> Get an Ethereum wallet (e.g. MetaMask, Trust Wallet).</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400 text-xl">💱</span> Buy ETH via exchange or peer-to-peer.</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400 text-xl">🎰</span> Choose a casino from our list and register.</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400 text-xl">💸</span> Deposit ETH and claim your welcome bonus.</li>
            <li className="flex items-center gap-2"><span className="text-yellow-400 text-xl">🎲</span> Enjoy games — slots, tables, or sports betting.</li>
          </ol>
        </section>

        {/* Security Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Is it safe to gamble with Ethereum?</h2>
          <p className="text-white/80 mb-2">
            Most ETH casinos are provably fair, regulated offshore, and protect your funds with cold storage and SSL encryption. Still, always:
          </p>
          <ul className="ml-6 text-white/90 mt-2 space-y-1">
            <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Use strong passwords</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Enable 2FA where possible</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✅</span> Withdraw funds you don’t actively use</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="flex justify-center mt-8">
          <Link href="/crypto-casino-reviews" className="inline-block bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-black font-extrabold rounded-full px-8 py-4 text-lg shadow-lg border-4 border-white/80 drop-shadow-xl animate-pulse hover:scale-105 transition-all" >
            View All Crypto Casino Reviews
          </Link>
        </div>
      </main>
    </>
  );
}
