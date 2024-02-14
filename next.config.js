/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.coinstats.app',
        port: '',
        // pathname: "/account123/**",
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'captainaltcoin.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'en.coin-turk.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
