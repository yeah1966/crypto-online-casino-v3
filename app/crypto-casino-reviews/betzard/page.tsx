import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";

export const generateMetadata = async () => {
  return getOgMetaForCasino("betzard");
};

export default function BetzardReview() {
  return (
    <>
      <Head>
        <title>Betzard Casino Review (2025) – Crypto Bonussen & Spellen</title>
        <meta name="description" content="Lees onze 2025 Betzard review. Alles over crypto bonussen, games en unieke features." />
        <meta name="robots" content="index, follow" />
        {(() => {
          const og = getOgMetaForCasino("betzard");
          return <>
            <meta property="og:title" content={og.title} />
            <meta property="og:description" content={og.description} />
            <meta property="og:image" content={og.image} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.crypto-online-casino.com/crypto-casino-reviews/betzard" />
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
              name: "Betzard Casino",
              reviewRating: 4.0,
              reviewCount: 389,
              url: "https://www.yourdomain.com/crypto-casino-reviews/betzard",
              image: "https://www.yourdomain.com/logos/betzard.png",
              description: "Betzard Casino is een opkomend crypto casino met ruime bonussen, veel spellen en snelle betalingen. Lees onze volledige review!"
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Betzard Casino", href: "/crypto-casino-reviews/betzard" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Betzard Casino", href: "/crypto-casino-reviews/betzard" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/betzard.png"
        casinoName="BETZARD"
        rating={4.0}
        ratingStars="★★★★☆"
        affiliateUrl="https://7bit.partners/pe27a3a44"
        affiliateLabel="Play at Betzard"
        introText="Betzard Casino is a top-tier crypto casino known for its secure environment, fast payouts, and a wide variety of provably fair games. Whether you’re betting with Bitcoin or browsing the latest crypto promotions, Betzard combines security with excitement in one sleek platform."
        reviewText={`Betzard wears its crown proudly, offering a whimsical fantasy-inspired layout backed by real crypto functionality. While it doesn’t boast the biggest name in the industry, it makes up for it with a well-rounded experience and fun promotional energy.<br><br>The site features a full library of <strong>slots, table games, and live dealer action</strong>, and supports <strong>Bitcoin</strong> alongside other payment methods. Players can claim a <strong>solid welcome bonus</strong>, often matched with free spins or cashback rewards.<br><br>The interface is clean and user-friendly, though not overly flashy. Betzard focuses more on content than cosmetics, with frequent tournaments and seasonal promos to keep things interesting.<br><br>For crypto users, the platform offers <strong>quick deposits and cashouts</strong>, decent support, and a growing reputation in the alt-gaming space. It’s a safe pick if you’re looking to play crypto with a dash of medieval flair.`}
        pros={[
          "Great welcome bonus",
          "Wide game selection",
          "Crypto deposits & withdrawals",
          "Fun seasonal events"
        ]}
        cons={[
          "Fewer VIP benefits",
          "Interface feels “templated”"
        ]}
        highlights={[
          "Secure BTC gaming",
          "Easy-to-use layout",
          "Live tournaments & events",
          "Weekly promotions"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC) and major altcoins
            </li>
            <li>
              <span className="font-bold">Fast Withdrawals:</span> Crypto cashouts processed quickly (often within 24 hours)
            </li>
            <li>
              <span className="font-bold">No Extra Fees:</span> Betzard does not charge additional fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://7bit.partners/pe27a3a44"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎯 Join Betzard and play now
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. Betzard Casino may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
