'use client'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Home,
  Users,
  Briefcase,
  MessageCircle,
} from "lucide-react"
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  // Navigation links array
  const navigationLinks = [
    { icon: Home, label: t('home'), href: "/" },
    { icon: Users, label: t('about'), href: "/about" },
    { icon: Briefcase, label: t('services'), href: "/pratice-areas" },
    { icon: MessageCircle, label: t('contact'), href: "/contact" },
  ]

  // Social media links array
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  // Contact information array
  const contactInfo = [
    {
      icon: MapPin,
      content: (
        <div className="text-gray-400 font-light leading-relaxed">
          <p className="text-xs xs:text-sm sm:text-base md:text-lg">{t('address.line1')}</p>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg">{t('address.line2')}</p>
        </div>
      ),
    },
    {
      icon: Phone,
      content: (
        <a
          href="tel:+351964022222"
          className="text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide text-xs xs:text-sm sm:text-base md:text-lg"
        >
          +351 964 022 222
        </a>
      ),
    },
    {
      icon: Mail,
      content: (
        <a
          href="mailto:niz@nadinezeverino.com"
          className="text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide text-xs xs:text-sm sm:text-base md:text-lg"
        >
          niz@nadinezeverino.com
        </a>
      ),
    },
  ]

  // Footer links array
  const footerLinks = [
    { label: t('privacy'), href: "#" },
    { label: t('terms'), href: "#" },
    { label: t('cookies'), href: "#" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-8xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16">
        {/* Layout responsivo: 1 coluna em mobile, 2 em tablet, 3 em desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 justify-items-center justify-center">
          {/* Primeira Coluna - Logo, Descrição e Redes Sociais */}
          <div className="md:col-span-2 lg:col-span-6 space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-9 text-center md:text-center lg:text-left w-full max-w-md">
            <div>
              <div className="flex flex items-center lg:items-center  mb-3 xs:mb-4 sm:mb-5">
                <div className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 w-auto mb-2 flex justify-center lg:justify-start">
                  <img src="/media/logo.png" alt="Logo da Empresa" className="h-full w-auto object-contain" />
                </div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-white ml-2">
                  {t('fullName')}
                </h2>
              </div>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {t('description')}
              </p>
            </div>
            <div className="flex space-x-3 xs:space-x-4 sm:space-x-5 md:space-x-6 justify-center lg:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#E83241] hover:text-black hover:scale-110 transition-all duration-300 group"
                  >
                    <IconComponent className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 md:h-4.5 md:w-4.5 lg:h-5 lg:w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Segunda Coluna - Links do Menu */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 text-left w-full max-w-xs">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl  font-light tracking-wide">{t('navigation')}</h3>
            <nav className="flex flex-col space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              {navigationLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5 text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide group"
                  >
                    <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#E83241] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-4.5 lg:w-4.5" />
                    </div>
                    <span className="text-xs xs:text-sm sm:text-base md:text-lg">{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Terceira Coluna - Contactos */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 text-left w-full max-w-xs">
            <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-light tracking-wide">{t('contact')}</h3>
            <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="group">
                    <div className="flex items-start justify-start space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-5">
                      <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-white bg-opacity-10 rounded-full flex items-center justify-center mt-0.5 xs:mt-1 sm:mt-1.5 md:mt-2 group-hover:bg-[#E83241] group-hover:text-black group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 lg:h-4.5 lg:w-4.5" />
                      </div>
                      {contact.content}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Linha de separação e copyright */}
        <div className="border-t border-white border-opacity-10 mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 pt-4 xs:pt-5 sm:pt-6 md:pt-7 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 xs:space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-wide">
              © 2025 {t('fullName')}. {t('rights')}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-3 xs:space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 hover:text-white transition-colors duration-300 font-light tracking-wide"
                >
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}