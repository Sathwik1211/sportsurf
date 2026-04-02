/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Optional: Disable image optimization API if it's eating up too many threads on cPanel
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
