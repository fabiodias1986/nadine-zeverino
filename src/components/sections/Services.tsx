'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useServices } from '@/hooks/useServices';
import { ServiceType } from '@/types/Service';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
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
            backgroundImage: `url("image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`
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
            {service.features.slice(0, 3).map((feature, i) => (
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
  const { services } = useServices();
  const router = useRouter();
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              Especialização
            </span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#E83241] via-[#E83241]/70 to-[#E83241]">
              Jurídica
            </span>
          </h2>
          
          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Soluções jurídicas especializadas com foco em resultados excecionais e 
            <span className="text-[#E83241] font-medium"> proteção integral</span> dos seus interesses
          </motion.p>
        </motion.div>
        
        {/* Services Grid - mostrando apenas os primeiros 6 serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl rounded-2xl border border-white/10 p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">
              Precisa de Assessoria Jurídica Especializada?
            </h3>
            <p className="text-white/50 mb-6 text-sm leading-relaxed">
              Agende uma reunião personalizada e descubra como podemos proteger os seus interesses
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(232, 50, 65, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 py-3 bg-gradient-to-r from-[#E83241] to-[#B83232] text-white font-medium rounded-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Agendar Reunião
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
              
              {/* Botão para ver todos os serviços - redireciona para /servicos */}
              <motion.button
                whileHover={{ 
                  backgroundColor: "rgba(232, 50, 65, 0.05)",
                  borderColor: "#E83241"
                }}
                onClick={() => router.push('/servicos')}
                className="px-6 py-3 border border-white/15 text-white font-medium rounded-xl hover:border-[#E83241]/30 transition-all duration-200 backdrop-blur-sm"
              >
                Ver todos os serviços
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Linha decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E83241]/10 to-transparent" />
    </section>
  );
}