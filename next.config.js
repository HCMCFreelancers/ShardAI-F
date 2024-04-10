/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(webm|mp4)$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig
