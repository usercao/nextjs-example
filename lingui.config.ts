import nextConfig from './next.config.js';
import type { LinguiConfig } from '@lingui/conf';

const { locales, defaultLocale } = nextConfig.i18n!;

const linguiConfig: LinguiConfig = {
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/index',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  locales: locales,
  fallbackLocales: {
    default: defaultLocale,
  },
  sourceLocale: defaultLocale,
};

export default linguiConfig;
