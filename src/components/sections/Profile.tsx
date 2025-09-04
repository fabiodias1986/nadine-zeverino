'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function ProfileSection() {
  const t = useTranslations('ProfileSection');

  const specialties = [
    { text: t('specialties.family'), key: 'family' },
    { text: t('specialties.commercial'), key: 'commercial' },
    { text: t('specialties.realEstate'), key: 'realEstate' },
    { text: t('specialties.criminal'), key: 'criminal' }
  ];

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Imagem da Advogada - Subtle Premium Style */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-gray-300 shadow-xl">
                <div className="aspect-[3/4]">
                  <Image 
                    src="/media/profile.jpg"
                    alt="Nadine Isabel Zeverino - Advogada em Portimão"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Subtle Premium Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                {/* Informação profissional - Enhanced */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Nadine Isabel Zeverino</h3>
                  <p className="text-gray-200 text-base font-medium">{t('lawyerTitle')}</p>
                </div>
              </div>
              
              {/* Subtle Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#E83241]/5 rounded-xl"></div>
            </motion.div>

            {/* Conteúdo textual - Clean Modern Layout */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E83241]/5 text-[#E83241] text-sm font-bold rounded-full border border-[#E83241]/10">
                <span className="w-2 h-2 bg-[#E83241] rounded-full"></span>
                <span>{t('aboutMe')}</span>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                {t('title')} 
                <span className="block text-[#E83241] mt-2">{t('portugal')}</span>
              </h2>
              
              {/* Divider */}
              <div className="h-1 w-20 bg-[#E83241]"></div>
              
              {/* Description */}
              <div className="space-y-6 text-justify">
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  {t('description1')}
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  {t('description2')}
                </p>
              </div>
              
              {/* Áreas de especialização - Modern Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">{t('specializationAreas')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {specialties.map((area, index) => (
                    <motion.div
                      key={area.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-[#E83241] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-800 font-medium">{area.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}