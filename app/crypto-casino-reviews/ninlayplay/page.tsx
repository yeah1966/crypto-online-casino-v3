import Head from "next/head";
import { getReviewStructuredData, getBreadcrumbListStructuredData, getOgMetaForCasino } from "@/lib/structuredData";
import CasinoReviewTemplate from "@/templates/CasinoReviewTemplate";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NinlayplayReview() {
  return (
    <>
      <Head>
        <title>Ninlayplay Casino Review (2025) – Crypto Games, Bonuses & Fast Payouts</title>
        <meta name="description" content="Read our Ninlayplay Casino review! Discover crypto bonuses, fast payouts, and the unique features of this new crypto casino site." />
        <meta name="robots" content="index, follow" />
        {(() => {
          const og = getOgMetaForCasino("ninlayplay");
          return <>
            <meta property="og:title" content={og.title} />
            <meta property="og:description" content={og.description} />
            <meta property="og:image" content={og.image} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.yourdomain.com/crypto-casino-reviews/ninlayplay" />
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
              name: "Ninlayplay Casino",
              reviewRating: 4.2,
              reviewCount: 57,
              url: "https://www.yourdomain.com/crypto-casino-reviews/ninlayplay",
              image: "https://www.yourdomain.com/logos/ninlayplay.png",
              description: "Ninlayplay is a new crypto casino with fast payouts, attractive bonuses, and a unique game selection. Read our full review!"
            }))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getBreadcrumbListStructuredData([
              { name: "Home", href: "/" },
              { name: "Casino Reviews", href: "/crypto-casino-reviews" },
              { name: "Ninlayplay Casino", href: "/crypto-casino-reviews/ninlayplay" }
            ], "https://www.yourdomain.com"))
          }}
        />
      </Head>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Casino Reviews", href: "/crypto-casino-reviews" },
          { name: "Ninlayplay Casino", href: "/crypto-casino-reviews/ninlayplay" }
        ]}
      />
      <CasinoReviewTemplate
        logo="/logos/ninlaycasino.png"
        casinoName="NINLAYPLAY CASINO"
        rating={4.2}
        ratingStars="★★★★☆"
        affiliateUrl="https://ninlayplay.com/hecd2573b"
        affiliateLabel="Play at Ninlayplay"
        introText="Ninlayplay Casino is a fresh crypto casino destination offering a wide range of games, generous bonuses, and secure, fast crypto payments. Find out why crypto players are checking out Ninlayplay!"
        reviewText={`Ninlayplay Casino stands out with its modern interface, diverse selection of slots and live casino games, and a strong focus on crypto users.<br><br>Registration is quick and easy, and you can deposit instantly with Bitcoin, Ethereum, and other popular coins. Bonuses are competitive and transparent, with regular promotions for both new and loyal players.<br><br>Payouts are processed quickly, usually within minutes, and customer support is available 24/7 via live chat. Ninlayplay is fully crypto-friendly and offers a safe, fair gaming experience.<br><br>If you want a new crypto casino with a user-friendly design, fast withdrawals, and plenty of bonuses, Ninlayplay is worth a try!`}
        pros={[
          "Fast crypto withdrawals",
          "Large selection of slots and live games",
          "Attractive bonuses and promotions",
          "24/7 support"
        ]}
        cons={[
          "New brand, less reputation",
          "No fiat payment options"
        ]}
        highlights={[
          "Deposit with Bitcoin, Ethereum, Litecoin, USDT",
          "Quick payouts (usually within 10 min)",
          "Daily and weekly bonuses",
          "Modern, mobile-friendly design"
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
              <span className="font-bold">Crypto Accepted:</span> Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), USDT
            </li>
            <li>
              <span className="font-bold">Payouts:</span> Usually processed within 10 minutes
            </li>
            <li>
              <span className="font-bold">No extra fees:</span> Ninlayplay charges no transaction fees for crypto payments
            </li>
          </ul>
        </div>
        <a
          href="https://ninlayplay.com/hecd2573b"
          className="mt-8 block bg-yellow-400 hover:bg-yellow-300 text-center text-purple-900 font-bold py-3 rounded-lg shadow-lg transition-all duration-300 text-lg"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          🎲 Claim your Ninlayplay bonus!
        </a>
        <p className="text-center text-xs text-gray-200 mt-3">
          18+ | Play responsibly. Ninlayplay may not be available in all jurisdictions.
        </p>
      </CasinoReviewTemplate>
    </>
  );
}
