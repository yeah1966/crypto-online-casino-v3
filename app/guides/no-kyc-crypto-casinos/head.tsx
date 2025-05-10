// SEO head for /guides/no-kyc-crypto-casinos
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'No KYC Crypto Casinos – Play Anonymously & Instantly (2025 Guide)', // max 60 chars
  description: 'Discover the best No KYC Crypto Casinos for anonymous gambling. No ID, instant crypto play, safe & private. Full 2025 guide!', // max 160 chars
  keywords: [
    'No KYC Crypto Casinos',
    'anonymous gambling',
    'crypto casino no verification',
    'bitcoin casino',
    'no id casino',
    'private gambling',
    'crypto casinos 2025'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'No KYC Crypto Casinos – Play Anonymously & Instantly (2025 Guide)',
    description: 'Discover the best No KYC Crypto Casinos for anonymous gambling. No ID, instant crypto play, safe & private. Full 2025 guide!',
    url: 'https://crypto-online-casino.com/guides/no-kyc-crypto-casinos',
    type: 'article',
    images: [
      {
        url: '/og/crypto-casino-online.png',
        width: 1200,
        height: 630,
        alt: 'No KYC Crypto Casinos – Play Anonymously',
      },
      {
        url: '/favicon-512.png',
        width: 512,
        height: 512,
        alt: 'Crypto Casino Mascot',
      }
    ]
  },
  metadataBase: new URL('https://crypto-online-casino.com'),
};

export default function Head() {
  return null;
}
