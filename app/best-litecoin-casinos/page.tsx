import Head from 'next/head';
import Link from 'next/link';

const iconGrid = [
  { icon: '/casino-icons/Dices.svg', label: 'Fast Transactions' },
  { icon: '/casino-icons/Diamond 1.svg', label: 'Exclusive LTC Bonuses' },
  { icon: '/casino-icons/Casino.svg', label: 'Top-Rated Casinos' },
  { icon: '/casino-icons/Lucky Charm.svg', label: 'Provably Fair Games' },
  { icon: '/casino-icons/Bonus.svg', label: 'Big Welcome Deals' },
];

const casinos = [
  {
    name: 'Slots of Vegas',
    icon: '/casino-icons/Dices.svg',
    url: 'https://www.slotsofvegaslinks.com/click/15/4298/15512/1',
    perks: [
      'Fast LTC payouts',
      'Big welcome bonus',
      'No KYC required',
    ],
  },
  {
    name: 'Wild Vegas',
    icon: '/casino-icons/Diamond 1.svg',
    url: 'https://www.wildvegaslinks.com/click/11/4315/15512/1',
    perks: [
      'Instant deposits',
      'Frequent reloads',
      'VIP rewards',
    ],
  },
  {
    name: 'BitStarz',
    icon: '/casino-icons/Casino.svg',
    url: 'https://bs5.direct/b2bZr0de07',
    perks: [
      'Award-winning support',
      'Fast LTC withdrawals',
      'Provably fair games',
    ],
  },
  {
    name: 'Cloudbet',
    icon: '/casino-icons/Lucky Charm.svg',
    url: 'https://dlcbt.cloud/go/en/landing/bitcoin-casino?af_token=36d323f0afab6d541b76115d29e88c18&afm_campaign=CQC&afm_source=website&afm_medium=banner&afm_content=banner-468',
    perks: [
      'High limits',
      'Live casino action',
      'Fast payouts',
    ],
  },
  {
    name: '7Bit',
    icon: '/casino-icons/Bonus.svg',
    url: 'https://www.7bitcasino.com/a/b8c1d2e3f4',
    perks: [
      'Up to 5 LTC welcome',
      'Thousands of slots',
      'Crypto races',
    ],
  },
  {
    name: 'Betplay',
    icon: '/casino-icons/Crown.svg',
    url: 'https://betplay.io?ref=b412fd5f5cd18',
    perks: [
      'No KYC',
      'Instant payouts',
      'Sports & casino',
    ],
  },
  {
    name: 'Dreams',
    icon: '/casino-icons/Diamond 2.svg',
    url: 'https://www.dreamslinks.com/click/64/305/15512/1',
    perks: [
      'Crypto-friendly',
      'Big jackpots',
      '24/7 support',
    ],
  },
  {
    name: 'Crypto Loko',
    icon: '/casino-icons/Lucky Charm.svg',
    url: 'https://cryptolokio.click/click/774/461/6060/1',
    perks: [
      'No KYC',
      'Exclusive LTC promos',
      'Fast withdrawals',
    ],
  },
  {
    name: 'Betzard',
    icon: '/casino-icons/Diamond 3.svg',
    url: 'https://www.betzard.com/?ref=YOUR_ID',
    perks: [
      'Sports & casino',
      'Crypto bonuses',
      'Easy registration',
    ],
  },
  {
    name: 'Coinpoker',
    icon: '/casino-icons/Casino.svg',
    url: 'https://record.coinpokeraffiliates.com/_BPlLejNitgdhg6WO2I1rgWNd7ZgqdRLk/1/',
    perks: [
      'Provably fair poker',
      'Fast crypto payouts',
      'No KYC',
    ],
  },
];

function IconGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8 max-w-3xl mx-auto">
      {iconGrid.map(({ icon, label }) => (
        <div key={label} className="flex flex-col items-center">
          <img src={icon} alt={label} className="w-12 h-12 mb-2 drop-shadow-[0_0_10px_gold]" />
          <span className="text-white/90 text-sm font-semibold text-center">{label}</span>
        </div>
      ))}
    </div>
  );
}

