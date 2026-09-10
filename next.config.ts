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
      {
        source: "/parking-traffic",
        destination: "/smokies-parking-trolley-guide",
        permanent: true,
      },
      {
        source: "/visitor-info",
        destination: "/visitor-resources",
        permanent: true,
      },
      {
        source: "/home-v2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/report-a-correction",
        destination: "/corrections",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
