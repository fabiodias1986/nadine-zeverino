'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, Shield, FileSearch, Globe2 } from 'lucide-react';

export default function ServiceDetails() {
  const t = useTranslations('LegalPoint.ServiceDetails');

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SERVIÇO 1: IMOBILIÁRIO --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 text-brand mb-6">
              <Shield size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">{t('realEstate.tag')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-neutral-900">
              {t('realEstate.title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-light leading-relaxed">
              {t('realEstate.description')}
            </p>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-800">
                  <CheckCircle2 className="text-brand shrink-0 mt-1" size={18} />
                  <span className="font-medium">{t(`realEstate.point${i}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Contentor de Imagem Arredondado */}
          <div className="relative aspect-square md:aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="/real-estate-law.jpg"
                alt={t('realEstate.title')}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>
        </div>

        {/* --- SERVIÇO 2: SUCESSÕES --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative aspect-square md:aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden order-2 lg:order-1 group shadow-2xl">
              <Image 
                src="/successions-law.jpg"
                alt={t('successions.title')}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-brand/20 to-transparent mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 text-brand mb-6">
              <FileSearch size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">{t('successions.tag')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-neutral-900">
              {t('successions.title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-light leading-relaxed">
              {t('successions.description')}
            </p>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-800">
                  <CheckCircle2 className="text-brand shrink-0 mt-1" size={18} />
                  <span className="font-medium">{t(`successions.point${i}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* --- SERVIÇO 3: LEGALIZAÇÕES --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="flex items-center gap-3 text-brand mb-6">
              <Globe2 size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">{t('legal.tag')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight text-neutral-900">
              {t('legal.title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 font-light leading-relaxed">
              {t('legal.description')}
            </p>
            <ul className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-800">
                  <CheckCircle2 className="text-brand shrink-0 mt-1" size={18} />
                  <span className="font-medium">{t(`legal.point${i}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="relative aspect-square md:aspect-[4/5] bg-gray-100 rounded-[2.5rem] overflow-hidden group shadow-2xl">
              <Image 
                src="/legalization-law.jpg"
                alt={t('legal.title')}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}