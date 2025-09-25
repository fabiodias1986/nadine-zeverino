'use client'
import {
  Mail,
  Phone,
  MapPin,
  Home,
  Users,
  Briefcase,
  MessageCircle,
  BookOpen,
} from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import  Image  from 'next/image';

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
    { icon: FaFacebook, href: "https://www.facebook.com/nadineisabelzeverino.adv", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/nadinezeverino_advogada", label: "Instagram" },
    { icon: FaLinkedin, href: "https://pt.linkedin.com/in/nizaadvogada", label: "LinkedIn" },
  ]

  // Contact information array
  const contactInfo = [
    {
      icon: MapPin,
      content: (
        <div className="text-gray-400 font-light leading-relaxed">
          <p className="text-sm">{t('address.line1')}</p>
          <p className="text-sm">{t('address.line2')}</p>
        </div>
      ),
    },
    {
      icon: Phone,
      content: (
        <a
          href="tel:+351964022222"
          className="text-gray-400 hover:text-white transition-colors duration-300 font-light text-sm"
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
          className="text-gray-400 hover:text-white transition-colors duration-300 font-light text-sm"
        >
          niz@nadinezeverino.com
        </a>
      ),
    },
  ]

  // Footer links array (removido terms, adicionado livro de reclamações)
  const footerLinks = [
    { label: t('privacy'), href: "/privacy" },
    { label: t('cookies'), href: "/cookies" },
    { label: t('complaints'), href: "https://www.livroreclamacoes.pt/", external: true },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Layout responsivo: 1 coluna em mobile, 2 em tablet, 3 em desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 justify-items-center">
          {/* Primeira Coluna - Logo, Descrição e Redes Sociais */}
          <div className="md:col-span-2 lg:col-span-6 space-y-6 text-center md:text-center lg:text-left w-full">
            <div>
              <div className="flex flex-col items-center lg:items-start mb-4">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="h-12 w-auto">
                    <Image 
                    width={250} height={250}
                    src="/media/logo.png" alt="Logo Nadine Isabel Zeverino" className="h-12 w-auto object-contain" />
                  </div>
                  <h2 className="text-xl font-bold text-white ml-3">
                    {t('fullName')}
                  </h2>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light max-w-md mx-auto lg:mx-0">
                {t('description')}
              </p>
            </div>
            <div className="flex space-x-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#E83241] hover:text-black hover:scale-110 transition-all duration-300 group"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Segunda Coluna - Links do Menu */}
          <div className="md:col-span-1 lg:col-span-3 space-y-6 text-left w-full">
            <h3 className="text-lg font-semibold tracking-wide text-white">{t('navigation')}</h3>
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#E83241] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium">{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Terceira Coluna - Contactos */}
          <div className="md:col-span-1 lg:col-span-3 space-y-6 text-left w-full">
            <h3 className="text-lg font-semibold tracking-wide text-white">{t('contact')}</h3>
            <div className="space-y-5">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-white bg-opacity-10 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-[#E83241] group-hover:text-black group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="h-4 w-4" />
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
        <div className="border-t border-white border-opacity-10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 {t('fullName')}. {t('rights')}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
              {footerLinks.map((link, index) => (
                link.external ? (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1"
                  >
                    <BookOpen className="w-4 h-4" />
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}