'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navigationItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'admission', href: '/admission' },
    { key: 'academic', href: '/academic' },
    { key: 'scholarship', href: '/scholarship' },
    { key: 'career', href: '/career' },
    { key: 'international', href: '/international' },
    { key: 'alumni', href: '/alumni' },
    { key: 'community', href: '/community' },
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'ko' ? 'en' : 'ko';
    const newPath = pathname.startsWith(`/${locale}`) 
      ? pathname.replace(`/${locale}`, `/${newLocale}`)
      : `/${newLocale}${pathname}`;
    router.push(newPath);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MJU</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                명지대학교
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {locale === 'ko' ? 'EN' : '한국어'}
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              로그인
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
