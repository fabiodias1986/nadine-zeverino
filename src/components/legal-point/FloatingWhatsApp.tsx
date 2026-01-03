'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const t = useTranslations('LegalPoint.FloatingBtn');

  return (
    <motion.a
      href="https://wa.me/351999999999"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-sm text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
        {t('tooltip')}
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
    </motion.a>
  );
}