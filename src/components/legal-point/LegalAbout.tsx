'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

export default function LegalAbout() {
    const t = useTranslations('LegalPoint.About');

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Image - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10">
                            <Image
                                src="/media/hero.jpg"
                                alt="Dr. Nadine Zeverino"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Gold frame offset */}
                            <div className="absolute top-4 -right-4 w-full h-full border border-[#C5A065]/30 -z-10" />
                        </div>
                    </motion.div>

                    {/* Content - Right Side */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex gap-4 items-start mb-8">
                                <FaQuoteLeft className="text-4xl text-[#C5A065]/40 shrink-0" />
                                <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed italic">
                                    {t('quote')}
                                </p>
                            </div>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                                <p>{t('paragraph1')}</p>
                                <p>{t('paragraph2')}</p>
                            </div>
                        </motion.div>

                        {/* Stats/Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5"
                        >
                            <div>
                                <span className="block text-4xl text-[#C5A065] font-serif mb-1">10+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">{t('stats.years')}</span>
                            </div>
                            <div>
                                <span className="block text-4xl text-[#C5A065] font-serif mb-1">100%</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest">{t('stats.digital')}</span>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
