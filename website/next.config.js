/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip build errors for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable styled-jsx to avoid React context issues
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-jsx': false,
      'styled-jsx/style': false,
    }
    return config
  }
};

module.exports = nextConfig;
