import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/plan-your-trip",
        destination: "/start-planning",
        permanent: true,
      },
      {
        source: "/cades-cove-first-time-guide",
        destination: "/cades-cove",
        permanent: true,
      },
      {
        source: "/see/cades-cove",
        destination: "/cades-cove",
        permanent: true,
      },
      {
        source: "/do/free-and-cheap",
        destination: "/free-and-cheap-smokies",
        permanent: true,
      },
      {
        source: "/do/rainy-day",
        destination: "/rainy-day",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
