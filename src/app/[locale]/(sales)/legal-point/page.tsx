import LegalHero from '@/components/legal-point/LegalHero';
import TrustBadges from '@/components/legal-point/TrustBadges';
import ServiceGridLuxury from '@/components/legal-point/ServiceGridLuxury';
import WhyChoosePortugal from '@/components/legal-point/WhyChoosePortugal';
import ProcessTimeline from '@/components/legal-point/ProcessTimeline';
import FinalCTA from '@/components/legal-point/FinalCTA';
import LegalAbout from '@/components/legal-point/LegalAbout';
import LegalNavbar from '@/components/legal-point/LegalNavbar';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'LegalPoint.Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      images: [
        {
          url: '/media/hero.jpg', // Using the Legal Point Hero image
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
  };
}

export default function LegalPointPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-[#C5A065] selection:text-black">
      <LegalNavbar />
      <div id="hero"><LegalHero /></div>
      <div id="services"><ServiceGridLuxury /></div>
      <ProcessTimeline />
      <TrustBadges />
      <div id="why-portugal"><WhyChoosePortugal /></div>
      <div id="about"><LegalAbout /></div>
      <div id="contact"><FinalCTA /></div>
    </div>
  );
}