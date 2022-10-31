/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost:3000',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
  nextConfig
}
