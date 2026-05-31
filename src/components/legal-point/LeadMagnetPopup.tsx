'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { useParams } from 'next/navigation';
import GoogleConversionPageLoad from '@/components/GoogleConversionPageLoad';

export default function LeadMagnetPopup() {
  const t = useTranslations('LegalPoint.LeadMagnetPopup');
  const params = useParams();
  const locale = (params?.locale as string) || 'pt';
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [mounted, setMounted] = useState(false);

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
  
  useEffect(() => {
    setMounted(true);
    // Check if user already saw or interacted with popup
    const popupState = localStorage.getItem('legalPointLeadMagnet');
    if (popupState === 'dismissed' || popupState === 'submitted') {
      return;
    }

    // Trigger 1: Time on page (15 seconds)
    const timer = setTimeout(() => {
      if (localStorage.getItem('legalPointLeadMagnet')) return;
      setIsOpen(true);
    }, 15000);

    // Trigger 2: Exit Intent
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (localStorage.getItem('legalPointLeadMagnet')) return;
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    if (!hasSubmitted) {
      localStorage.setItem('legalPointLeadMagnet', 'dismissed');
    }
  };

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
      
      // Fire Google Analytics generate_lead event
      if (typeof window !== 'undefined') {
        const w = window as unknown as { 
          gtag?: (event: string, action: string, params: Record<string, string | number>) => void;
          gtag_report_conversion?: (url?: string) => boolean;
        };
        if (w.gtag) {
          w.gtag('event', 'generate_lead', {
            event_category: 'Lead',
            event_label: 'Ebook Download'
          });
        }
        if (typeof w.gtag_report_conversion === 'function') {
          w.gtag_report_conversion();
        }
      }
    } catch (err) {
      console.error('Failed to register lead with E-goi:', err);
    }

    setIsLoading(false);
    setHasSubmitted(true);
    localStorage.setItem('legalPointLeadMagnet', 'submitted');
    
    // Optional: Close popup automatically after showing success
    // setTimeout(() => setIsOpen(false), 5000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="lead-magnet-popup-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-[#C5A065]/10"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column - Visual / Value Prop */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 md:p-12">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
                
                {/* Glow Effect */}
                <div className="absolute -left-[20%] -top-[20%] h-[300px] w-[300px] rounded-full bg-[#C5A065]/10 blur-[80px]"></div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5A065]/30 bg-[#C5A065]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A065]">
                    <FileText className="h-4 w-4" />
                    <span>{t('freeGuide')}</span>
                  </div>
                  
                  <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                    {t('titlePart1')}<span className="font-semibold text-[#C5A065]">{t('titleAccent')}</span>
                  </h2>
                  
                  <p className="mb-8 text-lg text-white/70">
                    {t('subtitle')}
                  </p>

                  <ul className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-3 text-white/80"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#C5A065]" />
                        <span>{t(`point${i}`)}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Mobile-only CTA button to direct to the Ebook page */}
                  <div className="mt-8 block md:hidden">
                    <a
                      href={`/${locale}/legal-point/ebook`}
                      onClick={() => {
                        localStorage.setItem('legalPointLeadMagnet', 'submitted');
                      }}
                      className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#C5A065] px-6 py-3.5 font-medium text-black transition-all hover:bg-[#D4AF74]"
                    >
                      <span>{t('goToDownloadBtn')}</span>
                      <Download className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="hidden md:flex relative flex-col justify-center p-8 md:p-12 bg-[#050505]">
                {!hasSubmitted ? (
                  <div className="relative z-10">
                    <h3 className="mb-2 text-2xl font-semibold text-white">
                      {t('formTitle')}
                    </h3>
                    <p className="mb-6 text-sm text-white/60">
                      {t('formSubtitle')}
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-white/80">
                          {t('nameLabel')}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all ${
                            errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#C5A065]'
                          } focus:bg-white/10 focus:ring-1 focus:ring-[#C5A065]`}
                          placeholder={t('namePlaceholder')}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-white/80">
                          {t('phoneLabel')}
                        </label>
                        <div 
                          className={`w-full transition-all focus-within:ring-1 focus-within:ring-[#C5A065] border rounded-lg ${
                            errors.phone ? 'border-red-500' : 'border-transparent'
                          }`}
                          style={{
                            '--react-international-phone-height': '48px',
                            '--react-international-phone-background-color': 'rgba(255, 255, 255, 0.05)',
                            '--react-international-phone-text-color': 'white',
                            '--react-international-phone-border-color': 'rgba(255, 255, 255, 0.1)',
                            '--react-international-phone-dropdown-item-background-color': '#1a1a1a',
                            '--react-international-phone-dropdown-item-text-color': 'white',
                            '--react-international-phone-dropdown-item-background-color-hover': 'rgba(255,255,255,0.1)',
                            '--react-international-phone-border-radius': '0.5rem',
                          } as React.CSSProperties}
                        >
                          <PhoneInput
                            defaultCountry="pt"
                            value={formData.phone}
                            onChange={(phone) => {
                              setFormData((prev) => ({ ...prev, phone }));
                              if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                            }}
                            className="w-full"
                            inputClassName="!w-full !bg-transparent !border-white/10 !text-white placeholder-white/30 focus:!border-[#C5A065] !outline-none !px-4"
                            countrySelectorStyleProps={{
                              buttonClassName: "!bg-transparent !border-white/10 !px-3 hover:!bg-white/10 transition-colors"
                            }}
                          />
                        </div>
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/80">
                          {t('emailLabel')}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all ${
                            errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#C5A065]'
                          } focus:bg-white/10 focus:ring-1 focus:ring-[#C5A065]`}
                          placeholder={t('emailPlaceholder')}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#C5A065] px-6 py-3.5 font-medium text-black transition-all hover:bg-[#D4AF74] disabled:opacity-70"
                      >
                        {isLoading ? (
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                        ) : (
                          <>
                            {t('submitBtn')}
                            <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>

                      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/40">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        <span>{t('privacy')}</span>
                      </div>
                    </form>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <GoogleConversionPageLoad />
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#C5A065]/20">
                      <CheckCircle2 className="h-10 w-10 text-[#C5A065]" />
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-white">
                      {t('successTitle')}
                    </h3>
                    <p className="mb-8 text-white/70">
                      {t('successSubtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                      <a
                        href="/Property Acquisition in Portugal - by Legal Point .pdf"
                        download="Property Acquisition in Portugal - by Legal Point .pdf"
                        className="flex items-center justify-center gap-2 rounded-lg bg-[#C5A065] px-6 py-3 font-medium text-black transition-colors hover:bg-[#D4AF74]"
                      >
                        <Download className="h-4 w-4" />
                        {t('downloadBtn')}
                      </a>
                      <button
                        onClick={closePopup}
                        className="rounded-lg bg-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/20"
                      >
                        {t('backBtn')}
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
