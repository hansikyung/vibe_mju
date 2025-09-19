import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async () => {
  // 현재 locale을 가져옵니다
  const locale = await import('next-intl/server').then(({ getLocale }) => getLocale());

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
