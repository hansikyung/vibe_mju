import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "명지대학교 공식 홈페이지 | Myongji University",
  description: "진리·사랑·봉사의 건학이념을 바탕으로 한 명지대학교 공식 홈페이지입니다. 학사정보, 입학안내, 장학금, 취업지원, 국제교류 등 모든 정보를 한 곳에서 확인하세요.",
  keywords: "명지대학교, Myongji University, 대학교, 입학, 학사정보, 장학금, 취업지원",
  authors: [{ name: "명지대학교" }],
  openGraph: {
    title: "명지대학교 공식 홈페이지",
    description: "진리·사랑·봉사의 건학이념을 바탕으로 한 명지대학교",
    type: "website",
    locale: "ko_KR",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
