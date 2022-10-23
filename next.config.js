/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://firebasestorage.googleapis.com/",
      "https://firebasestorage.googleapis.com/v0/b/quiscence-704f0.appspot.com/",
      "firebasestorage.googleapis.com",
      "https://firebasestorage.googleapis.com/v0/b/quiscence-704f0.appspot.com/o/",
    ],
  },
};

module.exports = nextConfig;
