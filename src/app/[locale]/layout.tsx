import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { notFound } from 'next/navigation';
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieBanner from '@/components/CookieBanner';
import MainLayoutWrapper from '@/components/layout/MainWrapper';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';

const inter = Inter({ subsets: ["latin"] });

// Metadata para SEO
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  // Await params if necessary, though in current Next.js versions it might be synchronous or async depending on version.
  // Accessing properties directly is safe here as per current patterns, but awaiting params is safer for future-proof if it becomes a promise.
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: "Nadine Isabel Zeverino" }],
    creator: "Nadine Isabel Zeverino",
    publisher: "Nadine Isabel Zeverino - Advogada",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      }
    },
    alternates: {
      canonical: `https://www.nadinezeverino.com/${locale}`,
      languages: {
        'pt': 'https://www.nadinezeverino.com/pt',
        'en': 'https://www.nadinezeverino.com/en',
        'nl': 'https://www.nadinezeverino.com/nl',
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://www.nadinezeverino.com/${locale}`,
      siteName: "Nadine Isabel Zeverino - Advogada",
      images: [
        {
          url: "https://www.nadinezeverino.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Nadine Isabel Zeverino - Advogada em Portimão"
        }
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: ["https://www.nadinezeverino.com/images/og-image.jpg"],
      creator: "@nadinezeverino"
    },
    verification: {
      google: "WT2TGT7aQDWuFjmPrNjUcLvRjBQMtjG70jVSRibvaps",
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="WT2TGT7aQDWuFjmPrNjUcLvRjBQMtjG70jVSRibvaps" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <LocalBusinessSchema />
        <NextIntlClientProvider messages={messages}>
          <MainLayoutWrapper>
            {children}
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
              <GoogleAnalytics
                GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
              />
            )}
            <CookieBanner />
          </MainLayoutWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}