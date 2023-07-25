import nextConfig from './next.config.js';
import { LinguiConfig } from '@lingui/conf';

const linguiConfig: LinguiConfig = {
  locales: nextConfig.i18n!.locales,
  pseudoLocale: 'pseudo',
  sourceLocale: nextConfig.i18n?.defaultLocale,
  fallbackLocales: {
    default: 'en',
  },
  catalogs: [
    {
      path: '<rootDir>/src/locales/{locale}',
      include: ['src/'],
    },
  ],
  compileNamespace: 'ts',
};

export default linguiConfig;
