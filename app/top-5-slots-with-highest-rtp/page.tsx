import Head from 'next/head';
import Link from 'next/link';

export default function TopRtpSlotsPage() {
  return (
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/75 backdrop-blur-lg rounded-3xl p-6 md:p-12 shadow-2xl max-w-5xl mx-auto w-full border-2 border-yellow-400/20">
          <Head>
            <title>Top 5 Crypto Slots with the Highest RTP – 2025 Guide</title>
            <meta
              name="description"
              content="Play smart with our handpicked list of the highest RTP crypto slots in 2025. Discover which games give you the best returns and where to play them."
            />
          </Head>
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-300 text-center mb-6 drop-shadow-lg">
            🎰 Top 5 Crypto Slots with the <span className="text-green-400">Highest RTP</span> – 2025
          </h1>
          <p className="text-lg text-white/90 text-center mb-10">
            <strong>RTP</strong> (Return to Player) tells you how much a slot pays back on average.
            The higher the RTP, the better your chances! Every slot here has an RTP above{' '}
            <span className="text-green-400 font-bold">97%</span>.
          </p>
          <div className="grid gap-8">
            {slots.map((slot, idx) => (
              <SlotCard key={slot.name || idx} {...slot} index={idx + 1} />
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
  index,
}: {
  name: string;
  rtp: string;
  volatility: string;
  theme: string;
  emoji: string;
  img: string;
  desc: string;
  casinos: string[];
  index: number;
}) {
  return (
    <div className="rounded-2xl border-2 border-purple-700 bg-gradient-to-br from-purple-900/80 via-black/80 to-yellow-900/60 p-6 shadow-2xl flex flex-col md:flex-row gap-5 hover:scale-[1.015] transition-transform">
      <div className="flex flex-col items-center md:items-start w-32 relative">
        <span className="absolute -top-4 -left-4 bg-yellow-300 text-purple-900 font-extrabold px-4 py-1 rounded-full shadow-lg text-lg border-2 border-yellow-500">
          #{index}
        </span>
        <img src={img} alt={name} width={72} height={72} className="rounded-xl mt-2 border-2 border-yellow-400/70 shadow-lg" />
        <span className="text-3xl mt-2">{emoji}</span>
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-yellow-200 mb-1">{name}</h2>
        <div className="flex flex-wrap gap-2 text-sm mb-2">
          <span className="bg-green-400/90 text-black font-bold px-2 py-1 rounded-full shadow">RTP: {rtp}</span>
          <span className="bg-pink-500/80 text-white px-2 py-1 rounded-full shadow">Volatility: {volatility}</span>
          <span className="bg-purple-600/80 text-white px-2 py-1 rounded-full shadow">Theme: {theme}</span>
        </div>
        <p className="text-white/90 text-base mb-2">{desc}</p>
        {name === 'Mega Joker' && (
          <p className="text-white/70 text-sm mb-2 italic">
            Mega Joker is renowned for its classic fruit machine experience and extremely high RTP. The Supermeter mode adds an extra layer of excitement, allowing players to gamble their winnings for even bigger rewards. Its simple gameplay and retro design make it a favorite among both new and seasoned slot enthusiasts.
          </p>
        )}
        {name === 'Ugga Bugga' && (
          <p className="text-white/70 text-sm mb-2 italic">
            Ugga Bugga stands out due to its unique gameplay mechanics, where players can hold reels and strategize each spin. This Playtech slot is famous for having one of the highest RTPs in the industry. The jungle theme and innovative features provide a refreshing twist compared to traditional slots.
          </p>
        )}
        {name === '1429 Uncharted Seas' && (
          <p className="text-white/70 text-sm mb-2 italic">
            1429 Uncharted Seas impresses with its hand-drawn graphics and exploration theme. The expanding wilds and bonus features keep the gameplay engaging, while the high RTP ensures players get great value. It&apos;s ideal for those who appreciate both aesthetics and strong odds.
          </p>
        )}
        {name === 'Blood Suckers' && (
          <p className="text-white/70 text-sm mb-2 italic">
            Blood Suckers is a vampire-themed slot packed with spooky symbols and bonus rounds. Its low volatility means frequent wins, making it a great choice for cautious players. The game’s high RTP and immersive atmosphere have made it a classic in the online slot world.
          </p>
        )}
        {name === 'Jackpot 6000' && (
          <p className="text-white/70 text-sm mb-2 italic">
            Jackpot 6000 is a tribute to old-school Vegas slot machines, complete with a gamble feature and vintage graphics. The high volatility offers the chance for big wins, especially in the Supermeter mode. Players who love a challenge and nostalgic vibes will enjoy this NetEnt favorite.
          </p>
        )}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-green-300 font-bold text-xs">✅ Available at:</span>
          {casinos.map((casino, idx) => (
            <Link
              key={casino || idx}
              href={`/crypto-casino-reviews/${casino.toLowerCase().replace(/\s+/g, '-')}`}
              className="underline text-yellow-200 hover:text-pink-400 text-xs font-bold"
            >
              {casino}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
