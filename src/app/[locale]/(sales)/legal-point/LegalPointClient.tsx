'use client';
import { ReactNode } from 'react';
import { LeadMagnetProvider } from '@/components/legal-point/LeadMagnetContext';

export default function LegalPointClient({ children }: { children: ReactNode }) {
  return <LeadMagnetProvider>{children}</LeadMagnetProvider>;
}
