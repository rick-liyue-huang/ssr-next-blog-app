/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: 'SSR-BLOG',
    API_DEVELOPMENT: 'http://localhost:8080/api',
    PRODUCTION: false
  }
}

module.exports = nextConfig
