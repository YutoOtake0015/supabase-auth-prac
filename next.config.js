/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["https://nhitvvgveztdeveqlqjj.supabase.co"],
  },
};

module.exports = nextConfig;
