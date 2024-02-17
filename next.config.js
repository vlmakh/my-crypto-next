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
    ],
    domains: [
      'en.bitcoinhaber.net',
      'statics.ambcrypto.com',
      'en.coin-turk.com',
      'coin-turk.com',
      'image.coinpedia.org',
      'static.coinstats.app',
      'u.today',
      'coingape.com',
      'www.tbstat.com',
      'cdn.decrypt.co',
      'www.cryptopolitan.com',
      'captainaltcoin.com',
      'blockchainreporter.net',
      'www.youtube.com',
      'cryptodaily.blob.core.windows.net',
      'coinedition.com',
      'bitcoinworld.co.in',
      'cryptoslate.com',
    ],
  },
};

module.exports = nextConfig;
