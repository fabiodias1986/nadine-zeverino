'use client'

import {useTranslations} from 'next-intl';
import Services from '@/components/sections/Services';
import Hero from '@/components/sections/Hero';
import CTA from '@/components/sections/CTA';
import Profile from '@/components/sections/Profile'
import Process from '@/components/sections/Process'
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import GoogleReviews from '@/components/sections/GoogleReviews';
import FAQ from '@/components/sections/FAQ';

export default function HomePage() {
  const t = useTranslations('HomePage');
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