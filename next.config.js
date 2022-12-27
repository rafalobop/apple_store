/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol:'https',
        hostname: 'assets.stickpng.com'
      }
    ],
    minimumCacheTTL: 1500000
  }
  /*  images: {
    domains: ["cdn.sanity.io", "assets.stickpng.com"]
  } */
}
