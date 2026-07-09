import LegalHero from '@/components/legal-point/LegalHero';
import TrustBadges from '@/components/legal-point/TrustBadges';
import ServiceGridLuxury from '@/components/legal-point/ServiceGridLuxury';
import WhyChoosePortugal from '@/components/legal-point/WhyChoosePortugal';
import ProcessTimeline from '@/components/legal-point/ProcessTimeline';
import FinalCTA from '@/components/legal-point/FinalCTA';
import LegalAbout from '@/components/legal-point/LegalAbout';
import LegalNavbar from '@/components/legal-point/LegalNavbar';
import LeadMagnetPopup from '@/components/legal-point/LeadMagnetPopup';
import EbookPromoSection from '@/components/legal-point/EbookPromoSection';
import LegalIntroduction from '@/components/legal-point/LegalIntroduction';
import ContactForm from '@/components/legal-point/ContactForm';
import Testimonials from '@/components/legal-point/Testimonials';
import LegalSchema from '@/components/legal-point/LegalSchema';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'LegalPoint.Metadata' });

  return {
    metadataBase: new URL('https://www.nadinezeverino.com'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
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
      canonical: `https://www.nadinezeverino.com/${locale}/legal-point`,
      languages: {
        'pt': 'https://www.nadinezeverino.com/pt/legal-point',
        'en': 'https://www.nadinezeverino.com/en/legal-point',
        'nl': 'https://www.nadinezeverino.com/nl/legal-point',
      }
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://www.nadinezeverino.com/${locale}/legal-point`,
      siteName: 'Legal Point by Nadine Zeverino',
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
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['https://www.nadinezeverino.com/media/og-legal.jpg'],
    },
    icons: {
      icon: '/media/legal-point-logo.png?v=2',
      apple: '/media/legal-point-logo.png?v=2',
    },
  };
}

export default function LegalPointPage() {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-[#C5A065] selection:text-black">
      <LegalSchema />
      <LeadMagnetPopup />
      <LegalNavbar />
      <div id="hero"><LegalHero /></div>
      <TrustBadges />
      <LegalIntroduction />
      <div id="services"><ServiceGridLuxury /></div>
      <EbookPromoSection />
      <ProcessTimeline />
      <div id="why-portugal"><WhyChoosePortugal /></div>
      <Testimonials />
      <div id="about"><LegalAbout /></div>
      <ContactForm />
      <div id="contact"><FinalCTA /></div>
    </div>
  );
}