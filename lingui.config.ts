import nextConfig from './next.config.js';
import type { LinguiConfig } from '@lingui/conf';

const linguiConfig: LinguiConfig = {
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}/index',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  locales: nextConfig.i18n!.locales,
  pseudoLocale: 'pseudo',
  sourceLocale: nextConfig.i18n?.defaultLocale,
  fallbackLocales: {
    default: 'en',
  },
  compileNamespace: 'ts',
};

export default linguiConfig;
