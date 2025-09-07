'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronRight, Calendar, Eye } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useServices } from '@/hooks/useServices';
import { ServiceType } from '@/types/Service';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [, setIsHovered] = useState(false);
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8,
        scale: 1.01,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Card com glassmorphism premium */}
      <div className="relative bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full overflow-hidden shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#E83241]/5 transition-all duration-300">
        {/* Efeito de hover sutil com borda vermelha premium */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl border border-[#E83241]/10 group-hover:border-[#E83241]/20 transition-colors duration-300" />
          <div className="absolute inset-[1px] rounded-2xl border border-[#E83241]/5 group-hover:border-[#E83241]/10 transition-colors duration-300" />
        </div>
        
        {/* Noise Texture sutil */}
        <div 
          className="absolute inset-0 opacity-5 rounded-2xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div className="p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm border border-white/10 group-hover:border-[#E83241]/10 transition-colors duration-300">
              <Icon className="w-8 h-8 text-[#E83241]" />
            </div>
          </div>
          
          {/* Title - totalmente visível */}
          <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#E83241] transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-white/60 leading-relaxed mb-5 flex-grow group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
            {service.description}
          </p>
          
          {/* Features - mostrando 3 features */}
          <div className="space-y-2">
            {service.features?.slice(0, 3).map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 + i * 0.1 + 0.3 }}
                className="flex items-center gap-2"
              >
                <div className="w-1 h-1 bg-[#E83241] rounded-full" />
                <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300 line-clamp-1">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Linha de destaque sutil no rodapé */}
        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#E83241]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const t = useTranslations('ServicesSection');
  const { services } = useServices();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-black to-black text-white py-24 overflow-hidden">
      {/* Background premium sutil em preto */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 to-black" />
        {/* Grid Pattern sutil */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 20px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Linha decorativa sutil */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-[#E83241]/50 via-[#E83241]/30 to-[#E83241]/50 mx-auto mb-6"
          />
          
          {/* Título em PT de Portugal */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              {t('areasOfPractice')}
            </span>
            <span className="block text-[#E83241]">
              {t('practice')}
            </span>
          </h2>
          
          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </motion.div>
        
        {/* Services Grid - mostrando apenas os primeiros 6 serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        {/* Buttons Section - COM LINKS CORRETOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
        >
          {/* Botão Agendar Reunião - External Link */}
          <motion.a
            href="https://calendly.com/nadinezeverino"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(232, 50, 65, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#E83241] to-[#B83232] text-white font-bold rounded-xl overflow-hidden shadow-xl flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{t('scheduleMeeting')}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4" />
            </motion.div>
          </motion.a>
          
          {/* Botão Ver todos os serviços - Internal Link */}
          <Link href="/pratice-areas">
            <motion.button
              whileHover={{ 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "#E83241",
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:border-[#E83241]/30 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Eye className="w-5 h-5" />
              <span>{t('allServices')}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E83241]/10 to-transparent" />
    </section>
  );
}