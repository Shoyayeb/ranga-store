/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tailwindui.com',
          },
          {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
        },
        {
            protocol:'https',
            hostname: 'img.freepik.com',
          }
        ],
        dangerouslyAllowSVG:true,
      },
}

module.exports = nextConfig
