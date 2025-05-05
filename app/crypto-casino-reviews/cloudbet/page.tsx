import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("cloudbet");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/cloudbet",
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

export default function CloudbetReview() {
  return (
    <>
      <Head>
        <title>Cloudbet Review (2025) – Claim Bonus & Bet Instantly</title>
        <meta name="description" content="Read our 2025 Cloudbet review. Trusted crypto sportsbook & casino with fast payouts, high limits, and huge bonuses. Claim your bonus now!" />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Cloudbet", href: "/crypto-casino-reviews/cloudbet" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/cloudbet.png"
        casinoName="CLOUDBET"
        rating={4.5}
        ratingStars="★★★★½"
        affiliateUrl="https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo"
        affiliateLabel="Play at Cloudbet"
        introText="Cloudbet is known for its crypto sportsbook and high betting limits, ideal for Bitcoin sports betting fans. It offers fast crypto payouts and one of the best live casinos among crypto-friendly platforms. Enjoy Bitcoin betting, live casino action, and fast crypto withdrawals at Cloudbet."
        reviewText={`If you’re looking for a crypto casino that doesn’t compromise on professionalism, Cloudbet is your spot. From the moment you land on the site, you’re greeted with a clean interface, sleek dark theme, and instant access to both casino games and a full sportsbook.<br><br>The real kicker? Cloudbet was one of the first crypto casinos on the scene, meaning they’ve had time to build a reputation for reliability and fast payouts.<br><br>It shines with its live betting features, high betting limits, and impressive welcome bonuses. There’s even a VIP system that scales with your loyalty, unlocking better rewards and cashback tiers.<br><br>Not everything glows — beginners might find the interface a bit advanced, and casual players could feel overwhelmed by the depth of options. But if you want a serious crypto betting experience with proven performance, Cloudbet is the real deal.<br><br>Whether you’re into blackjack, sports betting, or just looking to test your luck with crypto, Cloudbet delivers in classic style.`}
        pros={[
          "Fully integrated crypto sportsbook",
          "Instant crypto withdrawals",
          "High betting limits",
          "Great reputation & longevity"
        ]}
        cons={[
          "Interface can be complex for newcomers",
          "VIP benefits mostly for high-rollers"
        ]}
        highlights={[
          "Sports & casino games in one platform",
          "Huge welcome bonus for new players",
          "Long-standing trusted platform",
          "Supports BTC, ETH, USDT, and more"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), USDT, and more
            </li>
            <li>
              <span className="font-bold">Fast Withdrawals:</span> Crypto payouts processed instantly
            </li>
            <li>
              <span className="font-bold">High Limits:</span> Bet big with high deposit and withdrawal limits
            </li>
            <li>
              <span className="font-bold">No Extra Fees:</span> Cloudbet does not charge additional fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://cldbt.cloud/go/en/landing/bitcoin-casino?af_token=&aftm_campaign=CryptoCasino&aftm_source=GEO&aftm_medium=link&aftm_content=cryptoinfo"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Claim your Cloudbet bonus now!
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. Cloudbet may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData({
            name: "Cloudbet",
            reviewRating: 4.5,
            reviewCount: 1123,
            url: "https://www.crypto-online-casino.com/crypto-casino-reviews/cloudbet",
            image: "https://www.crypto-online-casino.com/logos/cloudbet.png",
            description: "Cloudbet is a trusted crypto casino and sportsbook with high bonuses, fast payouts, and a large game selection. Read our full review!"
          }))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "Cloudbet", href: "/crypto-casino-reviews/cloudbet" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
    </>
  );
}
