/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '', // Only for production
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add trailingSlash for GitHub Pages compatibility
  trailingSlash: true,
  webpack(config) {
    return config;
  },
}

module.exports = nextConfig 