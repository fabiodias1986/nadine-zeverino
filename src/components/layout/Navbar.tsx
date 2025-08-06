'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const t = useTranslations('Navbar');

  const navLinks = [
    { name: t('home'), href: '#' },
    { name: t('about'), href: '#' },
    { name: t('services'), href: '#' },
    { name: t('contact'), href: '#' },
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Background com glassmorphism premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-xl border-b border-white/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo elegante */}
          <motion.div 
            className="font-bold text-xl tracking-tight z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Nadine <span className="text-[#E83241]">Zeverino</span>
            </span>
          </motion.div>

          {/* Desktop Navigation - Premium Style */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  activeLink === link.name 
                    ? 'text-white bg-white/5 border border-white/10' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveLink(link.name)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeLink === link.name && (
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-[#E83241]/10 to-[#E83241]/5 rounded-full"
                    layoutId="activeLinkIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}
            
            {/* Botão de contato premium */}
            <motion.button
              className="ml-4 bg-gradient-to-r from-[#E83241] to-[#B83232] px-5 py-2 rounded-full text-sm font-medium text-white shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(232, 50, 65, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {t('contact')}
            </motion.button>
          </div>

          {/* Mobile menu button - Premium Style */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all hover:bg-white/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={{ rotate: isMenuOpen ? 45 : 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Premium Glassmorphism */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Background overlay */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>
            
            {/* Menu content */}
            <motion.div
              className="relative z-10 h-full flex flex-col justify-center px-6"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              exit={{ x: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="space-y-4 max-w-sm mx-auto w-full">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`block px-6 py-4 rounded-xl text-lg font-medium text-center transition-all duration-300 ${
                      activeLink === link.name 
                        ? 'bg-gradient-to-r from-[#E83241]/20 to-[#B83232]/20 text-white border border-[#E83241]/30' 
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsMenuOpen(false);
                    }}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.1, 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 20 
                    }}
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                {/* Botão de contato mobile */}
                <motion.button
                  className="w-full mt-8 bg-gradient-to-r from-[#E83241] to-[#B83232] px-6 py-4 rounded-xl text-lg font-medium text-white"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(232, 50, 65, 0.25)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('contact')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}