// import '@/styles/globals.css';
// import type { AppProps } from 'next/app';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import '@/assets/styles/uno.css';
import GlobalStyles from '@/assets/styles/_global';
import { StyleSheetManager } from 'styled-components';

import { Provider } from 'jotai';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import type { AppProps } from 'next/app';
import { useLinguiInit } from '../locales';

function MyApp({ Component, pageProps }: AppProps) {
  useLinguiInit(pageProps.translation);

  return (
    <>
      <GlobalStyles />
      <StyleSheetManager enableVendorPrefixes>
        <Provider>
          <I18nProvider i18n={i18n}>
            <Component {...pageProps} />
          </I18nProvider>
        </Provider>
      </StyleSheetManager>
    </>
  );
}

export default MyApp;
