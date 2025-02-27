/**
 * 
 */

/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    mode: 'development',
    REACT_APP_BACKEND_URL:"http://localhost:5000",
    REACT_APP_SECRET_KEY:"verysecretkey",
    SERVER_SIDE_PAGE_TRANSITION: false,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

