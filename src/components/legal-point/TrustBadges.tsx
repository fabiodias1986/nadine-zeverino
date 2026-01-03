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
        <section className="py-12 border-y border-white/5 bg-black">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center md:text-left flex items-center gap-4"
                        >
                            <span className="text-3xl md:text-4xl font-serif text-[#C5A065]">
                                {badge.value}
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest max-w-[100px]">
                                {badge.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
