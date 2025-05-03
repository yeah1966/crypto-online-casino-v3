import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";

export default function CoinPokerReview() {
  return (
    <>
      <Head>
        <title>Coinpoker Casino Review (2025) – Crypto Bonussen & Spellen</title>
        <meta name="description" content="Lees onze 2025 Coinpoker review. Alles over crypto poker, bonussen en unieke features." />
        <meta name="robots" content="index, follow" />
        {(() => {
          const og = getOgMetaForCasino("coinpoker");
          return <>
            <meta property="og:title" content={og.title} />
            <meta property="og:description" content={og.description} />
            <meta property="og:image" content={og.image} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.crypto-online-casino.com/crypto-casino-reviews/coinpoker" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={og.title} />
            <meta name="twitter:description" content={og.description} />
            <meta name="twitter:image" content={og.image} />
          </>;
        })()}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData({
              name: "CoinPoker",
              reviewRating: 4.4,
              reviewCount: 312,
              url: "https://www.yourdomain.com/crypto-casino-reviews/coinpoker",
              image: "https://www.yourdomain.com/logos/coinpoker.png",
              description: "CoinPoker is the world’s most trusted blockchain poker site, offering a provably fair experience with fast crypto payouts and decentralized gameplay."
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Coinpoker Casino", href: "/crypto-casino-reviews/coinpoker" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Coinpoker Casino", href: "/crypto-casino-reviews/coinpoker" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/coinpoker.png"
        casinoName="COINPOKER"
        rating={4.4}
        ratingStars="★★★★☆"
        affiliateUrl="https://record.coinpokeraffiliates.com/_BPlLejNitgfUOsjNOfgKeWNd7ZgqdRLk/1/"
        affiliateLabel="Play at CoinPoker"
        introText="CoinPoker is the world’s most trusted blockchain poker site, offering a provably fair experience with fast crypto payouts and decentralized gameplay. If you’re searching for secure crypto poker powered by transparency, CoinPoker combines the thrill of classic poker with the power of blockchain technology."
        reviewText={`If you’re into poker and crypto, CoinPoker is an absolute must-try. Unlike traditional online casinos, this platform is built specifically for <strong>blockchain-based poker games</strong> with fast and transparent transactions.<br><br>What sets CoinPoker apart is its use of <strong>USDT and its own CHP token</strong> for low-fee gameplay, plus <strong>instant payouts</strong> thanks to smart contract-based processing. You won’t find a slot machine here — it’s <strong>pure poker</strong>: cash games, tournaments, and leaderboard-based challenges.<br><br>The design is slick and dark-themed, perfect for long sessions. It's not overloaded with distractions — just high-stakes tables, responsive controls, and a tight-knit crypto community.<br><br>If you're not a poker player, this isn't for you. But if you are? This might be the best crypto-powered card room online.`}
        pros={[
          "Built entirely for poker players",
          "Transparent, blockchain-driven gameplay",
          "No KYC (play anonymously)",
          "Uses USDT and CHP token"
        ]}
        cons={[
          "No slots or other casino games",
          "Not ideal for total beginners"
        ]}
        highlights={[
          "Fast USDT withdrawals",
          "Global online poker community",
          "Daily tournaments with big pots",
          "Crypto-only — no fiat nonsense"
        ]}
      >
        {/* CRYPTO & PAYMENT OPTIONS */}
        <div className="mt-8 bg-purple-900/80 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💸</span>
            <span className="text-purple-100 font-bold text-xl">CRYPTO & PAYMENT OPTIONS</span>
          </div>
          <ul className="list-disc list-inside text-purple-100 space-y-2">
            <li>
              <span className="font-bold">Crypto Accepted:</span> USDT (Tether), CHP token, Bitcoin (BTC)
            </li>
            <li>
              <span className="font-bold">Instant Withdrawals:</span> Smart contract-based crypto payouts
            </li>
            <li>
              <span className="font-bold">No Extra Fees:</span> CoinPoker does not charge additional fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://record.coinpokeraffiliates.com/_BPlLejNitgfUOsjNOfgKeWNd7ZgqdRLk/1/"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎯 Play poker with crypto now
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. CoinPoker may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
