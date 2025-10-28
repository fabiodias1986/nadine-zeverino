// app/[locale]/contactos/page.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ContactPageClient from '@/components/pages/ContactPageClient';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'ContactPage.meta' });

  const siteUrl = 'https://www.nadinezeverino.com';
  const locale = params.locale;
  const canonicalUrl = `${siteUrl}/${locale}/contactos`;
  const ogImage = `${siteUrl}/images/og-image-contact.jpg`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        pt: `${siteUrl}/pt/contact`,
        en: `${siteUrl}/en/contact`,
        nl: `${siteUrl}/nl/contact`,
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

export default function ContactPage() {
  return <ContactPageClient />;
}