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
  title: string;
  description: string;
  category: ServiceCategory;
  keywords: string[];
  icon: IconType | string;
  ctaText: string;
  features: string[]; // Resumo das áreas principais da categoria
  application: string; // Aplicação geral do serviço
  createdAt: Date;
}