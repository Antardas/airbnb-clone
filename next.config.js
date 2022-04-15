/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    MAP_BOX_KEY: 'pk.eyJ1IjoicXVhbHl2YWwtYW50YXIiLCJhIjoiY2wxeXRyODV2MGFzcDNkdGMxd2t4NTAyaCJ9.8mv-KilN7eCpMsv2Hr1p6w',
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET
  }
}

module.exports = nextConfig
