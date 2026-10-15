/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  
  transpilePackages: ['react-map-gl', 'mapbox-gl'],
};

export default nextConfig;