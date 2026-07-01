/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline'
  }
};

module.exports = nextConfig;
