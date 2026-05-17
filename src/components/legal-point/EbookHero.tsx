'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle2, FileText, Loader2 } from 'lucide-react';
import CSS3DBook from './CSS3DBook';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { useParams } from 'next/navigation';

export default function EbookHero() {
  const t = useTranslations('LegalPoint.Ebook.Hero');
  const params = useParams();
  const locale = (params?.locale as string) || 'pt';
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Validation Schema using Zod
  const downloadSchema = z.object({
    name: z.string().trim().min(1, { message: t('nameRequired') }),
    email: z.string().trim()
      .min(1, { message: t('emailRequired') })
      .email({ message: t('emailError') }),
    phone: z.string().trim()
      .refine((val) => {
        // react-international-phone typically defaults to ~4-5 chars (e.g., "+351").
        // Check if anything was typed beyond the prefix.
        return val.length > 5;
      }, { message: t('phoneRequired') })
      .refine((val) => {
        // Check if the input is a fully formed phone number.
        return val.length > 8;
      }, { message: t('phoneError') }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = downloadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; phone?: string } = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof typeof fieldErrors;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }
    
    // Trigger PDF download immediately
    try {
      const link = document.createElement('a');
      link.href = '/Property Acquisition in Portugal - by Legal Point .pdf';
      link.setAttribute('download', 'Property Acquisition in Portugal - by Legal Point .pdf');
      link.click();
    } catch (err) {
      console.error('Download failed', err);
    }

    setIsLoading(true);

    try {
      await fetch('/api/mailerlite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          locale: locale,
        }),
      });
    } catch (err) {
      console.error('Failed to register lead with E-goi:', err);
    }

    setIsLoading(false);
    setHasSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-40 pb-16 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C5A065]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C5A065]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Restored Header Text - Centered above the visual elements */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A065]/30 bg-[#C5A065]/10 text-[#C5A065] text-xs font-semibold uppercase tracking-widest mb-6">
              <FileText className="w-4 h-4" />
              {t('badge')}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-light text-white leading-tight mb-6 max-w-4xl">
              {t('title').split(' ').map((word, i) => (
                <span key={i} className={i === 2 || i === 3 ? "font-semibold text-[#C5A065]" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Book Visual */}
          <div className="flex flex-col items-center lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[400px]"
            >
              <CSS3DBook coverImage="/media/ebook-cover.png" />
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full max-w-[480px]"
            >
              {/* Card Glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#C5A065]/50 to-transparent rounded-2xl blur-[2px] opacity-30" />
              
              <div className="relative bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
                {!hasSubmitted ? (
                  <div className="flex flex-col gap-6">
                    <div>
                      <h2 className="text-2xl font-serif font-semibold text-white mb-2">{t('formTitle')}</h2>
                      <p className="text-white/50 text-sm">{t('formSubtitle')}</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">{t('nameLabel')}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white outline-none transition-all ${
                            errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#C5A065]'
                          }`}
                          placeholder={t('namePlaceholder')}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 ml-1 mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">{t('emailLabel')}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white outline-none transition-all ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#C5A065]'
                          }`}
                          placeholder={t('emailPlaceholder')}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 ml-1 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/70 ml-1">{t('phoneLabel')}</label>
                        <div 
                          className={`flex items-center bg-white/5 border rounded-lg transition-all ${
                            errors.phone ? 'border-red-500 focus-within:border-red-500' : 'border-white/10 focus-within:border-[#C5A065]'
                          }`}
                        >
                          <PhoneInput
                            defaultCountry="pt"
                            value={formData.phone}
                            onChange={(phone) => {
                              setFormData(prev => ({ ...prev, phone }));
                              if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                            }}
                            className="w-full"
                            inputClassName="!bg-transparent !border-none !text-white !w-full !h-[48px] !pl-2 !outline-none"
                            countrySelectorStyleProps={{
                              buttonClassName: "!bg-transparent !border-none !h-[48px] !pl-3 !rounded-l-lg hover:!bg-white/5",
                              dropdownStyleProps: {
                                style: {
                                  backgroundColor: '#0a0a0a',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  color: 'white'
                                }
                              }
                            }}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-red-500 ml-1 mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-[#C5A065] to-[#AA8A55] text-black font-bold py-5 rounded-lg transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(197,160,101,0.5)] overflow-hidden"
                      >
                        {/* Sheen Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            <span className="relative z-10">{t('submitBtn')}</span>
                            <Download className="w-5 h-5 relative z-10 group-hover:translate-y-0.5 transition-transform duration-300" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#C5A065]/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#C5A065]" />
                    </div>
                    <h2 className="text-3xl font-semibold text-white mb-4">{t('successTitle')}</h2>
                    <p className="text-white/60 mb-8 leading-relaxed">
                      {t('successSubtitle')}
                    </p>
                    <a
                      href="/Property Acquisition in Portugal - by Legal Point .pdf"
                      download="Property Acquisition in Portugal - by Legal Point .pdf"
                      className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-colors border border-white/10"
                    >
                      <Download className="w-5 h-5" />
                      {t('downloadManual')}
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
