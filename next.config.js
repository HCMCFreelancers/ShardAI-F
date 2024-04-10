/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    const prefix = config.assetPrefix ?? config.basePath ?? "";
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
