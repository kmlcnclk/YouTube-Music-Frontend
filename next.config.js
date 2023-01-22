const { SERVER_DIRECTORY } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  return {
    reactStrictMode: false,
    images: {
      domains: ['youtube-music-backend.vercel.app', 'res.cloudinary.com'],
    },
  };
};
