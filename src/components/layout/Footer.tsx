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

export default function Footer() {
  // Navigation links array
  const navigationLinks = [
    { icon: Home, label: "Início", href: "/" },
    { icon: Users, label: "Sobre", href: "/about" },
    { icon: Briefcase, label: "Serviços", href: "/pratice-areas" },
    { icon: MessageCircle, label: "Contacto", href: "/contact" },
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
          <p className="text-lg">Largo de Heliodoro Salgado Nº8</p>
          <p className="text-lg">8500-537 Portimão</p>
        </div>
      ),
    },
    {
      icon: Phone,
      content: (
        <a
          href="tel:+351964022222"
          className="text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide text-lg"
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
          className="text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide text-lg"
        >
          niz@nadinezeverino.com
        </a>
      ),
    },
  ]

  // Footer links array
  const footerLinks = [
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
    { label: "Cookies", href: "#" },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Layout responsivo: 1 coluna em mobile, 2 em tablet, 3 em desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 justify-items-center justify-center">
          {/* Primeira Coluna - Logo, Descrição e Redes Sociais */}
          <div className="md:col-span-2 lg:col-span-6 space-y-6 lg:space-y-8 text-center md:text-center lg:text-left w-full max-w-md">
            <div>
              <div className="h-12 sm:h-16 w-auto mb-4 flex justify-center lg:justify-start">
                <img src="/logo.png" alt="Logo da Empresa" className="h-full w-auto object-contain" />
              </div>
              <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                Nadine Isabel Zeverino é registrada e regulamentada pela comissão de qualidade do Direito
              </p>
            </div>
            <div className="flex space-x-4 sm:space-x-5 justify-center lg:justify-start">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-[#E83241] hover:text-black hover:scale-110 transition-all duration-300 group"
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Segunda Coluna - Links do Menu */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4 lg:space-y-8 text-left w-[250px] lg:w-full max-w-xs pl-4 lg:pl-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide">NAVEGAÇÃO</h3>
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navigationLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 font-light tracking-wide group"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-[#E83241] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                    <span className="text-lg">{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </div>

          {/* Terceira Coluna - Contactos */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4 lg:space-y-8 text-left w-[250px] lg:w-full max-w-xs pl-4 lg:pl-0">
            <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide">CONTACTO</h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="group">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white bg-opacity-10 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 group-hover:bg-[#E83241] group-hover:text-black group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
        <div className="border-t border-white border-opacity-10 mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-light tracking-wide">
              © 2025 Nadine Zeverino. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 md:space-x-8">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg font-light tracking-wide"
                >
                  <span className="text-lg">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}