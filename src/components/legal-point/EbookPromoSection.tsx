'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function EbookPromoSection() {
  const t = useTranslations('LegalPoint.Ebook.EbookPromo');

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C5A065]/5 blur-[120px] rounded-full translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* Left: Content */}
            <div className="p-8 md:p-16 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A065]/10 border border-[#C5A065]/20 text-[#C5A065] text-[10px] font-bold uppercase tracking-widest mb-6">
                  <BookOpen className="w-3 h-3" />
                  {t('badge')}
                </div>
                
                <h2 className="text-2xl md:text-4xl font-serif text-white leading-tight mb-6">
                  {t('title')}
                </h2>
                
                <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-8">
                  {t('subtitle')}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/legal-point/ebook"
                    className="flex items-center gap-3 bg-[#C5A065] hover:bg-[#D4AF74] text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95"
                  >
                    {t('cta')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

            </div>

            {/* Right: Visual (STATIC AS REQUESTED) */}
            <div
              className="relative h-[400px] lg:h-full min-h-[500px] bg-gradient-to-br from-[#111] to-black flex items-center justify-center p-8 md:p-12"
            >
              <div className="relative w-full max-w-[340px] h-full max-h-[480px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Image
                  src="/media/ebook-cover.png"
                  alt="Ebook Preview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
