/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true, // Perfect for static CDN export (Netlify, Cloudflare Pages, Vercel)
  },
  // Allows clean URLs
  trailingSlash: false,
};

module.exports = nextConfig;
