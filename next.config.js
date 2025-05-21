/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/comments/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/bonuses/no-deposit',
        destination: '/no-deposit',
        permanent: true,
      },
    ];
  },
  experimental: {
    mdxRs: true,
    serverActions: {}, // Changed from boolean to object
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    // Voor lokale of whitelisted bronnen, geen DALL·E meer
    domains: [],
  },
};

module.exports = nextConfig;
