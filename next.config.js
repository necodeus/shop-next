/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: false, // default: true || Ustawiłem false, żeby na DEV nie wykonywało ponownie useEffect
  swcMinify: true,
}

module.exports = nextConfig
