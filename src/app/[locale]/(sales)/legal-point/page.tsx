import LegalHero from '@/components/legal-point/LegalHero';
import TrustBadges from '@/components/legal-point/TrustBadges';
import ServiceGridLuxury from '@/components/legal-point/ServiceGridLuxury';
import WhyChoosePortugal from '@/components/legal-point/WhyChoosePortugal';
import ProcessTimeline from '@/components/legal-point/ProcessTimeline';
import FinalCTA from '@/components/legal-point/FinalCTA';
import LegalAbout from '@/components/legal-point/LegalAbout';
import LegalNavbar from '@/components/legal-point/LegalNavbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Point | Luxury Legal Services Portugal',
  description: 'Exclusive legal representation for international investors in Portugal. Real Estate, Golden Visa, and Asset Protection.',
};

export default function LegalPointPage() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-[#C5A065] selection:text-black">
      <LegalNavbar />
      <div id="hero"><LegalHero /></div>
      <div id="services"><ServiceGridLuxury /></div>
      <ProcessTimeline />
      <TrustBadges />
      <div id="why-portugal"><WhyChoosePortugal /></div>
      <div id="about"><LegalAbout /></div>
      <div id="contact"><FinalCTA /></div>
    </main>
  );
}