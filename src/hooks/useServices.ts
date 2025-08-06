// src/hooks/useServices.ts
import { useMemo } from 'react';
import { ServiceType } from '@/types/Service';
import { SERVICES } from '@/data/services.data';

// Define ServiceCategory type based on your data structure
type ServiceCategory = ServiceType['category'];

export const useServices = () => {
  // Agrupa serviços por categoria, pegando apenas o primeiro de cada
  const categorizedServices = useMemo(() => {
    const grouped = SERVICES.reduce((acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = service;
      }
      return acc;
    }, {} as Record<ServiceCategory, ServiceType>);
    
    return Object.values(grouped);
  }, []);

  return {
    services: categorizedServices
  };
};