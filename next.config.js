/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  future: {
    webpack5: true,
  },

  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
