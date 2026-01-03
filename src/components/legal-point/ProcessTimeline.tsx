'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FaComments, FaFileSignature, FaSearchDollar, FaKey } from 'react-icons/fa';

export default function ProcessTimeline() {
    const t = useTranslations('LegalPoint.Process');

    const steps = [
        { icon: FaComments, key: 'step1' },
        { icon: FaFileSignature, key: 'step2' },
        { icon: FaSearchDollar, key: 'step3' },
        { icon: FaKey, key: 'step4' }
    ];

    return (
        <section className="py-24 bg-[#080808] relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-[0.03] mix-blend-overlay" />
            <div className="absolute  top-0 right-0 w-[500px] h-[500px] bg-[#C5A065]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#C5A065] text-sm font-medium tracking-widest uppercase block mb-4"
                    >
                        {t('tag')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-white mb-6"
                    >
                        {t('title')} <span className="text-[#C5A065] italic">{t('titleAccent')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C5A065]/30 to-transparent" />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group text-center"
                            >
                                {/* Step Wrapper */}
                                <div className="flex flex-col items-center">

                                    {/* Icon Circle */}
                                    <div className="z-10 relative mb-8">
                                        <div className="absolute -inset-4 bg-[#C5A065]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="w-24 h-24 rounded-full bg-[#111] border border-[#C5A065]/30 flex items-center justify-center text-[#C5A065] group-hover:border-[#C5A065] group-hover:scale-110 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                            <step.icon size={32} />
                                        </div>
                                        {/* Number Badge */}
                                        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#C5A065] text-black font-bold flex items-center justify-center border-4 border-[#080808]">
                                            {index + 1}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#C5A065] transition-colors">{t(`${step.key}.title`)}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed px-4 group-hover:text-gray-400 transition-colors">
                                        {t(`${step.key}.desc`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
