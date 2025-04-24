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
  return (
    <div className="rounded-2xl border border-yellow-400 bg-black/65 backdrop-blur-lg p-6 shadow-xl flex flex-col md:flex-row items-center gap-4">
      <img src={icon} alt="Casino icon" className="w-14 h-14 mb-2 md:mb-0 md:mr-4 drop-shadow-[0_0_10px_gold]" />
      <div className="flex-1">
        <h2 className="text-xl font-bold text-yellow-300 mb-1">{name}</h2>
        <ul className="list-disc list-inside text-white/90 mb-2 pl-2">
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
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
          {/* Uitgebreide intro met iconen */}
          <div className="mb-10 text-white/90 text-lg space-y-4">
            <div className="flex items-center gap-3 justify-center">
              <img src="/casino-icons/Dices.svg" alt="Litecoin speed" className="w-7 h-7 inline-block" />
              <span>
                <strong>Wat is Litecoin?</strong> Litecoin (LTC) is een populaire cryptocurrency uit 2011, ontwikkeld als 'lite' versie van Bitcoin. Door het lichte netwerk zijn transacties razendsnel en de kosten extreem laag.
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <img src="/casino-icons/Diamond 1.svg" alt="LTC casino" className="w-7 h-7 inline-block" />
              <span>
                <strong>Waarom kiezen crypto casino’s voor Litecoin?</strong> Dankzij de snelle verwerking, lage fees en brede acceptatie is LTC ideaal voor online gokken. Je stortingen staan vaak binnen enkele seconden op je account.
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <img src="/casino-icons/Bonus.svg" alt="LTC bonus" className="w-7 h-7 inline-block" />
              <span>
                <strong>Wat vind je op deze pagina?</strong> Je ontdekt de beste Litecoin casino’s, de mooiste bonussen en handige tips om veilig te starten met LTC-gokken.
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
            <h2 className="text-2xl font-bold mb-2 text-green-500">Waarom Litecoin voor gokken?</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Snel & goedkoper dan Bitcoin</li>
              <li>Directe uitbetalingen</li>
              <li>Meer privacy</li>
              <li>Breed geaccepteerd bij crypto casino’s</li>
            </ul>
            <h2 className="text-2xl font-bold mb-2 text-green-500">FAQ</h2>
            <p className="mb-1">
              <strong>Heb ik een wallet nodig?</strong> Ja, je hebt een Litecoin wallet nodig om te spelen.
            </p>
            <p className="mb-1">
              <strong>Zijn LTC casino’s legaal?</strong> Check altijd je lokale wetgeving – maar de meeste sites accepteren spelers wereldwijd.
            </p>
            <p>
              <strong>Zijn er bonussen?</strong> Ja! De meeste LTC casino’s bieden mooie welkomstbonussen, cashback en meer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
