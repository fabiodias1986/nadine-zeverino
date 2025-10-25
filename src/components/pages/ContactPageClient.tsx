// app/[locale]/contactos/ContactPageClient.tsx
'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactForm from '@/components/forms/ContactForm';
import PageHeader from '@/components/layout/PageHeader';
import { useTranslations } from 'next-intl';

export default function ContactPageClient() {
  const t = useTranslations('ContactPage');
  
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-[#E83241] text-xl" />,
      title: t('address.title'),
      content: t('address.content'),
      action: () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Largo+de+Heliodoro+Salgado+Nº8,+8500-537+Portimão,+Portugal', '_blank');
      }
    },
    {
      icon: <FaPhone className="text-[#E83241] text-xl" />,
      title: t('phone.title'),
      content: (
        <div className="flex flex-col">
          <span>{t('phone.content')}</span>
          <span className="text-sm text-gray-500 mt-1">{t('mobileCallNote')}</span>
        </div>
      ),
      action: () => {
        window.location.href = 'tel:+351964022222';
      }
    },
    {
      icon: <FaEnvelope className="text-[#E83241] text-xl" />,
      title: t('email.title'),
      content: t('email.content'),
      action: () => {
        window.location.href = 'mailto:niz@nadinezeverino.com';
      }
    },
    {
      icon: <FaClock className="text-[#E83241] text-xl" />,
      title: t('hours.title'),
      content: t('hours.content'),
      action: null
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/nadineisabelzeverino.adv", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/nadinezeverino_advogada", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://pt.linkedin.com/in/nizaadvogada", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
      />

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('contactInfoTitle')}</h2>
              <div className="h-1 w-20 bg-[#E83241] mb-8"></div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    onClick={info.action ? () => info.action() : undefined}
                    className={`flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${info.action ? 'hover:border-[#E83241]' : ''}`}
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <div className="text-gray-600 mt-1">{info.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('followUs')}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl hover:bg-[#E83241] transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('locationTitle')}</h2>
          <div className="h-1 w-20 bg-[#E83241] mb-8"></div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.2994094000004!2d-8.5385!3d37.1375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1bbf4a3c6b4c6d%3A0x5a0d5a5a5a5a5a5a!2sLargo%20de%20Heliodoro%20Salgado%208%2C%208500-537%20Portim%C3%A3o!5e0!3m2!1sen!2spt!4v1650000000000!5m2!1sen!2spt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('mapTitle')}
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}