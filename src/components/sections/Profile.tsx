'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileSection() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem da Advogada */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gray-100">
                <div className="aspect-[3/4]">
                  <Image 
                    src="/media/profile.jpg"
                    alt="Nadine Everino - Advogada em Portimão"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Overlay discreto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Informação profissional */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-1">Nadine Everino</h3>
                  <p className="text-gray-200 text-sm">Advogada em Portimão | Inscrita na Ordem dos Advogados</p>
                </div>
                
                {/* Elemento decorativo */}
                <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#E83241]/10 rounded-xl transform rotate-6"></div>
              </div>
            </motion.div>

            {/* Conteúdo textual */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1.5 bg-[#E83241]/5 text-[#E83241] text-sm font-medium rounded-full">
                Sobre Mim
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Advogada especializada em <span className="text-[#E83241]">Portimão</span>
              </h2>
              
              <div className="h-1 w-12 bg-[#E83241] mt-3 mb-6"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Profissional com mais de 10 anos de experiência no direito português, dedicada a oferecer soluções jurídicas personalizadas e resultados excepcionais para clientes em Portimão e região algarvia.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Minha abordagem combina rigor jurídico com empatia, garantindo que cada cliente receba não apenas representação legal, mas também orientação clara e transparente em cada etapa do processo.
              </p>
              
              {/* Áreas de especialização */}
              <div className="space-y-3 mt-6">
                <h3 className="text-lg font-semibold text-black">Áreas de especialização</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Direito Civil",
                    "Direito Comercial",
                    "Direito Imobiliário",
                    "Contratos e Negócios"
                  ].map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-center gap-2.5 py-2.5 px-3 bg-gray-50 rounded-xl"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E83241]"></span>
                      <span className="text-gray-700">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
}