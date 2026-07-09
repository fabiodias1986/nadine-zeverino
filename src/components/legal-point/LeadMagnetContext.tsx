'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface LeadMagnetContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const LeadMagnetContext = createContext<LeadMagnetContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function LeadMagnetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadMagnetContext.Provider value={{ isOpen, open, close }}>
      {children}
    </LeadMagnetContext.Provider>
  );
}

export function useLeadMagnet() {
  return useContext(LeadMagnetContext);
}

export function useLeadMagnetActions() {
  const { open, close } = useContext(LeadMagnetContext);
  return { open, close };
}
