'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Sun, Landmark, CheckCircle2 } from 'lucide-react';

export default function WhyPortugal() {
  const t = useTranslations('LegalPoint.WhyPortugal');

  // Variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" }}
  };

  const reasons = [
    {
      id: 'safety',
      icon: <ShieldCheck className="w-8 h-8" />,
      title: t('safety.title'),
      desc: t('safety.desc')
    },
    {
      id: 'investment',
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('investment.title'),
      desc: t('investment.desc')
    },
    {
      id: 'lifestyle',
      icon: <Sun className="w-8 h-8" />,
      title: t('lifestyle.title'),
      desc: t('lifestyle.desc')
    },
    {
      id: 'tax',
      icon: <Landmark className="w-8 h-8" />,
      title: t('tax.title'),
      desc: t('tax.desc')
    }
  ];

  return (
    <section className="relative py-40 px-6 bg-[#050505] text-white overflow-hidden">
      
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/portugal-lifestyle.jpg" // REPLACE with your actual image file in /public
          alt="Luxury lifestyle in Portugal"
          fill
          className="object-cover scale-105"
          priority={false}
        />
        {/* Premium Gradient Overlay: Dark on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40"></div>
        {/* Subtle red glow accent at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand/10 to-transparent mix-blend-overlay pointer-events-none"></div>
      </div>


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-brand"></div>
              <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs block">
                {t('tag')}
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white">
              {t('mainTitle')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-red-400 italic pr-2">
                {t('mainTitleAccent')}
              </span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg font-light leading-relaxed border-l border-white/20 pl-8"
          >
            {t('description')}
          </motion.p>
        </div>

        {/* Premium Frosted Glass Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              className="group relative p-10 rounded-sm overflow-hidden transition-all duration-500"
            >
              {/* Glassmorphism Background Layer */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-brand/30 group-hover:bg-white/[0.07] transition-all duration-500 rounded-sm z-0"></div>
              
              {/* Red Glow on Hover */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-brand/30 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

              <div className="relative z-10">
                <div className="text-brand mb-6 p-3 bg-brand/10 inline-block rounded-sm group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-brand transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  {reason.desc}
                </p>
                
                {/* Subtle checkmark accent */}
                <div className="absolute top-6 right-6 text-brand/20 group-hover:text-brand transition-colors">
                  <CheckCircle2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}