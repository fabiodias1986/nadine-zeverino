'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Globe, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function LegalIntroduction() {
  const t = useTranslations('LegalPoint.LegalIntroduction');

  const features = [
    {
      title: t('feature1'),
      desc: t('feature1Desc'),
      icon: Globe
    },
    {
      title: t('feature2'),
      desc: t('feature2Desc'),
      icon: ShieldCheck
    },
    {
      title: t('feature3'),
      desc: t('feature3Desc'),
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A065]/30 bg-[#C5A065]/10 text-[#C5A065] text-xs font-semibold uppercase tracking-widest mb-8">
              <ShieldCheck className="w-4 h-4" />
              {t('tag')}
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-light text-white leading-tight mb-8">
              {t('title').split(' ').map((word, i) => (
                <span key={i} className={i === 2 || i === 3 ? "font-semibold text-[#C5A065]" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h2>

            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12 max-w-xl">
              {t('subtitle')}
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A065]">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <Link 
                href="#contact"
                className="inline-flex items-center gap-2 text-[#C5A065] font-semibold border-b border-[#C5A065]/30 pb-1 hover:border-[#C5A065] transition-all group"
              >
                {t('cta')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Image with Premium Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/media/legal-intro-v2.png"
                alt="Legal Point Office"
                fill
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#C5A065]/20 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#C5A065]/20 -z-10" />
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 right-8 bg-black/80 backdrop-blur-xl border border-[#C5A065]/30 p-6 rounded-2xl shadow-2xl max-w-[200px]"
            >
              <div className="text-[#C5A065] font-serif text-3xl mb-1">{t('badgeValue')}</div>
              <p className="text-white/60 text-xs uppercase tracking-widest leading-tight">{t('badgeLabel')}</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
