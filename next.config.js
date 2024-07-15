/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'phoenix-spaces.fra1.digitaloceanspaces.com'
      },
      {
        protocol: 'https',
        hostname: 'monieworx.com'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https: wss:; img-src 'self' data: https:; style-src 'self' https://fonts.googleapis.com https://embed.tawk.to 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com https://embed.tawk.to; base-uri 'self'; script-src 'self' https: 'unsafe-inline' https://embed.tawk.to 'unsafe-eval';"
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Permissions-Policy',
            value: "accelerometer=(self), autoplay=(self), camera=(self), cross-origin-isolated=(self), display-capture=(self), encrypted-media=(self), fullscreen=(self), geolocation=(self), gyroscope=(self), magnetometer=(self), microphone=(self), midi=(self), payment=(self), picture-in-picture=*, publickey-credentials-get=(self), screen-wake-lock=(self), usb=(self), web-share=(self), xr-spatial-tracking=(self)"
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
