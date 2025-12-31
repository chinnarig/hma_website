/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable standalone output for Docker
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'heymello.ai',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'production', // For static export compatibility
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8001',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  // Set workspace root to silence warning
  outputFileTracingRoot: __dirname,
  // Compress output
  compress: true,
}

module.exports = nextConfig
