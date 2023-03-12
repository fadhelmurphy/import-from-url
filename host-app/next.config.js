/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://raw.githubusercontent.com', "https://mir-s3-cdn-cf.behance.net/"],
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
