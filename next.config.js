/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      'media-exp1.licdn.com',
      'avatars.githubusercontent.com',
      
    ]
  }
}

module.exports = nextConfig
