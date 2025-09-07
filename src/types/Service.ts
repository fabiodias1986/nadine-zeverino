// src/types/service.ts
import { IconType } from 'react-icons'; 

export type ServiceCategory = 
  | 'Direito Imobiliário'
  | 'Legalização de Estrangeiros'
  | 'Nacionalidade Portuguesa'
  | 'Direito Comercial e das Sociedades'
  | 'Direito Penal e Contraordenacional'
  | 'Direito de Família e Sucessões'
  | 'Registros e Notariado';

export interface ServiceType {
  id: string;
  titleKey: string;
  descriptionKey: string;
  categoryKey: string;
  keywordsKey: string;
  icon: any;
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