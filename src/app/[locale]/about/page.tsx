// app/[locale]/sobre/page.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AboutPageClient from '@/components/pages/AboutPageClient';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'AboutPage.meta' });

  const siteUrl = 'https://www.nadinezeverino.com';
  const locale = params.locale;
  const canonicalUrl = `${siteUrl}/${locale}/sobre`;
  const ogImage = `${siteUrl}/images/og-image-about.jpg`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Nadine Isabel Zeverino' }],
    creator: 'Nadine Isabel Zeverino',
    publisher: 'Nadine Isabel Zeverino - Advogada',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        pt: `${siteUrl}/pt/about`,
        en: `${siteUrl}/en/about`,
        nl: `${siteUrl}/nl/about`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      siteName: 'Nadine Isabel Zeverino - Advogada',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [ogImage],
      creator: '@nadinezeverino',
    },
  };
}

// This is a Server Component — no "use client"
export default function SobrePage() {
  return <AboutPageClient />;
}