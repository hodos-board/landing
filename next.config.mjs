/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/landing",
  assetPrefix: "/landing",
  trailingSlash: true,
};

export default nextConfig;
