'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function EbookIntroduction() {
  const t = useTranslations('LegalPoint.Ebook.Introduction');

  return (
    <section id="about" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-[450px] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/media/profile.jpg"
                alt="Nadine Zeverino"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/60 backdrop-blur-md border border-[#C5A065]/30 p-4 rounded-xl">
                  <p className="text-[#C5A065] font-serif italic text-lg mb-1">
                    &quot;{t('quote')}&quot;
                  </p>
                  <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
                    Dra. Nadine Zeverino
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 border-l border-t border-[#C5A065]/20" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 border-r border-b border-[#C5A065]/20" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-[#C5A065] text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
                {t('tag')}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-white leading-tight mb-8">
                {t('title')}
              </h2>
              <div className="w-12 h-1 bg-[#C5A065] mb-8" />
            </div>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
              <p>
                {t('content1')}
              </p>
              <p className="border-l-2 border-[#C5A065] pl-6 py-2 bg-white/[0.02]">
                {t('content2')}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
