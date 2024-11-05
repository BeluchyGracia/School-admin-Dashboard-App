// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [{ hostname: "images.pexels.com" }],
//   },
// };

// export default nextConfig;

// next.config.js

export default {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

