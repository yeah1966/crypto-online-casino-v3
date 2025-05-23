import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Wagering Requirements Explained – Crypto Casino Bonus Guide",
  description: "Understand how wagering requirements work in crypto casinos. Learn the difference between bonus-only and deposit+bonus terms, and how to unlock your winnings.",
  openGraph: {
    title: "Wagering Requirements Explained – Crypto Casino Bonus Guide",
    description: "Learn what wagering requirements mean and how to beat them. Find crypto casinos with fair bonus terms and faster cashouts.",
    url: "https://crypto-online-casino.com/guides/wagering-explained",
    images: [
      {
        url: "/images/wagering-requirements-explained.webp",
        width: 1200,
        height: 630,
        alt: "Wagering Requirements Bonus Guide OG-image",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wagering Requirements Explained – Crypto Casino Bonus Guide",
    description: "Learn what wagering requirements mean and how to beat them. Find crypto casinos with fair bonus terms and faster cashouts.",
    images: ["/images/wagering-requirements-explained.webp"],
  },
  alternates: {
    canonical: "/guides/wagering-explained",
  },
};

export default function WageringExplainedPage() {
  // Structured Data JSON-LD (Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Wagering Requirements Explained – Crypto Casino Bonus Guide",
    "description": "Understand how wagering requirements work in crypto casinos. Learn the difference between bonus-only and deposit+bonus terms, and how to unlock your winnings.",
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
    "image": "https://crypto-online-casino.com/images/wagering-requirements-explained.webp",
    "url": "https://crypto-online-casino.com/guides/wagering-explained",
    "datePublished": "2025-05-21",
    "dateModified": "2025-05-21"
  };

  return (
    <div className="relative w-full min-h-screen z-10 px-4 md:px-8 py-16 max-w-6xl mx-auto text-white space-y-12">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Achtergrond en overlay */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-cover bg-center will-change-transform" style={{ backgroundImage: "url('/images/crypto-casino-online.webp')" }} aria-hidden="true" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-black/65 backdrop-blur-sm" aria-hidden="true" />

      {/* Inhoud */}
      <section className="max-w-3xl space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
          🎲 Wagering Requirements Explained
        </h1>

        <p>
          You just claimed a generous welcome bonus at a crypto casino — but now you're told you can’t withdraw your winnings yet. Sound familiar? That's where <strong>wagering requirements</strong> come in.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">💡 What Are Wagering Requirements?</h2>
        <p>
          A wagering requirement (also called rollover) is the number of times you must bet your bonus (or bonus + deposit) before you can withdraw any winnings. It's how casinos protect themselves from abuse.
        </p>
        <p>
          Example: A 100 USDT bonus with a 30x wagering requirement = you must wager 3,000 USDT before withdrawing.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">📊 Types of Wagering Terms</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Bonus only:</strong> Only the bonus amount must be wagered (e.g. 30x bonus).</li>
          <li><strong>Deposit + Bonus:</strong> Both amounts must be wagered (e.g. 40x D+B).</li>
          <li><strong>Winnings from Free Spins:</strong> Often have lower requirements (e.g. 10x).</li>
          <li><strong>Game weighting:</strong> Slots usually count 100%, but table games might count 10% or less.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">🚩 What to Watch Out For</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Max bet limits:</strong> Going over 5 USDT per spin might void your bonus.</li>
          <li><strong>Bonus expiry:</strong> Some bonuses expire after 7–14 days.</li>
          <li><strong>Excluded games:</strong> Not all games count toward the requirement.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">🎯 How to Beat the Wagering System</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Choose bonuses with low wagering (20–30x)</li>
          <li>Play high RTP slots to stretch your playtime</li>
          <li>Keep track of your progress — some casinos show a wagering bar</li>
        </ul>

        <p>
          Wagering requirements aren't a scam — they're just the rules of the game. But understanding them gives you the edge.
        </p>
      </section>

      {/* OG-image */}
      <div className="max-w-2xl mx-auto">
        <Image
          src="/images/wagering-explained.webp"
          alt="Wagering Requirements Explained"
          width={800}
          height={400}
          className="w-full rounded-xl shadow-lg mt-8"
        />
      </div>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-lg text-white/80 mb-4">Want to find crypto casinos with the fairest bonus terms?</p>
        <a
          href="/best-crypto-casino-bonuses"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition shadow-lg"
        >
          🎁 View Bonus-Friendly Casinos
        </a>
      </section>
    </div>
  );
}

