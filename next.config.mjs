// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'res.cloudinary.com',
//           port: '',
//           pathname: '/dpflidsbg/image/upload/**',
//         },
//       ],
//     },
//   };
  
//   export default nextConfig;
  

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/dpflidsbg/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'api-arcmeninterior.webdadsprojects.com',
        port: '',
        pathname: '/storage/posterimage/**',
      },
    ],
  },
};

export default nextConfig;
