import * as React from 'react';
import { i18n } from '@lingui/core';
import { useRouter } from 'next/router';
import type { Messages } from '@lingui/core';

/**
 * Load messages for requested locale and activate it.
 * This function isn't part of the LinguiJS library because there are
 * many ways how to load messages — from REST API, from file, from cache, etc.
 */
export async function loadCatalog(locale: string) {
  // https://github.com/lingui/js-lingui/issues/1782
  // const catalog = await import(`@lingui/loader!./${locale}/index.po`);
  const catalog = await import(`./${locale}/index.po`);
  return catalog.messages;
}

export function useLinguiInit(messages: Messages) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale!;
  const isClient = typeof window !== 'undefined';

  if (!isClient && locale !== i18n.locale) {
    // there is single instance of i18n on the server
    // note: on the server, we could have an instance of i18n per supported locale
    // to avoid calling loadAndActivate for (worst case) each request, but right now that's what we do
    i18n.loadAndActivate({ locale, messages });
  }
  // https://github.com/lingui/js-lingui/issues/1814
  // if (isClient && i18n.locale === undefined) {
  if (isClient && !i18n.locale) {
    // first client render
    i18n.loadAndActivate({ locale, messages });
  }

  React.useEffect(() => {
    const localeDidChange = locale !== i18n.locale;
    if (localeDidChange) {
      i18n.loadAndActivate({ locale, messages });
    }
  }, [locale, messages]);

  return i18n;
}
