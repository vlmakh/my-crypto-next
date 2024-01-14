/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-API-KEY",
            value: "r9FNSR3h4KySY93Gz9AJaYZMII+7fsxA7b1mvlPVQhY=",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
