import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'public.baladapp.com.br',
        port: '',
        pathname: '/**',
        search: '',
      },
    ]
  }
};

export default nextConfig;

