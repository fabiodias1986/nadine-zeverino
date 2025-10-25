'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string; isVisible: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setToast({ 
          type: 'success', 
          message: t('successMessage'), 
          isVisible: true 
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setToast({ 
          type: 'error', 
          message: result.error || t('errorMessage'), 
          isVisible: true 
        });
      }
    } catch (error: unknown) {
      const errorMessage =
        typeof error === 'object' && error !== null && 'message' in error
          ? String((error as { message?: unknown }).message)
          : t('connectionError');
      setToast({ 
        type: 'error', 
        message: errorMessage, 
        isVisible: true 
      });
    } finally {
      setIsSubmitting(false);
      
      // Auto-hide toast after 5 seconds
      setTimeout(() => {
        setToast(prev => prev ? { ...prev, isVisible: false } : null);
      }, 5000);
    }
  };

  const hideToast = () => {
    setToast(prev => prev ? { ...prev, isVisible: false } : null);
  };

  // Opções de assunto traduzidas
  const subjectOptions = [
    { value: '', label: t('selectSubject') },
    { value: 'Direito Civil', label: t('civilLaw') },
    { value: 'Direito Comercial', label: t('commercialLaw') },
    { value: 'Direito Imobiliário', label: t('realEstateLaw') },
    { value: 'Contratos e Negócios', label: t('contractsBusiness') },
    { value: 'Outro', label: t('other') }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('title')}</h2>
      <div className="h-1 w-20 bg-[#E83241] mb-8"></div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('nameLabel')} *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300  text-gray-700 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors outline-none"
              placeholder={t('namePlaceholder')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('emailLabel')} *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors outline-none"
              placeholder={t('emailPlaceholder')}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('phoneLabel')}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors outline-none"
              placeholder={t('phonePlaceholder')}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t('subjectLabel')} *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors appearance-none bg-white outline-none"
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('messageLabel')} *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors outline-none"
            placeholder={t('messagePlaceholder')}
          ></textarea>
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-6 bg-[#E83241] text-white font-bold rounded-xl hover:bg-[#d02a37] transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 outline-none"
        >
          {isSubmitting ? t('sending') : t('sendMessage')}
        </motion.button>
      </form>

      {/* Toast Notification - Canto inferior direito */}
      <AnimatePresence>
        {toast && toast.isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed bottom-6 right-6 z-50 max-w-sm w-full rounded-xl shadow-2xl border backdrop-blur-xl p-4 flex items-start gap-3 ${
              toast.type === 'success' 
                ? 'bg-green-50/90 border-green-200/30 text-green-800' 
                : 'bg-red-50/90 border-red-200/30 text-red-800'
            }`}
          >
            {/* Ícone do toast */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              toast.type === 'success' 
                ? 'bg-green-500/20 text-green-600' 
                : 'bg-red-500/20 text-red-600'
            }`}>
              {toast.type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            
            {/* Conteúdo do toast */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{toast.message}</p>
            </div>
            
            {/* Botão de fechar */}
            <button
              onClick={hideToast}
              className={`p-1 rounded-full ${
                toast.type === 'success' 
                  ? 'hover:bg-green-100/50 text-green-500' 
                  : 'hover:bg-red-100/50 text-red-500'
              }`}
              aria-label="Fechar notificação"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}