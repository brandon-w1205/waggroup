/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media-exp1.licdn.com',
      'avatars.githubusercontent.com',
      
    ]
  }
}

module.exports = nextConfig
