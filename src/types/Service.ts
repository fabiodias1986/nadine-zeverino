import { ElementType } from 'react';

export interface ServiceType {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
  keywordsKey: string;
  icon: ElementType;
  ctaTextKey: string;
  featuresKey: string;
  applicationKey: string;
  createdAt: Date;
  // Propriedades adicionadas após tradução
  title?: string;
  description?: string;
  category?: string;
  keywords?: string[];
  ctaText?: string;
  features?: string[];
  application?: string;
}