/** @type {import('next').NextConfig} */
const nextConfig = {
  htmlLimitedBots: /.*/,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
    minimumCacheTTL: 86400, // Cache images for 24 hours
    remotePatterns: [],
  },

  // Compress responses
  compress: true,

};

export default nextConfig;
