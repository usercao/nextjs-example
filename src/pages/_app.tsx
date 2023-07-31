// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import '@/assets/styles/uno.css';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useLinguiInit } from '../locales';

function MyApp({ Component, pageProps }: AppProps) {
  useLinguiInit(pageProps.translation);

  return (
    <>
      <I18nProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nProvider>
    </>
  );
}

export default MyApp;
