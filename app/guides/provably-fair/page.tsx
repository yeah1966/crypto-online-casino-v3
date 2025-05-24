import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Provably Fair Gambling – How Blockchain Proves Casino Fairness",
  description: "Learn how provably fair gambling works and how to verify your crypto casino results. Discover the technology behind fair play on the blockchain.",
  openGraph: {
    title: "Provably Fair Gambling – How Blockchain Proves Casino Fairness",
    description: "Discover how provably fair games use cryptography to ensure fair results. Learn to verify every spin, roll, or deal in crypto casinos.",
    url: "https://crypto-online-casino.com/guides/provably-fair",
    images: [
      {
        url: "/images/provably-fair-gambling-explained.webp",
        width: 1200,
        height: 630,
        alt: "Provably Fair Gambling Explained OG-image",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Provably Fair Gambling – How Blockchain Proves Casino Fairness",
    description: "Discover how provably fair games use cryptography to ensure fair results. Learn to verify every spin, roll, or deal in crypto casinos.",
    images: ["/images/provably-fair-gambling-explained.webp"],
  },
  alternates: {
    canonical: "/guides/provably-fair",
  },
};

export default function ProvablyFairPage() {
  // Structured Data JSON-LD (Article)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Provably Fair Gambling – How Blockchain Proves Casino Fairness",
    "description": "Learn how provably fair gambling works and how to verify your crypto casino results. Discover the technology behind fair play on the blockchain.",
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
    "image": "https://crypto-online-casino.com/images/provably-fair-gambling-explained.webp",
    "url": "https://crypto-online-casino.com/guides/provably-fair",
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
          🎯 Provably Fair Gambling Explained
        </h1>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p>
          Provably fair technology lets you verify every casino result with cryptographic proof — no more blind trust.<br/>
          Tired of trusting casinos blindly? Provably fair gambling lets you verify every outcome instantly. This crypto-native innovation is changing the game for players who want real transparency.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">🔐 What Does &quot;Provably Fair&quot; Mean?</h2>
        <p>
          &quot;Provably fair&quot; is a cryptographic system that proves the fairness of each result without relying on a central authority. It is transparent, verifiable, and decentralized, making it ideal for crypto gambling.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400">⚙️ How It Works</h2>
        <p>
          The process may sound complex, but it is easy to understand once you break it down:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>The casino generates a server seed and hashes it (for example, SHA-256)</li>
          <li>Your browser or wallet adds a client seed</li>
          <li>Both are combined with a nonce, a number that increases with each bet</li>
          <li>The final hash determines the outcome, which you can verify afterwards</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">✅ Why Players Love It</h2>
        <p>
          More than just a feature, it is a trust layer. Players enjoy peace of mind and total transparency with every spin, roll, or deal.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>No manipulation. Results are locked in before you play</li>
          <li>Anyone can check outcomes with open-source tools</li>
          <li>Great for anonymous or no-KYC casinos</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-400">🧠 What to Watch Out For</h2>
        <p>
          Not all casinos implement this feature properly. Some label games as &quot;provably fair&quot; but provide no tools to verify results.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Make sure the site actually provides hash and seed data</li>
          <li>Use third-party validators when available</li>
          <li>Remember, it proves fairness, not winning odds</li>
        </ul>
      </section>

      {/* OG-image */}
      <div className="max-w-2xl mx-auto">
        <Image
          src="/images/provably-fair-gambling.webp"
          alt="Provably Fair Gambling Explained"
          width={800}
          height={400}
          className="w-full rounded-xl shadow-lg mt-8"
        />
      </div>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-lg text-white/80 mb-4">Want to gamble with total transparency?</p>
        <Link
          href="/crypto-casino-reviews"
          className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition shadow-lg"
        >
          🔍 Explore Provably Fair Casinos
        </Link>
      </section>
    </div>
  );
}
