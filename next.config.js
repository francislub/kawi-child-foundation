module.exports = {
  images: {
    unoptimized: true, // If local images don't require optimization
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // Matches all paths under res.cloudinary.com
      },
    ],
  },
};
