/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features if needed
  experimental: {
    // appDir: true, // Uncomment if using Next.js 13+ with app directory
    // serverActions: true, // Uncomment if using Next.js 13+ server actions
  },
  // Environment variables that should be exposed to the browser
  env: {
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add custom webpack configurations here if needed
    // For example, to handle SVG imports:
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'],
    // });
    
    return config;
  },
  // i18n configuration for internationalization
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Redirects and rewrites
  async redirects() {
    return [
      // Example redirect:
      // {
      //   source: '/old-blog/:slug',
      //   destination: '/blog/:slug',
      //   permanent: true,
      // },
    ];
  },
  async rewrites() {
    return [
      // Example rewrite:
      // {
      //   source: '/api/:path*',
      //   destination: 'https://api.example.com/:path*',
      // },
    ];
  },
  // Add custom headers
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Add security headers
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
