import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "How to Withdraw Crypto Winnings – Fast & Safe Payouts",
  description: "Learn how to withdraw your crypto casino winnings quickly and securely. Step-by-step instructions for wallets, conditions, and payout tips.",
  openGraph: {
    title: "How to Withdraw Crypto Winnings – Fast & Safe Payouts",
    description: "Get your winnings out fast. Learn how to withdraw from crypto casinos using the right wallets and payout methods.",
    url: "https://crypto-online-casino.com/guides/withdrawals",
    images: [
      {
        url: "/images/how-to-withdraw-crypto-winnings.webp",
        width: 1200,
        height: 630,
        alt: "How to Withdraw Crypto Winnings OG-image",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Withdraw Crypto Winnings – Fast & Safe Payouts",
    description: "Get your winnings out fast. Learn how to withdraw from crypto casinos using the right wallets and payout methods.",
    images: ["/images/how-to-withdraw-crypto-winnings.webp"],
  },
  alternates: {
    canonical: "/guides/withdrawals",
  },
};

export default function WithdrawalsPage() {
  // Structured Data JSON-LD (Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Withdraw Crypto Winnings – Fast & Safe Payouts",
    "description": "Learn how to withdraw your crypto casino winnings quickly and securely. Step-by-step instructions for wallets, conditions, and payout tips.",
    "author": {
      "@type": "Organization",
      "name": "Crypto Online Casino"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crypto Online Casino",
      "logo": {
        "@type": "ImageObject",
        "url": "https://crypto-online-casino.com/branding/logo.png"
      }
    },
    "image": "https://crypto-online-casino.com/images/how-to-withdraw-crypto-winnings.webp",
    "url": "https://crypto-online-casino.com/guides/withdrawals",
    "datePublished": "2025-05-21",
    "dateModified": "2025-05-21"
  };

  return (
    <div className="relative w-full min-h-screen z-10 px-4 md:px-8 py-16 max-w-6xl mx-auto text-white space-y-12">

      {/* Achtergrond en overlay */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center will-change-transform" style={{ backgroundImage: "url('/images/crypto-casino-online.webp')" }} aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-black/65 backdrop-blur-sm" aria-hidden="true" />

      {/* Inhoud */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          💸 How to Withdraw Crypto Winnings
        </h1>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p>
          Crypto withdrawals can be fast, but only if you follow the right steps — this guide shows you how to cash out like a pro.<br/>
          You've had a lucky streak and now it's time to cash out. Withdrawing your crypto winnings from an online casino is usually fast — but only if you follow the right steps.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">🔐 Step 1: Verify Your Wallet</h2>
        <p>
          Make sure the wallet address you're withdrawing to is correct and under your control. Most casinos let you use:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>🦊 MetaMask (ETH, tokens)</li>
          <li>👛 Trust Wallet or hardware wallets (BTC, LTC, DOGE, etc.)</li>
          <li>💱 Exchange wallets (use with caution – some block gambling transfers)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">⚠️ Step 2: Meet Withdrawal Conditions</h2>
        <p>
          Before withdrawing, make sure you’ve:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>✅ Cleared any bonus wagering requirements</li>
          <li>✅ Passed KYC (if required)</li>
          <li>✅ Reached the minimum withdrawal threshold</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">🚀 Step 3: Request Your Withdrawal</h2>
        <p>
          Navigate to the cashier or wallet section and choose your crypto and amount. Enter your wallet address and confirm.
        </p>
        <p>
          Most crypto casinos process withdrawals in under 10 minutes — some instantly. But in some cases (large amounts or KYC pending), it might take up to 24 hours.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">🛑 Common Withdrawal Issues</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>❌ Bonus terms not fulfilled</li>
          <li>❌ Wrong wallet format (e.g. BEP20 vs ERC20)</li>
          <li>❌ Deposit not wagered (anti-money laundering rule)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">💡 Pro Tips</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>🪙 Withdraw in stablecoins like USDT to lock your winnings</li>
          <li>💬 Contact support if your payout takes longer than expected</li>
          <li>📒 Keep a screenshot of your transaction confirmation</li>
        </ul>

        <p>
          Withdrawing from a crypto casino can be smooth, instant, and safe — as long as you play by the rules and use the right wallet. Don’t forget: your crypto is your responsibility once it hits your address.
        </p>
      </section>

      {/* OG-image */}
      <div className="max-w-2xl mx-auto">
        <Image
          src="/images/how-to-withdraw-crypto-winnings.webp"
          alt="How to Withdraw Crypto Winnings"
          width={800}
          height={400}
          className="w-full rounded-xl shadow-lg mt-8"
        />
      </div>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-lg text-white/80 mb-4">Looking for fast-payout crypto casinos?</p>
        <a
          href="/crypto-casino-reviews"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition shadow-lg"
        >
          🚀 View Top-Rated Casinos
        </a>
      </section>
    </div>
  );
}
