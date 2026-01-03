'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutNadine() {
  const t = useTranslations('LegalPoint.About');

  return (
    <section id="sobre" className="py-32 bg-gray-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-black leading-tight">
             Nadine <span className="text-brand">Zeverino</span>
          </h2>
          <div className="space-y-8 text-gray-600 leading-relaxed text-lg font-light">
            <p>{t('paragraph1')}</p>
            <blockquote className="border-l-4 border-brand pl-6 italic text-black text-2xl font-serif py-2 bg-white p-4 shadow-sm rounded-r-sm">
              "{t('quote')}"
            </blockquote>
            <p>{t('paragraph2')}</p>
          </div>
          
           <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
             <div>
                <p className="text-4xl font-serif font-bold text-brand">10+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{t('stats.years')}</p>
             </div>
             <div>
                <p className="text-4xl font-serif font-bold text-brand">100%</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">{t('stats.digital')}</p>
             </div>
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative order-1 md:order-2"
        >
          <div className="aspect-square bg-white p-4 shadow-[-20px_20px_0px_0px_rgba(232,50,65,0.1)] relative z-10 rounded-sm">
             <div className="w-full h-full relative overflow-hidden rounded-sm bg-gray-100">
                <Image 
                  src="/media/profile.jpg" 
                  alt="Dra. Nadine Zeverino Portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}