// app/[locale]/page.tsx
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Services from '@/components/sections/Services';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import Profile from '@/components/sections/Profile';
import Process from '@/components/sections/Process';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GoogleReviews from '@/components/sections/GoogleReviews';
import FAQ from '@/components/sections/FAQ';

export async function generateMetadata({
  params
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'HomePage.meta' });

  const siteUrl = 'https://www.nadinezeverino.com';
  const locale = params.locale;
  const canonicalUrl = `${siteUrl}/${locale}`;
  const ogImage = `${siteUrl}/images/og-image-home.jpg`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        pt: `${siteUrl}/pt`,
        en: `${siteUrl}/en`,
        nl: `${siteUrl}/nl`,
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Hero />
      <Profile />
      <Services /> 
      <WhyChooseUs />
      <Process />
      <GoogleReviews />
      <CTA />
      <FAQ />
    </div>
  );
}