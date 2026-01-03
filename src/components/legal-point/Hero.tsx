'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('LegalPoint.Hero');

  return (
    <section className="relative min-h-[90vh] flex items-center px-6 bg-white overflow-hidden pt-28 lg:pt-0">
      
      {/* --- BACKGROUND SUBTIL --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Apenas um leve brilho estático para profundidade, sem movimento agressivo */}
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-neutral-50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
        
        {/* --- COLUNA ESQUERDA: TEXTO --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-8 border-b border-brand/20 pb-2">
            <ShieldCheck size={14} className="text-brand" />
            <span className="font-bold tracking-[0.3em] uppercase text-[10px] text-neutral-500">
              {t('tag')}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl xl:text-8xl font-serif font-black leading-[1.1] mb-8 text-neutral-950">
            {t.rich('title', {
              b: (chunks) => <span className="text-brand italic">{chunks}</span>,
              br: () => <br />
            })}
          </h1>

          <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light max-w-xl">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap gap-6">
            <button className="group bg-brand text-white px-10 py-5 rounded-full font-bold transition-all duration-300 hover:bg-neutral-950 flex items-center gap-3 shadow-xl shadow-brand/10">
              {t('ctaBtn')} <Calendar size={20} />
            </button>
            
            <button className="group px-10 py-5 rounded-full font-bold text-neutral-900 transition-all duration-300 flex items-center gap-3 hover:translate-x-1">
              {t('secondaryBtn')} <ArrowRight size={20} className="text-brand" />
            </button>
          </div>
        </motion.div>
        
        {/* --- COLUNA DIREITA: IMAGEM (ESTÁTICA E LIMPA) --- */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          {/* Contentor com Cantos Arredondados e Sombra Suave */}
          <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white">
            <Image 
              src="/media/hero.jpg" 
              alt="Nadine Zeverino"
              fill
              className="object-cover"
              priority
              sizes="50vw"
            />
            {/* Overlay muito leve apenas para dar um tom cinematográfico */}
            <div className="absolute inset-0 bg-neutral-950/5 pointer-events-none" />
          </div>

          {/* Elemento decorativo estático e minimalista (apenas uma linha de contorno) */}
          <div className="absolute -inset-4 border border-neutral-100 rounded-[4.5rem] -z-10" />
        </motion.div>

      </div>

      {/* Indicador de Scroll Minimalista */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 hidden lg:block">
        <div className="w-[1px] h-12 bg-neutral-950 mx-auto" />
      </div>
    </section>
  );
}