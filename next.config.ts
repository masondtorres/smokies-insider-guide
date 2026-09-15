import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
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
        source: "/go/parking",
        destination: "/parking-traffic",
        permanent: false,
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
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
