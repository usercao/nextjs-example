/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'sr', 'es', 'pseudo'],
    defaultLocale: 'en',
  },
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
};

module.exports = nextConfig;
