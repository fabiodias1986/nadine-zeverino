'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface BookMeetingButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export default function BookMeetingButton({
  size = 'md',
  className = '',
  fullWidth = false
}: BookMeetingButtonProps) {
  const t = useTranslations('Common');

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-6 py-3 text-sm gap-2';
      case 'lg':
        return 'px-8 py-4 text-lg gap-3';
      case 'md':
      default:
        return 'px-8 py-4 text-base gap-3';
    }
  };

  return (
    <motion.a
      href="https://calendar.app.google/gBr7b8fKmrMc976o9"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(232, 50, 65, 0.25)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative inline-flex items-center justify-center
        px-8 py-4 bg-gradient-to-r from-[#E83241] to-[#B83232] 
        text-white font-bold rounded-xl overflow-hidden 
        shadow-xl border border-[#E83241]
        ${getSizeClasses()}
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      {/* Efeito de brilho */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
      />
      
      <Calendar className="group-hover:scale-110 transition-transform" />
      <span>{t('scheduleMeeting')}</span>
      <motion.div
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-4 h-4 text-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.a>
  );
}