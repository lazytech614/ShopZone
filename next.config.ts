// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     domains: ["res.cloudinary.com"],
//   }
// };

// export default nextConfig;

// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["query-string"] // Add problematic packages here
  },
  webpack: (config: any) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src')
    };
    return config;
  }
};

module.exports = nextConfig;
