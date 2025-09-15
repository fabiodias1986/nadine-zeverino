// src/hooks/useServices.ts
import { useMemo } from 'react';
import { ServiceType } from '@/types/Service';
import { SERVICES } from '@/data/services.data';
import { useTranslations } from 'next-intl';

export const useServices = () => {
  const t = useTranslations();

  // Converte serviços com traduções
  const translatedServices = useMemo(() => {
    return SERVICES.map(service => ({
      ...service,
      title: t(service.titleKey),
      description: t(service.descriptionKey),
      category: t(service.categoryKey),
      keywords: t(service.keywordsKey).split('|'),
      ctaText: t(service.ctaTextKey),
      features: t(service.featuresKey).split('|'),
      application: t(service.applicationKey)
    }));
  }, [t]);

  // Agrupa serviços por categoria, pegando apenas o primeiro de cada
  const categorizedServices = useMemo(() => {
    const grouped: Record<string, ServiceType> = {};
    translatedServices.forEach(service => {
      if (!grouped[service.category]) {
        grouped[service.category] = service;
      }
    });
    return Object.values(grouped);
  }, [translatedServices]);

  // Função para obter todos os serviços
  const getAllServices = useMemo(() => {
    return translatedServices;
  }, [translatedServices]);

  // Função para obter serviço por ID
  const getServiceById = (id: string) => {
    return translatedServices.find(service => service.id === id);
  };

  // Função para obter serviços por categoria
  const getServicesByCategory = (category: string) => {
    return translatedServices.filter(service => service.category === category);
  };

  return {
    services: categorizedServices,
    allServices: getAllServices,
    getServiceById,
    getServicesByCategory
  };
};