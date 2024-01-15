/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.coinstats.app",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
