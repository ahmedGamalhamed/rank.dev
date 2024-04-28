/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'getstream.imgix.net',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

export default nextConfig;
