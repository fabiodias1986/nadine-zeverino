'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, ArrowRight, MapPin, Navigation } from 'lucide-react';

export default function ContactCTA() {
  const t = useTranslations('LegalPoint.CTA');

  // Link para direções (Google Maps)
  const mapUrl = "https://www.google.com/maps/dir/?api=1&destination=Rua+Exemplo+123+Faro+Portugal";

  const contactMethods = [
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-8 h-8" />,
      label: 'WhatsApp',
      value: '+351 999 999 999',
      href: 'https://wa.me/351999999999',
      description: t('whatsappDesc'),
      // Cores neutralizadas: Fundo quase preto, borda subtil
      bg: 'bg-neutral-900/50',
      borderColor: 'border-white/5',
      accentColor: 'group-hover:text-brand'
    },
    {
      id: 'email',
      icon: <Mail className="w-8 h-8" />,
      label: 'Email',
      value: 'geral@nadinezeferino.com',
      href: 'mailto:geral@nadinezeferino.com',
      description: t('emailDesc'),
      bg: 'bg-neutral-900/50',
      borderColor: 'border-white/5',
      accentColor: 'group-hover:text-brand'
    },
    {
      id: 'phone',
      icon: <Phone className="w-8 h-8" />,
      label: t('phoneLabel'),
      value: '+351 999 999 999',
      href: 'tel:+351999999999',
      description: t('phoneDesc'),
      bg: 'bg-neutral-900/50',
      borderColor: 'border-white/5',
      accentColor: 'group-hover:text-brand'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Glow - Apenas em Vermelho da marca */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Lado Esquerdo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-serif font-black leading-tight mb-8">
              {t('titlePart1')} <br />
              <span className="text-brand italic">{t('titlePart2')}</span>
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 max-w-md">
              {t('subtitle')}
            </p>
            
            {/* Bloco de Morada com Direções */}
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 p-8 bg-white/[0.03] border border-white/10 rounded-sm hover:border-brand/40 transition-all duration-500"
            >
              <div className="p-3 bg-brand/10 rounded-full text-brand group-hover:bg-brand group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">{t('officeTitle')}</p>
                <p className="text-gray-300 leading-relaxed font-light">
                  Rua Exemplo, nº 123, 4º Andar<br />
                  8000-000 Faro, Portugal
                </p>
                <div className="mt-4 flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest">
                  <Navigation size={14} />
                  <span>{t('getDirections')}</span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Lado Direito: Cards Neutralizados */}
          <div className="grid gap-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.id}
                href={method.href}
                target={method.id === 'whatsapp' ? '_blank' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-6 p-8 border ${method.borderColor} ${method.bg} backdrop-blur-sm transition-all duration-500 group relative overflow-hidden hover:border-brand/30`}
              >
                {/* Efeito de Luz no Hover */}
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className={`transition-all duration-500 text-gray-400 ${method.accentColor} group-hover:scale-110`}>
                  {method.icon}
                </div>
                
                <div className="flex-1 relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-600 mb-1 group-hover:text-brand/60 transition-colors">
                    {method.label}
                  </p>
                  <p className="text-xl md:text-2xl font-bold tracking-tight">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-light opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    {method.description}
                  </p>
                </div>
                
                <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-brand" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}