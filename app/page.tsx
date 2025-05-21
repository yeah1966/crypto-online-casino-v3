import React from 'react';
import HomeClient from './HomeClient';
import MagicConsent from './components/MagicConsent';

export const generateMetadata = () => ({
  title: "Crypto Online Casino | Vegas-style gambling meets crypto rewards",
  description: "Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!",
  openGraph: {
    title: "Crypto Online Casino | Vegas-style gambling meets crypto rewards",
    description: "Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!",
    url: "https://crypto-online-casino.com/",
    type: "website",
    images: [
      {
        url: "https://crypto-online-casino.com/og/crypto-online-casino.png",
        width: 1200,
        height: 630,
        alt: "Crypto Online Casino Homepage"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Online Casino | Vegas-style gambling meets crypto rewards",
    description: "Explore top-rated crypto casinos with thrilling bonuses, fast payouts, and a Las Vegas vibe. Welcome to Crypto Online Casino!",
    images: ["https://crypto-online-casino.com/og/crypto-online-casino.png"]
  },
  alternates: {
    canonical: "https://crypto-online-casino.com/"
  }
});

export default function Home() {
  return (
    <>
      {/* FAQ Structured Data for Google Rich Results */}
      <div style={{ display: 'none' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': 'What is a crypto casino?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'A crypto casino is an online casino that accepts cryptocurrencies like Bitcoin, Ethereum, or Litecoin for deposits and withdrawals. They offer fast, anonymous payments and exclusive bonuses for crypto users.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Are crypto casinos safe?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The best crypto casinos are licensed and use secure technology. Always check our reviews for the most trusted sites.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'Which cryptocurrencies can I use?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Most sites accept Bitcoin, Ethereum, Litecoin, USDT, and sometimes Dogecoin or other altcoins.'
                  }
                },
                {
                  '@type': 'Question',
                  'name': 'How do I claim a crypto casino bonus?',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Simply register at one of the top sites listed above, make a deposit with your favorite crypto, and activate the bonus from the promotions page. Some casinos offer no deposit bonuses for new players.'
                  }
                }
              ]
            })
          }}
        />
      </div>
      <MagicConsent />
      <HomeClient />
    </>
  );
}
