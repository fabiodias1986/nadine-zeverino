'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function TrustBadges() {
    const t = useTranslations('LegalPoint.Trust');

    const badges = [
        { value: '10+', label: t('years') },
        { value: '100+', label: t('cases') },
        { value: '98%', label: t('success') },
        { value: '15+', label: t('nations') }
    ];

    return (
        <section className="py-16 bg-[#030303] border-b border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A065]/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5"
                        >
                            <span className="text-4xl md:text-5xl font-serif font-light text-[#C5A065] leading-none">
                                {badge.value}
                            </span>
                            <span className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em] leading-tight max-w-[120px] text-center md:text-left mt-1">
                                {badge.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
