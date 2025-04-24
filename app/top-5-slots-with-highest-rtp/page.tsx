import Head from 'next/head';
import Link from 'next/link';

export default function TopRtpSlotsPage() {
  return (
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full">
          <Head>
            <title>Top 5 Crypto Slots with the Highest RTP – 2025 Guide</title>
            <meta
              name="description"
              content="Play smart with our handpicked list of the highest RTP crypto slots in 2025. Discover which games give you the best returns and where to play them."
            />
          </Head>
          <h1 className="text-4xl font-extrabold text-yellow-300 text-center mb-6">
            Top 5 Crypto Slots with the Highest RTP – 2025
          </h1>
          <p className="text-lg text-white/90 text-center mb-10">
            <strong>RTP</strong> (Return to Player) tells you how much a slot pays back on average.
            The higher the RTP, the better your chances! Every slot here has an RTP above{' '}
            <span className="text-green-400 font-bold">97%</span>.
          </p>
          <div className="grid gap-6">
            {slots.map((slot) => (
              <SlotCard key={slot.name} {...slot} />
            ))}
          </div>
          <div className="mt-12 text-white/90 text-sm">
            <h2 className="text-2xl font-bold mb-2 text-green-500">What is RTP?</h2>
            <p className="mb-2">
              RTP stands for <strong>Return to Player</strong>. It’s a percentage that tells you how much a slot game pays back over time. The higher the RTP, the better the odds for the player.
            </p>
            <p className="mb-2">
              If a slot has an RTP of 98%, it means that – on average – you’ll get €98 back for every €100 you wager.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const slots = [
  {
    name: 'Mega Joker',
    rtp: '99%',
    volatility: 'High',
    theme: 'Classic Fruit',
    emoji: '🎰',
    img: '/slots/mega-joker.png',
    desc: 'A classic NetEnt slot with extremely high RTP and Supermeter mode.',
    casinos: ['BitStarz', '7Bit Casino'],
  },
  {
    name: 'Ugga Bugga',
    rtp: '99.07%',
    volatility: 'Low',
    theme: 'Jungle',
    emoji: '🦍',
    img: '/slots/ugga-bugga.png',
    desc: 'This Playtech slot offers a unique gameplay style and the highest RTP known.',
    casinos: ['betplay', 'Cloudbet'],
  },
  {
    name: '1429 Uncharted Seas',
    rtp: '98.6%',
    volatility: 'Low',
    theme: 'Exploration',
    emoji: '🧭',
    img: '/slots/1429-uncharted.png',
    desc: 'Beautifully drawn graphics and a high RTP make this Thunderkick slot stand out.',
    casinos: ['betplay', 'Crypto Loko'],
  },
  {
    name: 'Blood Suckers',
    rtp: '98%',
    volatility: 'Low',
    theme: 'Vampire',
    emoji: '🧛',
    img: '/slots/bloodsuckers.png',
    desc: 'Vampire-themed fun with spooky wins and a famously high RTP.',
    casinos: ['Dreams Casino', 'WildVegas'],
  },
  {
    name: 'Jackpot 6000',
    rtp: '98.8%',
    volatility: 'High',
    theme: 'Retro Vegas',
    emoji: '🎲',
    img: '/slots/jackpot-6000.png',
    desc: 'A retro-style NetEnt game that mimics the old-school slot machines.',
    casinos: ['SlotsOfVegas', 'CoinPoker'],
  },
];

function SlotCard({
  name,
  rtp,
  volatility,
  theme,
  emoji,
  img,
  desc,
  casinos,
}: {
  name: string;
  rtp: string;
  volatility: string;
  theme: string;
  emoji: string;
  img: string;
  desc: string;
  casinos: string[];
}) {
  return (
    <div className="rounded-xl border border-purple-600 bg-black/40 p-5 shadow-lg flex flex-col md:flex-row gap-4">
      <div className="flex flex-col items-center md:items-start w-28">
        {/* <span className="text-3xl">{emoji}</span> */}
        <img src={img} alt={name} width={64} height={64} className="rounded-lg mt-2 border border-white/60" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold text-yellow-300 mb-1">{name}</h2>
        <div className="flex flex-wrap gap-2 text-sm mb-2">
          <span className="bg-green-500/80 text-black font-bold px-2 py-1 rounded-full">RTP: {rtp}</span>
          <span className="bg-pink-500/80 text-white px-2 py-1 rounded-full">Volatility: {volatility}</span>
          <span className="bg-purple-500/80 text-white px-2 py-1 rounded-full">Theme: {theme}</span>
        </div>
        <p className="text-white/90 text-sm mb-2">{desc}</p>
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-green-300 font-bold text-xs">✅ Available at:</span>
          {casinos.map((casino) => (
            <Link key={casino} href={`/crypto-casino-reviews/${casino.toLowerCase().replace(/\s+/g, '-')}`} className="underline text-yellow-200 hover:text-pink-400 text-xs font-bold">
              {casino}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
