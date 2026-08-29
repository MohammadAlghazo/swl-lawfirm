/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow all local images from /public folder
    formats: ["image/webp", "image/avif"],
    // Domain whitelist for future external images
    remotePatterns: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
export default nextConfig;
