import Head from "next/head";
import BookmakerTemplate from "../BookmakerTemplate";

const cryptocurrencies = [
  { symbol: "btc", label: "BTC", icon: "/icons/btc.svg" },
  { symbol: "eth", label: "ETH", icon: "/icons/eth.svg" },
  { symbol: "ltc", label: "LTC", icon: "/icons/ltc.svg" },
  { symbol: "usdt", label: "USDT", icon: "/icons/usdt.svg" },
];

const sports = [
  { label: "Soccer", icon: "/sports-icons/Football.svg" },
  { label: "Basketball", icon: "/sports-icons/Basketball.svg" },
  { label: "Tennis", icon: "/sports-icons/Tennis.svg" },
  { label: "Boxing", icon: "/sports-icons/Boxing.svg" },
  { label: "Esports", icon: "/sports-icons/Esports.svg" },
];

const mainBlocks = [
  {
    title: "Why Bet with Crypto?",
    icon: "/icons/Bitcoin.svg",
    description:
      "Crypto betting offers instant deposits, fast withdrawals, and complete privacy. Your funds are secure and transactions are processed within minutes, no matter where you are in the world.",
  },
  {
    title: "How Does Crypto Sports Betting Work?",
    icon: "/casino-icons/Dollars.svg",
    description:
      "Sign up, deposit with your favorite cryptocurrency, and place bets on thousands of sports events. Winnings are paid out instantly in crypto, with no hidden fees or delays.",
  },
];

const featureBlocks = [
  {
    title: "No KYC Needed",
    icon: "/casino-icons/Lock.svg",
    description: "1xBet allows crypto betting without mandatory identity verification.",
  },
  {
    title: "Fast Crypto Payouts",
    icon: "/casino-icons/Instant Withdrawals.svg",
    description: "Lightning-fast payouts directly to your crypto wallet.",
  },
  {
    title: "Big Bonuses",
    icon: "/casino-icons/Bonus.svg",
    description: "Frequent reload bonuses and ongoing promotions to boost your bankroll.",
  },
  {
    title: "24/7 Support",
    icon: "/casino-icons/Support.svg",
    description: "Live chat support available 24/7 for all players.",
  },
  {
    title: "Global Availability",
    icon: "/casino-icons/Globe.svg",
    description: "Accessible for crypto bettors worldwide.",
  },
];

export default function OneXBetBookmaker() {
  const sportsbettingMenu = (
    <nav className="mb-10 w-full mx-auto">
      <div className="rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-400 via-purple-500 to-orange-400 p-1 shadow-xl flex">
        <div className="flex-1 flex items-center justify-center gap-6 bg-purple-800/95 rounded-2xl p-4">
          <a href="/sports" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
            <span className="text-2xl">⚽</span> Sports Overview
          </a>
          <a href="/sports/bookmakers/1xbet" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
            <span className="text-2xl">🏆</span> 1xBet
          </a>
          <a href="/sports/bookmakers/cloudbet" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
            <span className="text-2xl">⚡</span> Cloudbet
          </a>
          <a href="/sports/bookmakers/wildvegas" className="flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-300">
            <span className="text-2xl">🎲</span> Wild Vegas
          </a>
        </div>
      </div>
    </nav>
  );
  return (
    <BookmakerTemplate
      logo="/logos/1xbet.png"
      title="1XBET SPORTSBOOK — CRYPTO BETTING REVIEW 2025"
      description="1xBet is a world-renowned crypto sportsbook and casino with a huge selection of sports betting, casino games, and bonuses. Perfect for crypto bettors who value speed and versatility."
      cryptocurrencies={cryptocurrencies}
      sports={sports}
      mainBlocks={mainBlocks}
      featureBlocks={featureBlocks}
      sportsbettingMenu={sportsbettingMenu}
    >
      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        {/* OUR REVIEW */}
        <div className="mt-8 bg-black/70 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-300 mb-4">Our Review</h2>
          <p className="text-base text-zinc-100 leading-relaxed">
            1xBet stands out as one of the most complete online betting platforms, with thousands of sports events, live betting, and a huge selection of slots and table games.<br /><br />
            Crypto users benefit from instant deposits and fast withdrawals with Bitcoin, Ethereum, and other coins. The bonus offers are among the best in the industry, and regular promotions keep things exciting.<br /><br />
            The site features a modern interface, mobile-friendly design, and 24/7 customer support. Whether you're into sports betting or casino action, 1xBet has it all – all in one place!
          </p>
        </div>
        {/* CRYPTO & PAYMENT OPTIONS */}
        <div className="mt-8 bg-purple-900/80 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💸</span>
            <span className="text-purple-100 font-bold text-xl">CRYPTO & PAYMENT OPTIONS</span>
          </div>
          <ul className="list-disc list-inside text-purple-100 space-y-2">
            <li>
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), USDT, and more
            </li>
            <li>
              <span className="font-bold">Payouts:</span> Usually processed within minutes
            </li>
            <li>
              <span className="font-bold">No extra fees:</span> 1xBet charges no fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://refpa3740576.top/L?tag=d_3915280m_1599c_&site=3915280&ad=1599"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🏅 Claim your 1xBet bonus!
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Play responsibly. 1xBet may not be available in all jurisdictions.
        </p>
      </div>
    </BookmakerTemplate>
  );
}
