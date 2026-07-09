'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import BookMeetingButton from '@/components/BookMeetingButton';

const slides = [
  { key: 'realestate', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { key: 'legal', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
];

export default function LegalHero() {
    const t = useTranslations('LegalPoint.Hero');
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: (d: number) => ({ y: d > 0 ? 40 : -40, opacity: 0 }),
        center: { y: 0, opacity: 1 },
        exit: (d: number) => ({ y: d > 0 ? -40 : 40, opacity: 0 }),
    };

    const slide = slides[current];

    return (
        <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
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

            <div className="relative z-10 container mx-auto px-3 sm:px-4 flex flex-col flex-1 w-full py-6 md:py-12">
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="relative w-full max-w-4xl mx-auto min-h-[200px] md:min-h-[240px] flex items-center">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={slide.key}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                className="w-full"
                            >
                                {/* Icon */}
                                <div className="flex justify-center mb-4 md:mb-6">
                                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#C5A065]/10 border border-[#C5A065]/20 flex items-center justify-center">
                                        <svg className="w-7 h-7 md:w-10 md:h-10 text-[#C5A065]" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d={slide.icon} />
                                        </svg>
                                    </div>
                                </div>

                                <motion.h1
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-white mb-4 md:mb-6 tracking-tight leading-tight"
                                >
                                    {(() => {
                                        const title = slide.key === 'realestate' ? t('slide1Title') : t('slide2Title');
                                        const gold = slide.key === 'realestate' ? t('slide1TitleGold') : t('slide2TitleGold');
                                        const parts = title.split(gold);
                                        return parts.map((part, i) =>
                                            i === 0 ? part : <span key={i}><span className="text-[#C5A065]">{gold}</span>{part}</span>
                                        );
                                    })()}
                                </motion.h1>

                                <motion.p
                                    className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-snug md:leading-relaxed"
                                >
                                    {slide.key === 'realestate' ? t('slide1Subtitle') : t('slide2Subtitle')}
                                </motion.p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="h-[1px] w-32 mx-auto bg-gradient-to-r from-transparent via-[#C5A065]/50 to-transparent mb-6 md:mb-8"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 pb-4 md:pb-8"
                >
                    <motion.div
                        className="relative group w-full md:w-auto"
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
                            className="relative !bg-gradient-to-r !from-[#C5A065] !to-[#AA8A55] !text-black !border-none !px-6 !py-3 md:!px-10 md:!py-5 text-sm md:text-lg font-medium tracking-wide shadow-lg hover:!scale-105 transition-all duration-300 !w-full md:!w-auto !min-w-0 md:!min-w-[200px] !rounded-full"
                        />
                    </motion.div>

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
                        className="group relative flex items-center justify-center gap-3 px-6 py-3 md:px-10 md:py-5 text-sm md:text-lg font-medium text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 !w-full md:!w-auto !min-w-0 md:!min-w-[200px] cursor-pointer rounded-full"
                        animate={{
                            borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.2)']
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    >
                        <svg className="text-[#25D366] text-lg md:text-xl group-hover:scale-110 transition-transform" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        <span>WhatsApp</span>
                    </motion.a>
                </motion.div>
            </div>

            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A065]/50 to-transparent"
            />
        </section>
    );
}
