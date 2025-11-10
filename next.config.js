/** @type {import('next').NextConfig} */
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { env } = require('process');

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }
];
const strapiUrl = env.NEXT_PUBLIC_STRAPI_URL

const nextConfig = {
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['drive.google.com','shutterstock.com',`${strapiUrl}/uploads/`, env.NEXT_PUBLIC_EVENTS_URL]
  },
  productionBrowserSourceMaps: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  rewrites: () => {
    return {
      beforeFiles: [
        {
          source: '/:uri*/eventos/_next/:path*',
          destination: `${env.NEXT_PUBLIC_EVENTS_URL}/eventos/_next/:path*`,
        },
        {
          source: '/:uri*/eventos',
          destination: `${env.NEXT_PUBLIC_EVENTS_URL}`
        },
        {
          source: '/:uri*/eventos/:path*',
          destination: `${env.NEXT_PUBLIC_EVENTS_URL}/:path*`
        },
        {
          source: '/admin/:path*',
          destination: `https://uane-admin.vercel.app/:path*`,
        },
      ]
    }
  },
  webpack: (config, { isServer }) => {
    // console.log(process.env.ANALYZE)
    // if (!!process.env.ANALYZE) {
    //  config.plugins.push(
    //    new BundleAnalyzerPlugin({
    //      analyzerMode: 'server',
    //      analyzerPort: isServer ? 8888 : 8889,
    //      openAnalyzer: true,
    //    })
    //  )
    // } else {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      })
    // }
    return config
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
  }
}

module.exports = nextConfig
