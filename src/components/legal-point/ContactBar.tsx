'use client';

import { useTranslations } from 'next-intl';
import { Phone, MessageCircle } from 'lucide-react';

export default function ContactBar() {
  const t = useTranslations('LegalPoint.ContactBar');

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md text-white py-3 px-6 border-b border-brand/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex gap-8 text-sm tracking-wide">
          <a href="tel:+351999999999" className="flex items-center gap-2 hover:text-brand transition-colors">
            <Phone size={14} className="text-brand" /> 
            <span>+351 999 999 999</span>
          </a>
          <a href="https://wa.me/XXXXXXXXX" className="flex items-center gap-2 hover:text-brand transition-colors">
            <MessageCircle size={14} className="text-brand" /> 
            <span>WhatsApp</span>
          </a>
        </div>
        <button className="bg-brand text-white px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
          {t('bookMeetingBtn')}
        </button>
      </div>
    </nav>
  );
}