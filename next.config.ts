import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["query-string"]
  }
};

export default nextConfig;
