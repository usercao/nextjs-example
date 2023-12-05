/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['ahooks'],
  i18n: {
    locales: [
      'en-US',
      // 'ko-KR',
      // 'ja-JP',
      // 'de-DE',
      'es-ES',
      // 'fr-FR',
      // 'pt-PT',
      // 'fil-PH',
      // 'hi-IN',
      // 'th-TH',
      // 'vi-VN',
      // 'id-ID',
      // 'kk-KZ',
      'ru-RU',
      // 'uk-UA',
      // 'zh-TW',
    ],
    defaultLocale: 'en-US',
    localeDetection: false,
  },
  experimental: {
    swcPlugins: [
      ['@lingui/swc-plugin', {}],
      ['@swc-jotai/react-refresh', {}],
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp4$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/media/[hash][ext][query]',
      },
    });
    config.module.rules.push({
      test: /\.po$/,
      use: {
        loader: '@lingui/loader',
      },
    });
    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/v1/:path*',
  //       destination: 'https://test.com/api/v1/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
