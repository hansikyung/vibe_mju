import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 지원하는 언어 목록
  locales: ['ko', 'en'],
  
  // 기본 언어 (언어가 매치되지 않을 때 사용)
  defaultLocale: 'ko'
});
