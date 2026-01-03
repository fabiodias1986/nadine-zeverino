'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import BookMeetingButton from '@/components/BookMeetingButton';
import { FaWhatsapp } from 'react-icons/fa';

export default function LegalHero() {
    const t = useTranslations('LegalPoint.Hero');

    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-black">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/media/hero.jpg"
                    alt="Luxury Law Portugal"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block mb-6 px-4 py-2 border border-[#C5A065]/30 rounded-full bg-black/40 backdrop-blur-md"
                >
                    <span className="text-[#C5A065] text-xs md:text-sm font-medium tracking-widest uppercase">
                        {t('tag')}
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-tight"
                >
                    {t('title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
                >
                    {t('subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    {/* Primary: Professional Gold Gradient + Infinite Pulse */}
                    <motion.div
                        className="relative group"
                        animate={{
                            boxShadow: ['0 0 0px rgba(197,160,101,0)', '0 0 20px rgba(197,160,101,0.3)', '0 0 0px rgba(197,160,101,0)']
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        style={{ borderRadius: '9999px' }}
                    >
                        <BookMeetingButton
                            onClick={() => {
                                if (typeof window !== 'undefined' && (window as unknown as { gtag: (c: string, a: string, p: Record<string, string>) => void }).gtag) {
                                    (window as unknown as { gtag: (c: string, a: string, p: Record<string, string>) => void }).gtag('event', 'click', {
                                        event_category: 'CTA',
                                        event_label: 'Hero - Book Meeting'
                                    });
                                }
                            }}
                            className="relative !bg-gradient-to-r !from-[#C5A065] !to-[#AA8A55] !text-black !border-none !px-10 !py-5 text-lg font-medium tracking-wide shadow-lg hover:!scale-105 transition-all duration-300 min-w-[200px] !rounded-full"
                        />
                    </motion.div>

                    {/* Secondary: Glassmorphism WhatsApp + Rounded + Infinite Border Glow */}
                    <motion.a
                        href="https://wa.me/351964022222"
                        target="_blank"
                        onClick={() => {
                            if (typeof window !== 'undefined' && (window as unknown as { gtag: (c: string, a: string, p: Record<string, string>) => void }).gtag) {
                                (window as unknown as { gtag: (c: string, a: string, p: Record<string, string>) => void }).gtag('event', 'click', {
                                    event_category: 'Contact',
                                    event_label: 'Hero - WhatsApp'
                                });
                            }
                        }}
                        className="group relative flex items-center justify-center gap-3 px-10 py-5 text-lg font-medium text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 min-w-[200px] cursor-pointer rounded-full"
                        animate={{
                            borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)']
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} // Offset delay for nice alternating effect
                    >
                        <FaWhatsapp className="text-[#25D366] text-xl group-hover:scale-110 transition-transform" />
                        <span>WhatsApp</span>
                    </motion.a>

                </motion.div>
            </div>

            {/* Decorative Gold Line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A065]/50 to-transparent"
            />
        </section>
    );
}
