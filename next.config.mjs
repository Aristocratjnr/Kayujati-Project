/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Allow images from specified remote sources
      {
        protocol: "https",
        hostname: "ndvgcrdxhzwmqsrxevur.supabase.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "rpvrebhqvjdxtnleqhjd.supabase.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "dpapmfwavtnkkanrsved.supabase.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dunnrgy6t/**",
      },
    ],
  },
};

module.exports = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}
export default nextConfig;
