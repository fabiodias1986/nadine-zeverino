'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Calculator, Landmark, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function EbookFeatures() {
  const t = useTranslations('LegalPoint.Ebook.Features');

  const features = [
    {
      id: 1,
      icon: ShieldCheck,
      title: t('item1.title'),
      desc: t('item1.desc'),
    },
    {
      id: 2,
      icon: Scale,
      title: t('item2.title'),
      desc: t('item2.desc'),
    },
    {
      id: 3,
      icon: Calculator,
      title: t('item3.title'),
      desc: t('item3.desc'),
    },
    {
      id: 4,
      icon: Landmark,
      title: t('item4.title'),
      desc: t('item4.desc'),
    },
  ];

  return (
    <section id="services" className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#C5A065]/5 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-light text-white mb-6">
              {t('title')}
            </h2>
            <div className="h-1 w-20 bg-[#C5A065] mx-auto mb-6" />
            <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#C5A065]/30 transition-all duration-300"
            >
              <div className="mb-6 p-4 rounded-xl bg-[#C5A065]/10 border border-[#C5A065]/20 group-hover:bg-[#C5A065]/20 transition-colors inline-block">
                <item.icon className="w-8 h-8 text-[#C5A065]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-white mb-4 group-hover:text-[#C5A065] transition-colors">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {item.desc}
              </p>
              
              {/* Checkmark indicator */}
              <div className="mt-6 flex items-center gap-2 text-[#C5A065] text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4" />
                Included in PDF
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
