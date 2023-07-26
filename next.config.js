/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: [
      'en-US',
      'ko-KR',
      'ja-JP',
      'de-DE',
      'es-ES',
      'fr-FR',
      'pt-PT',
      'fil-PH',
      'hi-IN',
      'th-TH',
      'vi-VN',
      'id-ID',
      'kk-KZ',
      'ru-RU',
      'uk-UA',
      'zh-TW',
    ],
    defaultLocale: 'en-US',
  },
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
};

module.exports = nextConfig;