function CasinoCard({ name, perks, url, icon }: { name: string; perks: string[]; url: string; icon: string }) {
  // Casino-specific info texts
  const infoTexts: Record<string, string> = {
    'Slots of Vegas': 'Known for its fast Litecoin payouts and generous bonuses. No KYC means quick and anonymous play, ideal for crypto enthusiasts.',
    'Wild Vegas': 'Offers instant deposits and reload bonuses for active players. The VIP program rewards loyal gamblers with extra benefits.',
    'BitStarz': 'One of the most trusted crypto casinos with thousands of games. Litecoin withdrawals are fast and completely free.',
    'Cloudbet': 'Cloudbet combines high limits with an excellent live casino experience. The site supports fast, secure Litecoin transactions.',
    '7Bit': 'Up to 5 LTC in bonuses and a massive game selection. Unique promotions like crypto races keep things exciting.',
    'Betplay': 'Caters to both sports and casino fans with instant payouts and no KYC. An excellent choice for fast crypto betting.',
    'Dreams': 'A crypto-friendly platform with big jackpots and ongoing promotions. 24/7 support makes it accessible to everyone.',
    'Crypto Loko': 'Exclusive bonuses for Litecoin users and fast withdrawals. No identity verification required to get started.',
    'Betzard': 'Offers sports betting and casino games on one platform. Easy registration and attractive bonuses.',
    'Coinpoker': 'Perfect for poker fans who want to play with Litecoin. Fast payouts, fair gameplay, and no KYC required.',
  };

  return (
    <div className="rounded-2xl border border-yellow-400 bg-black/65 backdrop-blur-lg p-6 shadow-xl flex flex-col md:flex-row items-center gap-4">
      <img src={icon} alt="Casino icon" className="w-14 h-14 mb-2 md:mb-0 md:mr-4 drop-shadow-[0_0_10px_gold]" />
      <div className="flex-1 w-full">
        <h2 className="text-xl font-bold text-yellow-300 mb-1">{name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left column: bullet points */}
          <ul className="list-disc list-inside text-white/90 mb-2 pl-2">
            {perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>
          {/* Right column: casino description */}
          <div className="text-white/80 text-lg leading-relaxed max-w-prose mb-2 md:mb-0">
            {infoTexts[name]}
          </div>
        </div>
        <Link
          href={url}
          target="_blank"
          className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-lg shadow hover:bg-yellow-300 mt-2"
        >
          Visit {name}
        </Link>
      </div>
    </div>
  );
}

export default function LitecoinCasinosPage() {
  return (
    <>
      <div className="min-h-screen fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-center bg-fixed" />
      <div className="relative z-10 flex items-center justify-center min-h-screen py-8 px-2">
        <div className="bg-black/65 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl max-w-5xl mx-auto w-full">
          <Head>
            <title>Best Litecoin Casinos – Top LTC Gambling Sites 2025</title>
            <meta
              name="description"
              content="Discover the best Litecoin casinos in 2025. Fast, secure, and low-fee crypto gambling with top-rated LTC platforms."
            />
          </Head>
          <IconGrid />
          <h1 className="text-4xl font-extrabold text-yellow-300 text-center mb-6">
            BEST LITECOIN CASINOS – TOP PICKS FOR 2025
          </h1>
          {/* Intro with icons */}
          <div className="mb-10 text-white/90 text-lg space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <img src="/casino-icons/Dices.svg" alt="Litecoin speed" className="w-7 h-7 inline-block" />
              <span>
                <strong>What is Litecoin?</strong> Litecoin (LTC) is a popular cryptocurrency launched in 2011 as a 'lite' version of Bitcoin. Its lightweight network enables fast transactions with extremely low fees.
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <img src="/casino-icons/Diamond 1.svg" alt="LTC casino" className="w-7 h-7 inline-block" />
              <span>
                <strong>Why do crypto casinos choose Litecoin?</strong> Thanks to its fast processing, low fees, and wide acceptance, LTC is ideal for online gambling. Your deposits are often processed within seconds.
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <img src="/casino-icons/Bonus.svg" alt="LTC bonus" className="w-7 h-7 inline-block" />
              <span>
                <strong>What can you find on this page?</strong> You'll discover the best Litecoin casinos, the most attractive bonuses, and helpful tips to get started with LTC gambling safely.
              </span>
            </div>
          </div>
          {/* Casino cards */}
          <div className="grid gap-6 mb-10">
            {casinos.map((casino) => (
              <CasinoCard key={casino.name} {...casino} />
            ))}
          </div>
          {/* FAQ / Info */}
          <div className="mt-12 text-white/90 text-sm">
            <h2 className="text-2xl font-bold mb-2 text-green-500">Why Litecoin for Gambling?</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Faster and cheaper than Bitcoin</li>
              <li>Instant payouts</li>
              <li>More privacy</li>
              <li>Widely accepted by crypto casinos</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-green-500">FAQ</h2>
            <p className="mb-1">
              <strong>Do I need a wallet?</strong> Yes, you need a Litecoin wallet to play.
            </p>
            <p className="mb-1">
              <strong>Are LTC casinos legal?</strong> Always check your local laws – but most sites accept players worldwide.
            </p>
            <p>
              <strong>Are there bonuses?</strong> Yes! Most LTC casinos offer generous welcome bonuses, cashback, and more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
