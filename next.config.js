/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
      images: {
        domains: ['avatars.githubusercontent.com','placeimg.com','www.facebook.com'],
      },
      experimental: { 
        images: { allowFutureImage: true } 
      },
}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */ 

// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['flowbite.s3.amazonaws.com','placeimg.com','www.facebook.com'],
//   },
//   experimental: { 
//     images: { allowFutureImage: true } },
// }

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['api.lorem.space'],
//   } 
// }
