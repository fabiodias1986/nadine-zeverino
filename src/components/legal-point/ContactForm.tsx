'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import { ShieldCheck } from 'lucide-react';

type WindowWithGTag = Window & {
    gtag: (command: string, action: string, params: Record<string, string | number>) => void;
};

export default function ContactForm() {
    const t = useTranslations('LegalPoint.ContactForm');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: '',
    });
    const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string; message?: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const contactSchema = z.object({
        name: z.string().trim().min(1, { message: 'Name is required' }),
        email: z.string().trim().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
        phone: z.string().trim().min(1, { message: 'Phone is required' }),
        message: z.string().trim().min(1, { message: 'Please describe your case' }),
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: { name?: string; email?: string; phone?: string; message?: string } = {};
            result.error.issues.forEach((issue) => {
                const path = issue.path[0] as keyof typeof fieldErrors;
                if (!fieldErrors[path]) {
                    fieldErrors[path] = issue.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        setIsLoading(true);

        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: 'Strategic Analysis Request - Legal Point',
                    message: `Country of Residence: ${formData.country}\n\n${formData.message}`,
                }),
            });

            // Fire Google Analytics event
            if (typeof window !== 'undefined') {
                const w = window as unknown as WindowWithGTag;
                if (w.gtag) {
                    w.gtag('event', 'generate_lead', {
                        event_category: 'Contact Form',
                        event_label: 'Strategic Analysis Request'
                    });
                }
            }
        } catch (err) {
            console.error('Failed to submit contact form:', err);
        }

        setIsLoading(false);
        setHasSubmitted(true);
    };

    return (
        <section id="contact-form" className="py-24 bg-[#080808] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A065]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
                >
                    {!hasSubmitted ? (
                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            {/* Name + Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="cf-name" className="mb-2 block text-sm font-medium text-gray-300">
                                        {t('nameLabel')}
                                    </label>
                                    <input
                                        id="cf-name"
                                        name="name"
                                        type="text"
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
                                    <label htmlFor="cf-email" className="mb-2 block text-sm font-medium text-gray-300">
                                        {t('emailLabel')}
                                    </label>
                                    <input
                                        id="cf-email"
                                        name="email"
                                        type="email"
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
                            </div>

                            {/* Phone + Country Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="cf-phone" className="mb-2 block text-sm font-medium text-gray-300">
                                        {t('phoneLabel')}
                                    </label>
                                    <input
                                        id="cf-phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all ${
                                            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#C5A065]'
                                        } focus:bg-white/10 focus:ring-1 focus:ring-[#C5A065]`}
                                        placeholder={t('phonePlaceholder')}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="cf-country" className="mb-2 block text-sm font-medium text-gray-300">
                                        {t('countryLabel')}
                                    </label>
                                    <input
                                        id="cf-country"
                                        name="country"
                                        type="text"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all focus:border-[#C5A065] focus:bg-white/10 focus:ring-1 focus:ring-[#C5A065]"
                                        placeholder={t('countryPlaceholder')}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="cf-message" className="mb-2 block text-sm font-medium text-gray-300">
                                    {t('messageLabel')}
                                </label>
                                <textarea
                                    id="cf-message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 outline-none transition-all resize-none ${
                                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-[#C5A065]'
                                    } focus:bg-white/10 focus:ring-1 focus:ring-[#C5A065]`}
                                    placeholder={t('messagePlaceholder')}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#C5A065] to-[#AA8A55] text-black px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 shadow-lg"
                            >
                                {isLoading ? (
                                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-black border-t-transparent" />
                                ) : (
                                    <>
                                        {t('submitBtn')}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>

                            <div className="flex items-center justify-center gap-1.5 text-xs text-white/40">
                                <ShieldCheck className="h-3.5 w-3.5" />
                                <span>Your data is 100% secure and confidential.</span>
                            </div>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#C5A065]/20 mx-auto">
                                <svg className="h-10 w-10 text-[#C5A065]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-white mb-3">Evaluation Request Submitted</h3>
                            <p className="text-gray-400 max-w-md mx-auto">
                                Thank you! We have received your request. Dr. Nadine Zeverino will review your case and contact you within 24 hours.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}