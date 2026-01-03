'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import BookMeetingButton from '@/components/BookMeetingButton';
import { FaWhatsapp } from 'react-icons/fa';

export default function FinalCTA() {
    const t = useTranslations('LegalPoint.CTA');

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A065]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-6xl font-serif text-white mb-6"
                >
                    {t('titlePart1')} <span className="text-[#C5A065] italic">{t('titlePart2')}</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
                >
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative inline-block"
                >
                    {/* Primary: Professional Gold Gradient + Infinite Pulse (MATCHING HERO STYLE) */}
                    <motion.div
                        className="relative"
                        animate={{
                            boxShadow: ['0 0 0px rgba(197,160,101,0)', '0 0 20px rgba(197,160,101,0.3)', '0 0 0px rgba(197,160,101,0)']
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        style={{ borderRadius: '9999px' }}
                    >
                        <BookMeetingButton
                            className="relative !bg-gradient-to-r !from-[#C5A065] !to-[#AA8A55] !text-black !border-none !px-14 !py-7 !text-xl font-medium tracking-wide shadow-lg hover:!scale-105 transition-all duration-300 min-w-[250px] !rounded-full"
                        />
                    </motion.div>
                </motion.div>

                {/* Contact Details with WhatsApp */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto border-t border-white/10 pt-12"
                >
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Largo+de+Heliodoro+Salgado+N%C2%BA8+8500-537+Portim%C3%A3o+Portugal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center group hover:-translate-y-1 transition-transform duration-300 block cursor-pointer"
                    >
                        <h4 className="text-[#C5A065] font-serif text-lg mb-2">{t('officeTitle')}</h4>
                        <p className="text-gray-400 group-hover:text-white transition-colors">Largo de Heliodoro Salgado Nº8</p>
                        <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">8500-537 Portimão, Portugal</p>
                    </a>
                    <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                        <h4 className="text-[#C5A065] font-serif text-lg mb-2">{t('phoneLabel')}</h4>
                        <a href="tel:+351964022222" className="text-lg md:text-xl text-white font-light hover:text-[#C5A065] transition-colors">
                            +351 964 022 222
                        </a>
                        <p className="text-gray-500 text-sm">{t('phoneDesc')}</p>
                    </div>
                    {/* NEW WHATSAPP BLOCK */}
                    <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                        <h4 className="text-[#C5A065] font-serif text-lg mb-2 flex items-center justify-center gap-2">
                            <FaWhatsapp /> WhatsApp
                        </h4>
                        <a href="https://wa.me/351964022222" target="_blank" className="text-lg md:text-xl text-white font-light hover:text-[#25D366] transition-colors">
                            +351 964 022 222
                        </a>
                        <p className="text-gray-500 text-sm">{t('whatsappDesc')}</p>
                    </div>
                    <div className="text-center group hover:-translate-y-1 transition-transform duration-300">
                        <h4 className="text-[#C5A065] font-serif text-lg mb-2">Email</h4>
                        <a href="mailto:niz@nadinezeverino.com" className="text-lg md:text-xl text-white font-light hover:text-[#C5A065] transition-colors">
                            niz@nadinezeverino.com
                        </a>
                        <p className="text-gray-500 text-sm">{t('emailDesc')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
