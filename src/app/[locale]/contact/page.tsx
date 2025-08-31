'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactForm from '@/components/forms/ContactForm';
import PageHeader from '@/components/layout/PageHeader';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-[#E83241] text-xl" />,
      title: "Morada",
      content: "Largo de Heliodoro Salgado Nº8, 8500-537 Portimão, Portugal",
      action: () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Largo+de+Heliodoro+Salgado+Nº8,+8500-537+Portimão,+Portugal', '_blank');
      }
    },
    {
      icon: <FaPhone className="text-[#E83241] text-xl" />,
      title: "Telefone",
      content: "+351 964 022 222",
      action: () => {
        window.location.href = 'tel:+351964022222';
      }
    },
    {
      icon: <FaEnvelope className="text-[#E83241] text-xl" />,
      title: "Email",
      content: "niz@nadinezeverino.com",
      action: () => {
        window.location.href = 'mailto:niz@nadinezeverino.com';
      }
    },
    {
      icon: <FaClock className="text-[#E83241] text-xl" />,
      title: "Horário",
      content: "Segunda a Sexta: 9h - 18h",
      action: null
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header - Reusable Component */}
      <PageHeader 
        title="ENTRE EM CONTACTO"
        subtitle="Estamos aqui para ajudar. Entre em contacto e nossa equipa entrará em contato o mais breve possível."
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Informações de Contacto</h2>
              <div className="h-1 w-20 bg-[#E83241] mb-8"></div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    onClick={info.action ? () => info.action() : undefined}
                    className={`flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${info.action ? 'hover:border-[#E83241]' : ''}`}
                  >
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600 mt-1">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Siga-nos nas Redes Sociais</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl hover:bg-[#E83241] transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Component */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Localização</h2>
          <div className="h-1 w-20 bg-[#E83241] mb-8"></div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            {/* Google Maps Iframe - Updated with correct address */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.2994094000004!2d-8.5385!3d37.1375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1bbf4a3c6b4c6d%3A0x5a0d5a5a5a5a5a5a!2sLargo%20de%20Heliodoro%20Salgado%208%2C%208500-537%20Portim%C3%A3o!5e0!3m2!1sen!2spt!4v1650000000000!5m2!1sen!2spt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}