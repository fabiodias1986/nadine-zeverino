// app/[locale]/sobre/AboutPageClient.tsx
'use client';

import Image from 'next/image';
import MeetingCTA from '@/components/MeetingCTA';
import PageHeader from '@/components/layout/PageHeader';
import { useTranslations } from 'next-intl';
import { Scale, Users, Building, Home, Gavel, Shield } from 'lucide-react';

export default function AboutPageClient() {
  const t = useTranslations('AboutPage');
  
  const specialties = [
    { name: t('specialties.family'), icon: Scale },
    { name: t('specialties.commercial'), icon: Building },
    { name: t('specialties.realEstate'), icon: Home },
    { name: t('specialties.criminal'), icon: Gavel }
  ];

  const values = [
    { 
      title: t('values.ethics.title'), 
      description: t('values.ethics.description'),
      icon: Shield,
      color: "text-blue-500"
    },
    { 
      title: t('values.excellence.title'), 
      description: t('values.excellence.description'),
      icon: "⭐",
      color: "text-yellow-500"
    },
    { 
      title: t('values.proximity.title'), 
      description: t('values.proximity.description'),
      icon: Users,
      color: "text-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
      />

      <div className="container mx-auto px-6 max-w-7xl -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Profile Image Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl border-2 border-gray-300 shadow-2xl overflow-hidden">
              <div className="aspect-[3/4] relative">
                <Image 
                  src="/media/profile.jpg"
                  alt={t('profileImageAlt')}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{t('fullName')}</h3>
                <p className="text-gray-200 text-lg font-medium">{t('lawyerTitle')}</p>
              </div>
            </div>
          </div>

          {/* Text Content Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-2xl">
            <div className="inline-block px-5 py-2 bg-[#E83241]/10 text-[#E83241] text-lg font-bold rounded-full mb-6">
              {t('aboutMeBadge')}
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
              {t('specialistTitle')} <span className="text-[#E83241]">{t('specialistArea')}</span>
            </h2>
            
            <div className="h-1.5 w-20 bg-[#E83241] mb-8"></div>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                {t('description1')}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                {t('description2')}
              </p>
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {t('practiceAreasTitle')} <span className="text-[#E83241]">{t('practiceAreasHighlight')}</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#E83241] mx-auto"></div>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              {t('practiceAreasSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white rounded-2xl border-2 border-gray-300 p-6 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#E83241]/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#E83241]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {t('valuesTitle')} <span className="text-[#E83241]">{t('valuesHighlight')}</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#E83241] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = typeof value.icon === 'string' ? null : value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg text-center">
                  {typeof value.icon === 'string' ? (
                    <div className="text-4xl mb-6">{value.icon}</div>
                  ) : IconComponent ? (
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className={`w-8 h-8 ${value.color}`} />
                    </div>
                  ) : null}
                  <h3 className="text-2xl font-black text-[#E83241] mb-4">{value.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full mt-24 mb-0">
        <MeetingCTA showPhoneOption={true} />
      </div>
    </div>
  );
}