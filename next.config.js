const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config, _context) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
