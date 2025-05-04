/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // ❌ verwijderen of uitcommenten
  async redirects() {
    return [
      {
        source: '/bonussen',
        destination: '/best-crypto-casino-bonuses',
        permanent: true,
      },
      {
        source: '/bonuses',
        destination: '/best-crypto-casino-bonuses',
        permanent: true,
      },
      {
        source: '/crypto-casino-reviews/wildevegas',
        destination: '/crypto-casino-reviews/wildvegas',
        permanent: true,
      },
      {
        source: '/bonuses/vip-deals',
        destination: '/vip-deals',
        permanent: true,
      },
      {
        source: '/bonuses/no-deposit',
        destination: '/no-deposit',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
