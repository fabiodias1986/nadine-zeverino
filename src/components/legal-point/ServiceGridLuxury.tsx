'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaLandmark, FaPassport, FaHome } from 'react-icons/fa';

const icons = {
    realEstate: FaHome,
    successions: FaLandmark,
    legal: FaPassport,
};

export default function ServiceGridLuxury() {
    const t = useTranslations('LegalPoint.Services');
    const tDetails = useTranslations('LegalPoint.ServiceDetails');

    const services = ['realEstate', 'successions', 'legal'];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif text-white mb-6"
                    >
                        {t('mainTitle')}
                    </motion.h2>
                    <div className="h-1 w-24 bg-[#C5A065] mx-auto rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((key, index) => {
                        const Icon = icons[key as keyof typeof icons] || FaHome;
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A065]/50 transition-all duration-500"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#C5A065]/0 to-[#C5A065]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="inline-flex p-4 rounded-xl bg-[#C5A065]/10 text-[#C5A065] mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="text-2xl" />
                                    </div>

                                    <h3 className="text-2xl font-serif text-white mb-4">
                                        {tDetails(`${key}.title`)}
                                    </h3>

                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        {tDetails(`${key}.description`)}
                                    </p>

                                    <ul className="space-y-3">
                                        {[1, 2, 3, 4].map((point) => (
                                            <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A065] mt-2 shrink-0" />
                                                <span>{tDetails(`${key}.point${point}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
