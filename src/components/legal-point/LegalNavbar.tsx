'use client'

import { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from '@/components/LanguageSwticher'
import 'flag-icons/css/flag-icons.min.css'
import Image from 'next/image'

export default function LegalNavbar() {
    const t = useTranslations('Navbar')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Custom Links for Legal Point (Anchors)
    const navLinks = [
        { name: 'Overview', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'Why Portugal', href: '#why-portugal' },
        { name: 'About', href: '#about' },
    ]

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
            }
        }
    }

    return (
        <nav className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
            {/* Background with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md border-b border-[#C5A065]/20"></div>

            <div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 z-20">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/media/logo.png"
                            alt="Nadine Isabel Zeverino"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    <span className="text-white text-lg font-serif tracking-wide hidden md:block">
                        Legal Point <span className="text-[#C5A065] italic text-base">by Nadine Zeverino</span>
                    </span>
                </Link>


                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-sm uppercase tracking-widest text-gray-300 hover:text-[#C5A065] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="h-6 w-[1px] bg-white/20"></div>

                    {/* Container to align Language Switcher and Button heights */}
                    <div className="flex items-center gap-4">
                        {/* 1. CTA Button (Left) */}
                        <motion.a
                            href="#contact"
                            className="h-10 flex items-center justify-center px-6 bg-[#C5A065] text-black text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-full"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('book')}
                        </motion.a>

                        {/* 2. Language Switcher (Right) */}
                        <LanguageSwitcher />
                    </div>
                </div>


                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-20 text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="space-y-2">
                        <span className={`block w-8 h-0.5 bg-[#C5A065] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-[#C5A065] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-8 h-0.5 bg-[#C5A065] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-black/95 border-b border-[#C5A065]/20 backdrop-blur-xl md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="text-lg uppercase tracking-widest text-white hover:text-[#C5A065]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="w-12 h-[1px] bg-white/20 my-2"></div>
                            <LanguageSwitcher />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    )
}
