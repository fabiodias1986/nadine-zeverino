// app/[locale]/areas-de-atuacao/page.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'ServicesPage.meta' });

  const siteUrl = 'https://www.nadinezeverino.com';
  const locale = params.locale;
  const canonicalUrl = `${siteUrl}/${locale}/pratice-areas`;
  const ogImage = `${siteUrl}/images/og-image-services.jpg`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        pt: `${siteUrl}/pt/practice-areas`,
        en: `${siteUrl}/en/practice-areas`,
        nl: `${siteUrl}/nl/practice-areas`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: canonicalUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: t('ogImageAlt') }],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [ogImage],
    },
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}