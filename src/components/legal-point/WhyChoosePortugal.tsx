'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaShieldAlt, FaChartLine, FaSun, FaPercentage } from 'react-icons/fa';

export default function WhyChoosePortugal() {
    const t = useTranslations('LegalPoint.WhyPortugal');

    const stats = [
        { icon: FaShieldAlt, key: 'safety' },
        { icon: FaChartLine, key: 'investment' },
        { icon: FaSun, key: 'lifestyle' },
        { icon: FaPercentage, key: 'tax' }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[#C5A065] tracking-widest text-sm font-medium uppercase mb-4 block"
                        >
                            {t('tag')}
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight"
                        >
                            {t('mainTitle')} <span className="text-[#C5A065] italic">{t('mainTitleAccent')}</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-400 text-lg mb-12"
                        >
                            {t('description')}
                        </motion.p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {stats.map((item, index) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#C5A065]/10 flex items-center justify-center text-[#C5A065]">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg mb-2">{t(`${item.key}.title`)}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{t(`${item.key}.desc`)}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/media/why_portugal_luxury.png"
                            alt="Portugal Lifestyle"
                            fill
                            className="object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Floating Frame */}
                        <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
