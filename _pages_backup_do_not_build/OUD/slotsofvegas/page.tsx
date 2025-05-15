import { getReviewStructuredData } from "@/lib/structuredData";
import { getBreadcrumbListStructuredData } from "@/lib/structuredData";
import { getOgMetaForCasino } from "@/lib/ogMeta";
import Breadcrumbs from "@/components/Breadcrumbs";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import type { Metadata } from "next";
import Head from "next/head";

export const generateMetadata = async (): Promise<Metadata> => {
  const og = getOgMetaForCasino("slotsofvegas");
  return {
    title: og.title,
    description: og.description,
    openGraph: {
      title: og.title,
      description: og.description,
      url: "https://www.crypto-online-casino.com/crypto-casino-reviews/slotsofvegas",
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

export default function SlotsOfVegasReview() {
  return (
    <>
      <Head>
        <title>Slots of Vegas Casino Review (2025) – Crypto Bonussen & Spellen</title>
        <meta name="description" content="Lees onze 2025 Slots of Vegas review. Alles over crypto gokkasten, bonussen en unieke features." />
      </Head>
      <div className="fixed inset-0 -z-20 bg-[url('/images/crypto-casino-online.png')] bg-cover bg-no-repeat" aria-hidden="true" />
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" aria-hidden="true" />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Slots of Vegas", href: "/crypto-casino-reviews/slotsofvegas" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/slotsofvegas.png"
        casinoName="SLOTS OF VEGAS"
        rating={4.5}
        ratingStars="★★★★½"
        affiliateUrl="https://www.slotsofvegaslinks.com/click/15/4298/15512/1"
        affiliateLabel="Visit Slots of Vegas"
        introText="Slots of Vegas is one of the most accessible crypto casinos for players looking to deposit with Bitcoin and other digital currencies. Experience classic Vegas slots with modern crypto payments and enjoy exclusive crypto casino bonuses."
        reviewText={`From the moment you land on Slots of Vegas, you’re greeted by that unmistakable neon glow and classic Vegas atmosphere. The site leans hard into its retro style, giving you the sense that you’ve just walked into a vintage casino.<br><br>Only this time, you’re playing with crypto. What sets Slots of Vegas apart is its laser focus on slot lovers. With hundreds of Vegas-style slot machines, daily promotions, and a loyalty system that actually rewards you for sticking around, this casino is all about spinning and winning. Payouts are fast, crypto is king, and the 24/7 support team is surprisingly responsive. It’s not perfect.<br><br>Sports bettors will want to look elsewhere, and the table game selection can feel a bit limited. But for pure slot enthusiasts looking for big bonuses and fast crypto cashouts, Slots of Vegas is a serious contender. If you’re into flashy, fast-paced fun with that old-school Vegas vibe, you might just find yourself coming back for more.`}
        pros={[
          "Huge selection of Vegas-style slots",
          "Daily promos and free spins",
          "Fast crypto withdrawals",
          "24/7 customer support"
        ]}
        cons={[
          "No sportsbook",
          "Limited table games selection"
        ]}
        highlights={[
          "Claim your welcome bonus as a new player",
          "Authentic Vegas-style jackpots & vibes",
          "Crypto-only: fast and secure payments",
          "Loyalty rewards for returning players"
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
              <span className="font-bold">Low or No Transaction Fees:</span> When depositing with cryptocurrencies like Bitcoin or Litecoin, Slots of Vegas typically does not charge any transaction fees. This makes it an attractive option for players seeking cost-effective deposit methods.
            </li>
            <li>
              <span className="font-bold">Exclusive Bitcoin Slots with Progressive Jackpots:</span> Slots of Vegas offers exclusive Bitcoin slots, such as Slots and the Angry Banker, featuring progressive jackpots that can reach up to 25 BTC. These games are specially designed for crypto users and deliver a unique gameplay experience.
            </li>
          </ul>
        </div>
        <a
          href="https://www.slotsofvegaslinks.com/click/15/4298/15512/1"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Claim your Slots of Vegas bonus now!
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Gamble responsibly. Slots of Vegas may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getReviewStructuredData({
            name: "Slots of Vegas",
            reviewRating: 4.0,
            reviewCount: 122,
            url: "https://www.crypto-online-casino.com/crypto-casino-reviews/slotsofvegas",
            image: "https://www.crypto-online-casino.com/logos/slotsofvegas.png",
            description: "Slots of Vegas is een klassiek crypto casino met snelle betalingen, royale bonussen en een breed spelaanbod. Lees onze volledige review!"
          }))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getBreadcrumbListStructuredData([
            { name: "Home", href: "/" },
            { name: "Casino Reviews", href: "/crypto-casino-reviews" },
            { name: "Slots of Vegas", href: "/crypto-casino-reviews/slotsofvegas" }
          ], "https://www.crypto-online-casino.com"))
        }}
      />
    </>
  );
}
