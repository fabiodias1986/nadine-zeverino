'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, ChevronDown } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { ServiceType } from '@/types/Service';
import MeetingCTA from '@/components/MeetingCTA';
import PageHeader from '@/components/layout/PageHeader';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
  viewMode: 'grid' | 'list';
}

const ServiceCard = ({ service, index, viewMode }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className={`${viewMode === 'list' ? 'flex items-start gap-8 p-8' : 'p-8'} 
        bg-white rounded-2xl border-2 border-gray-300 hover:border-[#E83241] 
        transition-all duration-300 shadow-md hover:shadow-xl flex flex-col h-full`}
    >
      {/* Icon */}
      <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mx-auto mb-6'} 
        p-4 rounded-xl bg-[#E83241] border-2 border-[#E83241] 
        w-20 h-20 flex items-center justify-center`}>
        <Icon className="w-10 h-10 text-white" />
      </div>
      
      <div className={`${viewMode === 'list' ? 'flex-grow' : 'flex-grow'}`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E83241] transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-700 mb-6 text-base leading-relaxed">
          {service.description}
        </p>
        
        {/* Features */}
        <div className={`${viewMode === 'list' ? 'grid grid-cols-2 gap-3' : 'space-y-3'} mb-6 flex-grow`}>
          {service.features.slice(0, viewMode === 'list' ? 4 : 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#E83241] rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-gray-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Fixed "Saber mais" button at the bottom */}
      <div className="hidden mt-auto pt-4">
        <button className="text-[#E83241] text-base font-bold flex items-center gap-2 group">
          Saber mais
          <ChevronDown className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const { services } = useServices();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Get unique categories
  const categories = useMemo(() => {
    const cats = services.map(service => service.category);
    return ['all', ...Array.from(new Set(cats))];
  }, [services]);
  
  // Filter services
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.features.some(feature => 
                             feature.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [services, searchTerm, selectedCategory]);
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Page Header - Reusable Component */}
      <PageHeader 
        title="ÁREAS DE ATUAÇÃO"
        subtitle="Soluções jurídicas especializadas com foco em resultados e proteção integral dos seus interesses"
      />
      
      {/* Search and Filters Section - Light Background */}
      <div className="container mx-auto px-6 max-w-7xl -mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500" />
              <input
                type="text"
                placeholder="Pesquisar áreas de atuação..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-gray-50 border-2 border-gray-300 
                          rounded-xl text-gray-900 placeholder-gray-500 text-lg font-medium
                          focus:outline-none focus:border-[#E83241] focus:ring-2 focus:ring-[#E83241]/20 
                          transition-all shadow-sm"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full lg:w-56 pl-5 pr-12 py-5 bg-gray-50 border-2 border-gray-300 
                          rounded-xl text-gray-900 text-lg font-bold focus:outline-none focus:border-[#E83241] 
                          focus:ring-2 focus:ring-[#E83241]/20 transition-all cursor-pointer shadow-sm"
              >
                <option value="all">TODAS AS CATEGORIAS</option>
                {categories.filter(cat => cat !== 'all').map(category => (
                  <option key={category} value={category} className="font-bold">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none" />
            </div>
            
            {/* View Toggle */}
            <div className="flex border-2 border-gray-300 rounded-xl bg-gray-50 p-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-4 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-[#E83241] text-white border-2 border-[#E83241]' : 'text-gray-700 hover:text-gray-900 border-2 border-transparent'}`}
              >
                <Grid className="w-6 h-6" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-4 rounded-lg transition-all ${viewMode === 'list' ? 'bg-[#E83241] text-white border-2 border-[#E83241]' : 'text-gray-700 hover:text-gray-900 border-2 border-transparent'}`}
              >
                <List className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Results Info */}
          <div className="mt-6 text-lg text-gray-700 font-bold">
            Mostrando <span className="text-[#E83241]">{filteredServices.length}</span> de <span className="text-[#E83241]">{services.length}</span> áreas de atuação
          </div>
        </motion.div>
      </div>
      
      {/* Services Grid/List */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        {filteredServices.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">NENHUMA ÁREA DE ATUAÇÃO ENCONTRADA</h3>
            <p className="text-xl text-gray-600">Tente ajustar os filtros ou termos de pesquisa</p>
          </motion.div>
        ) : (
          <motion.div
            layout
            className={`${viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-8'}`}
          >
            {filteredServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
                viewMode={viewMode} 
              />
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Meeting CTA Section */}
      <div className="py-20">
        <div className="px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MeetingCTA 
              title="Pronto para Proteger os Seus Direitos?"
              subtitle="Agende uma reunião inicial e descubra como podemos ajudar a resolver o seu caso."
              buttonText="Agendar Reunião"
              showPhoneOption={true}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}