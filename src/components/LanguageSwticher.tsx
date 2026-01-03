'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import 'flag-icons/css/flag-icons.min.css'

export default function LanguageSwitcher() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()

  // Extrair o locale do pathname
  const currentLocale = pathname.split('/')[1] || 'pt' // fallback para 'pt' se não houver locale

  // Idiomas disponíveis: apenas PT, EN e NL
  const languages = [
    { code: 'pt', name: 'Português', flagCode: 'pt' },
    { code: 'en', name: 'English', flagCode: 'gb' },
    { code: 'nl', name: 'Dutch', flagCode: 'nl' },
  ]

  // Obter o idioma atual (com fallback seguro)
  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0]

  // Função para mudar o idioma
  const changeLanguage = (newLocale: string) => {
    // Obter o caminho atual sem o locale
    const pathWithoutLocale = pathname.replace(/^\/[^\/]+/, '') || '/'
    // Construir o novo caminho
    const newPath = `/${newLocale}${pathWithoutLocale}`
    // Redirecionar (hard navigation para garantir i18n routing do Next.js)
    window.location.href = newPath
  }

  return (
    <div className="relative">

      {/* DESKTOP: Dropdown (Hidden on mobile) */}
      <div className="hidden md:block relative">
        <motion.button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="min-h-12 group flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E83241]/30 rounded-xl text-white transition-all duration-300 backdrop-blur-sm min-w-[100px]"
          aria-label="Change language"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={`fi fi-${currentLanguage.flagCode} rounded-sm w-5 h-4`}></span>
          <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>

          <motion.svg
            className="w-3.5 h-3.5 text-white/60 group-hover:text-white/80 ml-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isDropdownOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40"
                onClick={() => setIsDropdownOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30, duration: 0.2 }}
                className="absolute top-full right-0 mt-2 w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden"
              >
                <div className="p-1">
                  {languages.map((language, index) => (
                    <motion.button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full px-3 py-2.5 text-left flex items-center gap-3 rounded-lg transition-all duration-200 ${currentLocale === language.code
                        ? 'text-[#C5A065] bg-[#C5A065]/10 border border-[#C5A065]/20'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05 } }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className={`fi fi-${language.flagCode} rounded-sm w-5 h-4 flex-shrink-0`}></span>
                      <span className="text-sm font-medium">{language.name}</span>
                      {currentLocale === language.code && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="w-1.5 h-1.5 bg-[#C5A065] rounded-full ml-auto"
                          initial={false}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>


      {/* MOBILE: Row (Visible only on mobile) */}
      <div className="flex md:hidden items-center gap-6">
        {languages.map((language) => (
          <motion.button
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center gap-2 opacity-80 transition-opacity ${currentLocale === language.code ? 'opacity-100 scale-110' : 'hover:opacity-100'}`}
          >
            <span className={`fi fi-${language.flagCode} rounded-sm w-8 h-6 shadow-md block ${currentLocale === language.code ? 'ring-2 ring-[#C5A065] ring-offset-2 ring-offset-black' : ''}`}></span>
            <span className={`text-xs font-bold uppercase tracking-widest ${currentLocale === language.code ? 'text-[#C5A065]' : 'text-gray-400'}`}>
              {language.code}
            </span>
          </motion.button>
        ))}
      </div>

    </div>
  )
}