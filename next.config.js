/** @type {import('next').NextConfig} */
// i18n-config verwijderd ivm static export beperking
const nextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/bonussen',
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
