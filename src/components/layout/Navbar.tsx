'use client'

import { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from '@/components/LanguageSwticher'
import 'flag-icons/css/flag-icons.min.css'
import Image from 'next/image'

export default function Navbar() {
  const t = useTranslations('Navbar')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/pratice-areas' },
    { name: t('contact'), href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname.match(/^\/[a-z]{2}$/)
    }
    return pathname.includes(href)
  }

  // ✅ Reusable CTA Button Component
  const MeetingCTAButton = ({ onClick }: { onClick?: () => void }) => (
    <motion.a
      href="https://calendar.app.google/gBr7b8fKmrMc976o9  "
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="min-h-12 relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E83241] to-[#B83232] px-6 py-3 rounded-xl text-sm md:text-base font-semibold text-white text-center shadow-[0_4px_30px_rgba(232,50,65,0.25)] backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(232,50,65,0.4)] w-full md:w-auto"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z"
        />
      </svg>
      <span>{t('book')}</span>
    </motion.a>
  )

  return (
    <nav className="fixed w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-xl border-b border-white/10"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="font-bold text-xl tracking-tight z-20 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/media/logo.png"
                alt="Nadine Isabel Zeverino"
                width={32}
                height={32}
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.style.display = 'none'
                  const nextSibling = img.nextElementSibling as HTMLElement | null
                  if (nextSibling) nextSibling.textContent = 'Nadine Isabel Zeverino'
                }}
              />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white text-lg font-semibold">
                Nadine Isabel Zeverino
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2.5 mx-1 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-gradient-to-r from-[#E83241]/20 to-[#B83232]/20 text-white border border-[#E83241]/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA + Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <MeetingCTAButton />
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all hover:bg-white/10"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>

            <motion.div
              className="absolute top-8 right-6 z-20"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
                aria-label="Close menu"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </motion.svg>
              </button>
            </motion.div>

            <motion.div
              className="relative z-10 h-full flex flex-col justify-center px-6 pt-32 pb-8"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              exit={{ x: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="space-y-6 max-w-sm mx-auto w-full">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-6 py-4 rounded-xl text-lg font-medium text-center transition-all duration-300 ${
                      isActive(link.href)
                        ? 'bg-gradient-to-r from-[#E83241]/20 to-[#B83232]/20 text-white border border-[#E83241]/30'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ))}

                {/* ✅ CTA Button for Mobile (reused) - Now same height as nav links */}
                <div className="h-14">
                  <MeetingCTAButton onClick={() => setIsMenuOpen(false)} />
                </div>

                {/* Language Switcher (Mobile) */}
                <motion.div
                  className="pt-8 w-full flex justify-center align-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <LanguageSwitcherMobile />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function LanguageSwitcherMobile() {
  const pathname = usePathname()
  const currentLocale = pathname.split('/')[1]

  const languages = [
    { code: 'pt', name: 'Português', flagCode: 'pt' },
    { code: 'en', name: 'English', flagCode: 'gb' },
    { code: 'nl', name: 'Dutch', flagCode: 'nl' },
  ]

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[^\/]+/, '') || '/'
    const newPath = `/${newLocale}${pathWithoutLocale}`
    window.location.href = newPath
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          className={`p-3 w-16 h-16 rounded-lg text-center transition-all flex flex-col items-center justify-center h-14 ${
            currentLocale === language.code
              ? 'bg-[#E83241]/30 border border-[#E83241]/50 text-white'
              : 'bg-white/5 hover:bg-white/10 text-white/70'
          }`}
        >
          <div className={`fi fi-${language.flagCode} fis rounded-sm mx-auto mb-1`}></div>
          <div className="text-xs font-medium">{language.code.toUpperCase()}</div>
        </button>
      ))}
    </div>
  )
}