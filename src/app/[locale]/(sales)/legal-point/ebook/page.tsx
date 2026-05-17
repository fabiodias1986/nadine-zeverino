import EbookHero from '@/components/legal-point/EbookHero';
import EbookIntroduction from '@/components/legal-point/EbookIntroduction';
import EbookFeatures from '@/components/legal-point/EbookFeatures';
import LegalNavbar from '@/components/legal-point/LegalNavbar';
import TrustBadges from '@/components/legal-point/TrustBadges';
import FinalCTA from '@/components/legal-point/FinalCTA';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'LegalPoint.Ebook.Metadata' });

  return {
    metadataBase: new URL('https://www.nadinezeverino.com'),
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/media/legal-point-logo.png',
      apple: '/media/legal-point-logo.png',
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      images: [
        {
          url: 'https://www.nadinezeverino.com/media/og-legal.jpg',
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
  };
}

export default async function EbookPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-[#C5A065] selection:text-black">
      <LegalNavbar />
      <EbookHero />
      <EbookIntroduction />
      <EbookFeatures />
      <div className="py-12 border-y border-white/5">
        <TrustBadges />
      </div>
      <div id="contact">
        <FinalCTA />
      </div>
    </div>
  );
}
