'use client'

import { useEffect } from 'react'

export default function GoogleConversionPageLoad() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18188234054/uGDNCLCKgrMcEMba6eBD',
        'value': 1.0,
        'currency': 'EUR'
      });
    }
  }, []);

  return null;
}
