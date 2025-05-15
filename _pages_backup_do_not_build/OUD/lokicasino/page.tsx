import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import type { Metadata } from "next";
import Head from "next/head";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("lokicasino");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/lokicasino",
      images: [{ url: og.image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: og.title,
      description: og.description,
      images: [og.image],
    },
    robots: "index, follow",
  };
};

export default function LokiCasinoReview() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getReviewStructuredData({
              name: "Loki Casino",
              reviewRating: 4.0,
              reviewCount: 67,
              url: "https://www.crypto-online-casino.com/crypto-casino-reviews/lokicasino",
              image: "https://www.crypto-online-casino.com/logos/lokicasino.png",
              description: "Loki Casino is an international crypto casino with thousands of games, VIP club, and fast crypto payments. Honest review for 2025."
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Loki Casino", href: "/crypto-casino-reviews/lokicasino" }
            ], "https://www.crypto-online-casino.com"))
          }}
        />
      </Head>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Loki Casino", href: "/crypto-casino-reviews/lokicasino" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/lokicasino.png"
        casinoName="LOKI CASINO"
        rating={4.0}
        ratingStars="★★★★☆"
        affiliateUrl="https://lokicasinolink.com/hd8471080"
        affiliateLabel="Play at Loki Casino"
        introText="Loki Casino is an international crypto casino with a huge game selection, VIP club, and fast crypto payments. Find out if Loki is the right fit for you!"
        reviewText={`Loki Casino stands out with its international focus, supporting players from around the world and offering thousands of slots, table games, and live casino options.<br><br>The site accepts a wide range of cryptocurrencies for deposits and withdrawals, and regular players can benefit from the VIP club with extra perks.<br><br>While the game library is impressive, support response times can be slow at peak hours, and the bonus terms are sometimes complex. Loki Casino is licensed and offers a fair, secure experience for crypto gamblers.<br><br>Conclusion: Great for players who want variety and international access, but read the bonus terms carefully and expect occasional support delays.`}
        pros={[
          "Thousands of games",
          "Accepts many cryptocurrencies",
          "International focus",
          "VIP club with perks"
        ]}
        cons={[
          "Support can be slow at times",
          "Bonus terms can be complex"
        ]}
        highlights={[
          "Deposit with Bitcoin, Ethereum, Litecoin, USDT, and more",
          "Licensed & secure",
          "VIP club and tournaments"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), USDT, and more
            </li>
            <li>
              <span className="font-bold">Payouts:</span> Usually processed within 10 minutes
            </li>
            <li>
              <span className="font-bold">No extra fees:</span> Loki Casino charges no transaction fees for crypto payments
            </li>
          </ul>
        </div>
        <a
          href="https://lokicasinolink.com/hd8471080"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Play at Loki Casino
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Play responsibly. Loki Casino may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
