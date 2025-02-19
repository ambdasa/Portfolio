/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '', // Only for production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  
  images: {
    unoptimized: true
  },
  // Add trailingSlash for GitHub Pages compatibility
  trailingSlash: true,
  webpack(config) {
    return config;
  },
}

module.exports = nextConfig 