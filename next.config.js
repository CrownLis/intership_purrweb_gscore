const path = require("path");
const webpack = require('webpack')
const resolvePath = (p) => path.resolve(__dirname, p);

/** @type {import('next').NextConfig} */

module.exports = { 
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    }),
    config.plugins.push(new webpack.ProvidePlugin({
      React:'react',
      sv:[
        path.resolve(__dirname,'./src/theme.ts'),
        'default'
      ]
    }))
    return config
  },
 
}

