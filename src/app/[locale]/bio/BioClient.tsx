'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaGlobe, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function BioClient() {
    const t = useTranslations('LegalPoint.Bio');
    const locale = useLocale();

    // Staggered Animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">

            {/* 1. Dynamic Background / Spotlight */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Gold Orb Top Left */}
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(197,160,101,0.15)_0%,transparent_70%)] blur-[100px]" />
                {/* Red/Brand Orb Bottom Right (Subtle) */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,50,65,0.08)_0%,transparent_70%)] blur-[100px]" />

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('/patterns/noise.png')] mix-blend-overlay" />
            </div>

            {/* Language Switcher - Absolute Top Right */}
            <div className="absolute top-4 right-4 z-50">
                <LanguageSwitcher alwaysDropdown={true} />
            </div>

            {/* 2. Main Card Container */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full max-w-[420px] relative z-10"
            >
                {/* 3. Header / Profile */}
                <motion.div variants={item} className="flex flex-col items-center text-center mb-10">

                    {/* Glowing Ring Profile */}
                    <div className="relative group cursor-default">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A065] to-[#AA8A55] rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="relative w-36 h-36 rounded-full p-[2px] bg-gradient-to-tr from-[#C5A065] to-transparent">
                            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a] relative">
                                <Image
                                    src="/media/profile.jpg"
                                    alt="Nadine Isabel Zeverino"
                                    width={300}
                                    height={300}
                                    className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Verified Badge */}
                        <div className="absolute bottom-1 right-1 bg-[#C5A065] text-black w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#050505] shadow-lg">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                        </div>
                    </div>

                    {/* Text Info */}
                    <div className="mt-6 space-y-2">
                        <h1 className="text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f0f0f0] to-[#999999]">
                            {t('name')}
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-[#C5A065] text-xs font-bold tracking-[0.2em] uppercase">
                            <span className="w-2 h-[1px] bg-[#C5A065]"></span>
                            {t('role')}
                            <span className="w-2 h-[1px] bg-[#C5A065]"></span>
                        </div>
                    </div>
                </motion.div>

                {/* 4. Action Buttons Stack */}
                <motion.div variants={item} className="space-y-4">

                    {/* Primary: Book Meeting (Gold Gradient) */}
                    <a
                        href="https://calendar.app.google/gBr7b8fKmrMc976o9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-between px-6 py-5 bg-gradient-to-r from-[#C5A065] to-[#997B45] rounded-2xl shadow-[0_10px_30px_-10px_rgba(197,160,101,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(197,160,101,0.5)] hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4">
                            <span className="bg-black/20 w-10 h-10 rounded-full flex items-center justify-center text-black shadow-inner">
                                <FaCalendarAlt className="text-lg" />
                            </span>
                            <div className="flex flex-col text-left">
                                <span className="text-black font-bold text-sm uppercase tracking-wider">{t('buttons.bookMeeting')}</span>
                            </div>
                        </div>
                        <svg className="w-5 h-5 text-black transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>

                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
                        </div>
                    </a>

                    {/* Secondary: Legal Point (Dark Premium Card) */}
                    <a
                        href={`/${locale}/legal-point`}
                        className="group relative block p-[1px] rounded-2xl bg-gradient-to-r from-[#C5A065]/50 via-white/10 to-[#C5A065]/10 hover:from-[#C5A065] hover:via-[#C5A065] hover:to-[#C5A065] transition-all duration-500"
                    >
                        <div className="relative flex items-center justify-between px-6 py-4 bg-[#0A0A0A] rounded-2xl h-full overflow-hidden group-hover:bg-[#0f0f0f] transition-colors">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C5A065]/20 to-transparent scale-150" />

                            <div className="flex items-center gap-4 relative z-10">
                                <span className="w-10 h-10 rounded-full border border-[#C5A065]/30 flex items-center justify-center text-[#C5A065] font-serif font-bold text-xl group-hover:bg-[#C5A065] group-hover:text-black transition-all duration-300">
                                    L
                                </span>
                                <div className="flex flex-col text-left">
                                    <span className="text-white font-bold text-lg font-serif">{t('buttons.legalPoint')}</span>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* Tertiary Row: WhatsApp & Call */}
                    <div className="grid grid-cols-2 gap-4">
                        <a
                            href="https://wa.me/351964022222"
                            target="_blank"
                            className="flex flex-col items-center justify-center gap-2 p-5 bg-[#141414] border border-white/5 rounded-2xl hover:bg-[#1A1A1A] hover:border-[#25D366]/50 transition-all duration-300 group"
                        >
                            <FaWhatsapp className="text-3xl text-[#888] group-hover:text-[#25D366] transition-colors" />
                            <span className="text-xs font-medium text-gray-400 group-hover:text-white uppercase tracking-wider">{t('buttons.whatsapp')}</span>
                        </a>

                        <a
                            href="tel:+351964022222"
                            className="flex flex-col items-center justify-center gap-2 p-5 bg-[#141414] border border-white/5 rounded-2xl hover:bg-[#1A1A1A] hover:border-[#C5A065]/50 transition-all duration-300 group"
                        >
                            <FaPhone className="text-2xl text-[#888] group-hover:text-[#C5A065] transition-colors mb-1" />
                            <span className="text-xs font-medium text-gray-400 group-hover:text-white uppercase tracking-wider">{t('buttons.call')}</span>
                        </a>
                    </div>

                    {/* Simple Links: Website & Email */}
                    <div className="space-y-3 pt-2">
                        <a
                            href={`/${locale}`}
                            className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <FaGlobe className="text-lg text-gray-400" />
                            <span className="text-sm font-medium text-gray-300">{t('buttons.website')}</span>
                        </a>
                        <a
                            href="mailto:niz@nadinezeverino.com"
                            className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <FaEnvelope className="text-lg text-gray-400" />
                            <span className="text-sm font-medium text-gray-300">{t('buttons.email')}</span>
                        </a>
                    </div>

                    {/* Office Location - Centered & Updated Link */}
                    <a
                        href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyDwgBEEUYORiDARixAxiABDIICAIQRRgnGDsyDAgDECMYJxiABBiKBTIHCAQQABiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI3NTBqMGo0qAIAsAIB&um=1&ie=UTF-8&fb=1&gl=pt&sa=X&geocode=Kbeo1G2iKRsNMWB7_t8uIosd&daddr=Largo+de+Heliodoro+Salgado+N.%C2%BA8,+8500-537+Portim%C3%A3o"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-2 px-6 py-4 mt-2 text-center group"
                    >
                        <FaMapMarkerAlt className="text-[#C5A065] text-xl group-hover:scale-110 transition-transform" />
                        <div className="text-xs text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                            Largo de Heliodoro Salgado Nº8<br />
                            8500-537 Portimão, Portugal
                        </div>
                    </a>

                </motion.div>

                {/* Footer */}
                <motion.div variants={item} className="mt-8 text-center pb-8">
                    <p className="text-[10px] text-gray-600 font-medium tracking-[0.2em] uppercase">
                        {t('footer', { year: new Date().getFullYear() })}
                    </p>
                </motion.div>

            </motion.div>
        </div>
    );
}
