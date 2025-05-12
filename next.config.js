const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/reviews/:slug',
        destination: '/crypto-casino-reviews/:slug',
        permanent: true,
      },
      {
        source: '/crypto-casino-reviews/dreams-casino',
        destination: '/crypto-casino-reviews/dreams',
        permanent: true,
      },
      {
        source: '/crypto-casino-reviews/7bit-casino',
        destination: '/crypto-casino-reviews/7bit',
        permanent: true,
      },
      {
        source: '/crypto-casino-reviews/cryptoloko',
        destination: '/crypto-casino-reviews/crypto-loko',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
