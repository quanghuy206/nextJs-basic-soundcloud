/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/audio/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'audio/mpeg',
          },
        ],
      },
    ];
  },
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|mpe?g)$/i,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            publicPath: `/_next/static/media/`,
            outputPath: `${isServer ? "../" : ""}static/media/`,
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
