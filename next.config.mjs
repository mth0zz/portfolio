/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
module.exports = {
  eslint: {
    ignoreDuringBuilds: true, // Ini akan menonaktifkan ESLint saat proses build
  },
};
