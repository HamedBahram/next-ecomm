/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['cdn.schema.io']
  }
}

module.exports = nextConfig
