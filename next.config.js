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
      'pbs.twimg.com',
      'www.cointribune.com',
      'coinotag.b-cdn.net',
      'i0.wp.com',
      'static.news.bitcoin.com',
      'coinfomania.com',
      'dlnews-dlnews-prod.web.arc-cdn.net',
      'app.chainwire.org',
      'res.coinpaper.com',
      'cryptobenelux.com',
      'ambcrypto.com',
      'coincu.com',
      'invezz.com',
      'cdn.bankless.com',
      '150601093.v2.pressablecdn.com',
      'cryptoticker-strapi-media.s3.eu-central-1.amazonaws.com',
    ],
  },
};

module.exports = nextConfig;
