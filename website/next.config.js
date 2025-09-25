/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',

  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Image optimization for Docker
  images: {
    domains: [],
    unoptimized: false,
  },

  // Skip static generation for error pages to avoid styled-jsx issues
  experimental: {
    workerThreads: false,
    cpus: 1
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

module.exports = nextConfig;
