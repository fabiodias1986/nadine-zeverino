'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';

type WindowWithGTag = Window & {
    gtag: (command: string, action: string, params: Record<string, string | number>) => void;
    gtag_report_conversion?: (url?: string) => boolean;
};

interface EbookModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EbookModal({ isOpen, onClose }: EbookModalProps) {
    const t = useTranslations('LegalPoint.EbookModal');
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const downloadSchema = z.object({
        name: z.string().trim().min(1, { message: t('nameRequired') }),
        email: z.string().trim()
            .min(1, { message: t('emailRequired') })
            .email({ message: t('emailError') }),
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        const result = downloadSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: { name?: string; email?: string } = {};
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
                    phone: '',
                    locale: 'en',
                }),
            });

            // Fire Google Analytics lead event
            if (typeof window !== 'undefined') {
                const w = window as unknown as WindowWithGTag;
                if (w.gtag) {
                    w.gtag('event', 'generate_lead', {
                        event_category: 'Lead',
                        event_label: 'Ebook Modal Download'
                    });
                }
                if (typeof w.gtag_report_conversion === 'function') {
                    w.gtag_report_conversion();
                }
            }
        } catch (err) {
            console.error('Failed to register lead:', err);
        }

        setIsLoading(false);
        setHasSubmitted(true);
    };

    // Reset state when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            // Delay reset to avoid flash
            const timer = setTimeout(() => {
                setHasSubmitted(false);
                setFormData({ name: '', email: '' });
                setErrors({});
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-[#C5A065]/10"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="p-8 md:p-10">
                            {!hasSubmitted ? (
                                <div>
                                    {/* Badge */}
                                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C5A065]/30 bg-[#C5A065]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#C5A065]">
                                        <Download className="h-4 w-4" />
                                        <span>Free Guide</span>
                                    </div>

                                    <h3 className="mb-2 text-2xl font-semibold text-white">
                                        {t('title')}
                                    </h3>
                                    <p className="mb-6 text-sm text-white/60">
                                        {t('subtitle')}
                                    </p>

                                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                        <div>
                                            <label htmlFor="modal-name" className="mb-1.5 block text-sm font-medium text-white/80">
                                                {t('nameLabel')}
                                            </label>
                                            <input
                                                id="modal-name"
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
                                            <label htmlFor="modal-email" className="mb-1.5 block text-sm font-medium text-white/80">
                                                {t('emailLabel')}
                                            </label>
                                            <input
                                                id="modal-email"
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
                                    className="flex flex-col items-center text-center py-6"
                                >
                                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#C5A065]/20">
                                        <CheckCircle2 className="h-10 w-10 text-[#C5A065]" />
                                    </div>
                                    <h3 className="mb-3 text-2xl font-semibold text-white">
                                        {t('successTitle')}
                                    </h3>
                                    <p className="mb-8 text-white/70">
                                        {t('successSubtitle')}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                                        <a
                                            href="/Property Acquisition in Portugal - by Legal Point .pdf"
                                            download="Property Acquisition in Portugal - by Legal Point .pdf"
                                            className="flex items-center justify-center gap-2 rounded-lg bg-[#C5A065] px-6 py-3 font-medium text-black transition-colors hover:bg-[#D4AF74]"
                                        >
                                            <Download className="h-4 w-4" />
                                            {t('downloadBtn')}
                                        </a>
                                        <button
                                            onClick={onClose}
                                            className="rounded-lg bg-white/10 px-6 py-3 font-medium text-white transition-colors hover:bg-white/20"
                                        >
                                            Back to website
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}