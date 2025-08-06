// src/data/services.data.ts
import { ServiceType } from '@/types/Service';
import { 
  FaRegBuilding, 
  FaUsers, 
  FaShieldAlt, 
  FaBalanceScale, 
  FaTrademark, 
  FaHome,
  FaGlobe,
  FaHandshake,
  FaFileSignature,
  FaChild
} from 'react-icons/fa';

export const SERVICES: ServiceType[] = [
  // Direito Imobiliário e Construção
  {
    id: 'REAL_ESTATE',
    title: 'Direito Imobiliário e Construção',
    description: 'Assessoria jurídica completa em transações imobiliárias, contratos de arrendamento, licenciamentos e assessoria a empresas do setor.',
    category: 'Direito Imobiliário',
    keywords: ['compra e venda', 'arrendamento', 'licenciamento', 'contratos'],
    icon: FaHome,
    ctaText: 'Agendar Consulta',
    features: [
      'Acompanhamento de compra e venda de imóveis',
      'Elaboração de contratos de arrendamento',
      'Licenciamento urbano e regularização',
      'Assessoria a empresas imobiliárias'
    ],
    application: 'Para investidores, particulares e empresas que buscam segurança jurídica em questões imobiliárias.',
    createdAt: new Date('2025-06-28')
  },

  // Legalização de Estrangeiros
  {
    id: 'FOREIGN_LEGALIZATION',
    title: 'Legalização de Estrangeiros',
    description: 'Orientação completa na obtenção de vistos, residência e benefícios fiscais para estrangeiros em Portugal.',
    category: 'Legalização de Estrangeiros',
    keywords: ['visto', 'residência', 'Golden Visa', 'RNH'],
    icon: FaGlobe,
    ctaText: 'Iniciar Processo',
    features: [
      'Obtenção de vistos de residência',
      'Autorização de Residência para Investimento (Golden Visa)',
      'Reagrupamento familiar',
      'Regime Fiscal de Residente Não Habitual (RNH)'
    ],
    application: 'Para estrangeiros que desejam regularizar sua situação em Portugal via residência, investimento ou benefícios fiscais.',
    createdAt: new Date('2025-06-28')
  },

  // Nacionalidade Portuguesa
  {
    id: 'PORTUGUESE_NATIONALITY',
    title: 'Nacionalidade Portuguesa',
    description: 'Acompanhamento completo no processo de obtenção de cidadania portuguesa e reconhecimento judicial de relações familiares.',
    category: 'Nacionalidade Portuguesa',
    keywords: ['nacionalidade', 'cidadania', 'união de facto'],
    icon: FaHandshake,
    ctaText: 'Começar Processo',
    features: [
      'Aquisição de nacionalidade por descendência ou casamento',
      'Transcrição de casamentos e nascimentos',
      'Reconhecimento judicial de união de facto'
    ],
    application: 'Para estrangeiros elegíveis à nacionalidade portuguesa ou reconhecimento legal de relações familiares.',
    createdAt: new Date('2025-06-28')
  },

  // Direito Comercial e das Sociedades
  {
    id: 'COMMERCIAL_LAW',
    title: 'Direito Comercial e das Sociedades',
    description: 'Estruturação jurídica para empresas, fusões, dissoluções e contencioso societário.',
    category: 'Direito Comercial e das Sociedades',
    keywords: ['sociedade', 'fusão', 'dissolução', 'contencioso'],
    icon: FaRegBuilding,
    ctaText: 'Criar Empresa',
    features: [
      'Constituição de sociedades',
      'Fusões, cisões e transformações',
      'Dissolução e liquidação de sociedades',
      'Contencioso societário'
    ],
    application: 'Para empreendedores e empresas que buscam estruturação jurídica ou reorganização societária.',
    createdAt: new Date('2025-06-28')
  },

  // Direito Penal e Contraordenacional
  {
    id: 'CRIMINAL_LAW',
    title: 'Direito Penal e Contraordenacional',
    description: 'Defesa criminal e impugnação de contraordenações com foco na proteção dos direitos do cliente.',
    category: 'Direito Penal e Contraordenacional',
    keywords: ['defesa criminal', 'recursos', 'multas'],
    icon: FaShieldAlt,
    ctaText: 'Consultoria Urgente',
    features: [
      'Defesa em processos penais',
      'Impugnação de contraordenações',
      'Recursos administrativos e judiciais'
    ],
    application: 'Para clientes envolvidos em investigações, processos penais ou multas administrativas.',
    createdAt: new Date('2025-06-28')
  },

  // Direito de Família e Sucessões
  {
    id: 'FAMILY_LAW',
    title: 'Direito de Família e Sucessões',
    description: 'Resolução judicial ou extrajudicial de questões familiares, sucessões e regulação parental.',
    category: 'Direito de Família e Sucessões',
    keywords: ['inventário', 'guarda', 'partilha', 'herança'],
    icon: FaChild,
    ctaText: 'Iniciar Processo',
    features: [
      'Inventário e partilha de bens',
      'Regulação de responsabilidades parentais',
      'Processos de guarda e alimentos',
      'Contencioso sucessório'
    ],
    application: 'Para famílias que buscam resolver disputas legais de heranças, divórcios ou responsabilidades parentais.',
    createdAt: new Date('2025-06-28')
  },

  // Registros e Notariado
  {
    id: 'REGISTRIES_NOTARY',
    title: 'Registros e Notariado',
    description: 'Autenticação de documentos, registos públicos e atos notariais gerais.',
    category: 'Registros e Notariado',
    keywords: ['registo', 'autenticação', 'marca', 'notariado'],
    icon: FaFileSignature,
    ctaText: 'Registrar Ativo',
    features: [
      'Autenticação de assinaturas e traduções',
      'Registos imobiliário, comercial e civil',
      'Elaboração de documentos particulares autenticados',
      'Habilitação de herdeiros'
    ],
    application: 'Para indivíduos e empresas que necessitam de validação legal de documentos ou registros públicos.',
    createdAt: new Date('2025-06-28')
  }
];