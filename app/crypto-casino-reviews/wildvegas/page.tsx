import { getOgMetaForCasino } from "@/lib/ogMeta";
import { getReviewStructuredData, getBreadcrumbListStructuredData } from "@/lib/structuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Link from "next/link";
import Head from "next/head";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("wildvegas");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/wildvegas",
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

export default function WildVegasReview() {
  return (
    <>
      <Head>
        <title>Wild Vegas Casino Review (2025) – Crypto Bonussen & Spellen</title>
        <meta name="description" content="Lees onze 2025 Wild Vegas review. Alles over crypto bonussen, games en unieke features." />
      </Head>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Wild Vegas Casino", href: "/crypto-casino-reviews/wildvegas" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/wildvegas.png"
        casinoName="WILD VEGAS"
        rating={4.0}
        ratingStars="★★★★☆"
        affiliateUrl="https://www.wildvegaslinks.com/click/11/4315/15512/1"
        affiliateLabel="Play at Wild Vegas"
        introText="Wild Vegas is a popular crypto-friendly slots casino where Bitcoin players can enjoy a Las Vegas-style experience online. Enjoy wild bonuses, crypto casino perks, and fast bitcoin payments in this exciting crypto slots platform."
        reviewText={`The moment you land on Wild Vegas, you're hit with a burst of electric blue and a vibe that screams “Let’s get wild!” The site lives up to its name with flashy visuals, animated slots, and an interface that feels like you’ve just stepped into a digital version of the Las Vegas Strip—minus the long buffet lines.<br><br>But Wild Vegas isn’t just about looks. It delivers where it counts: solid bonuses, fast crypto withdrawals, and a daily lineup of promotions that keep the excitement going long after your first spin. For newcomers, the welcome bonus offers a generous start, and seasoned players will appreciate the loyalty perks that stack up quickly.<br><br>There are some drawbacks. Like its cousin Slots of Vegas, Wild Vegas doesn’t feature a sportsbook, and its table game selection is modest. But for fans of slots, jackpots, and that signature “Vegas energy,” this platform hits the jackpot.<br><br>If you're after a wild, no-holds-barred casino ride with crypto convenience and old-school charm, Wild Vegas is a worthy stop on your online gambling tour.`}
        pros={[
          "Bright, energetic design and animations",
          "Big bonuses and daily free spin offers",
          "Crypto-friendly with fast payouts",
          "Loyalty rewards for active users"
        ]}
        cons={[
          "No sportsbook",
          "Limited table game selection"
        ]}
        highlights={[
          "Wild-themed bonuses and promotions",
          "Smooth and secure crypto payments",
          "24/7 player support",
          "Mobile-friendly design for gaming on the go"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), and more
            </li>
            <li>
              <span className="font-bold">Fast Withdrawals:</span> Crypto payouts processed within minutes
            </li>
            <li>
              <span className="font-bold">No Extra Fees:</span> Wild Vegas does not charge additional fees for crypto transactions
            </li>
          </ul>
        </div>
        <a
          href="https://www.wildvegaslinks.com/click/11/4315/15512/1"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Claim your Wild Vegas bonus now!
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. Wild Vegas may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData({
            name: "Wild Vegas Casino",
            reviewRating: 4.3,
            reviewCount: 211,
            url: "https://www.crypto-online-casino.com/crypto-casino-reviews/wildvegas",
            image: "https://www.crypto-online-casino.com/logos/wildvegas.png",
            description: "Wild Vegas is een spannend crypto casino met snelle betalingen, royale bonussen en een breed spelaanbod. Lees onze volledige review!"
          }))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "Wild Vegas Casino", href: "/crypto-casino-reviews/wildvegas" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
    </>
  );
}
