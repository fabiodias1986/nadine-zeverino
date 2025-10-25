'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieBanner() {
  const t = useTranslations('CookieBanner');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner only if consent not given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white text-sm max-w-5xl">
          {t('message')}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleReject}
            className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            {t('reject')}
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#E83241] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors duration-200"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}