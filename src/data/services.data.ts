import { ServiceType } from '@/types/Service';
import { 
  FaRegBuilding, 
  FaShieldAlt, 
  FaHome,
  FaGlobe,
  FaHandshake,
  FaFileSignature,
  FaChild
} from 'react-icons/fa';

export const SERVICES: ServiceType[] = [

    // Direito de Família e Sucessões
  {
    id: 'FAMILY_LAW',
    titleKey: 'services.familyLaw.title',
    descriptionKey: 'services.familyLaw.description',
    categoryKey: 'services.familyLaw.category',
    keywordsKey: 'services.familyLaw.keywords',
    icon: FaChild,
    ctaTextKey: 'services.familyLaw.ctaText',
    featuresKey: 'services.familyLaw.features',
    applicationKey: 'services.familyLaw.application',
    createdAt: new Date('2025-06-28')
  },

  // Direito Imobiliário e Construção
  {
    id: 'REAL_ESTATE',
    titleKey: 'services.realEstate.title',
    descriptionKey: 'services.realEstate.description',
    categoryKey: 'services.realEstate.category',
    keywordsKey: 'services.realEstate.keywords',
    icon: FaHome,
    ctaTextKey: 'services.realEstate.ctaText',
    featuresKey: 'services.realEstate.features',
    applicationKey: 'services.realEstate.application',
    createdAt: new Date('2025-06-28')
  },

  // Legalização de Estrangeiros
  {
    id: 'FOREIGN_LEGALIZATION',
    titleKey: 'services.foreignLegalization.title',
    descriptionKey: 'services.foreignLegalization.description',
    categoryKey: 'services.foreignLegalization.category',
    keywordsKey: 'services.foreignLegalization.keywords',
    icon: FaGlobe,
    ctaTextKey: 'services.foreignLegalization.ctaText',
    featuresKey: 'services.foreignLegalization.features',
    applicationKey: 'services.foreignLegalization.application',
    createdAt: new Date('2025-06-28')
  },

  // Nacionalidade Portuguesa
  {
    id: 'PORTUGUESE_NATIONALITY',
    titleKey: 'services.portugueseNationality.title',
    descriptionKey: 'services.portugueseNationality.description',
    categoryKey: 'services.portugueseNationality.category',
    keywordsKey: 'services.portugueseNationality.keywords',
    icon: FaHandshake,
    ctaTextKey: 'services.portugueseNationality.ctaText',
    featuresKey: 'services.portugueseNationality.features',
    applicationKey: 'services.portugueseNationality.application',
    createdAt: new Date('2025-06-28')
  },

  // Direito Comercial e das Sociedades
  {
    id: 'COMMERCIAL_LAW',
    titleKey: 'services.commercialLaw.title',
    descriptionKey: 'services.commercialLaw.description',
    categoryKey: 'services.commercialLaw.category',
    keywordsKey: 'services.commercialLaw.keywords',
    icon: FaRegBuilding,
    ctaTextKey: 'services.commercialLaw.ctaText',
    featuresKey: 'services.commercialLaw.features',
    applicationKey: 'services.commercialLaw.application',
    createdAt: new Date('2025-06-28')
  },

  // Direito Penal e Contraordenacional
  {
    id: 'CRIMINAL_LAW',
    titleKey: 'services.criminalLaw.title',
    descriptionKey: 'services.criminalLaw.description',
    categoryKey: 'services.criminalLaw.category',
    keywordsKey: 'services.criminalLaw.keywords',
    icon: FaShieldAlt,
    ctaTextKey: 'services.criminalLaw.ctaText',
    featuresKey: 'services.criminalLaw.features',
    applicationKey: 'services.criminalLaw.application',
    createdAt: new Date('2025-06-28')
  },


  // Registros e Notariado
  {
    id: 'REGISTRIES_NOTARY',
    titleKey: 'services.registriesNotary.title',
    descriptionKey: 'services.registriesNotary.description',
    categoryKey: 'services.registriesNotary.category',
    keywordsKey: 'services.registriesNotary.keywords',
    icon: FaFileSignature,
    ctaTextKey: 'services.registriesNotary.ctaText',
    featuresKey: 'services.registriesNotary.features',
    applicationKey: 'services.registriesNotary.application',
    createdAt: new Date('2025-06-28')
  }
];