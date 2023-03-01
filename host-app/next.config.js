/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['http://localhost:3000'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    })

    return config
  },
}
