'use client';

import { motion } from 'framer-motion';
import { FaRegLightbulb, FaRegBuilding, FaGavel, FaCheckCircle } from 'react-icons/fa';
import MeetingCTA from '@/components/MeetingCTA';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Análise detalhada do seu caso em consulta confidencial e sem compromisso.',
      icon: <FaRegLightbulb className="text-[#E83241]" />,
    },
    {
      number: '02',
      title: 'Estratégia Jurídica',
      description: 'Desenvolvimento de estratégia personalizada adaptada às suas necessidades.',
      icon: <FaRegBuilding className="text-[#E83241]" />,
    },
    {
      number: '03',
      title: 'Execução Profissional',
      description: 'Implementação rigorosa com transparência e comunicação contínua.',
      icon: <FaGavel className="text-[#E83241]" />,
    },
    {
      number: '04',
      title: 'Resultado Garantido',
      description: 'Conclusão eficaz com foco em soluções concretas e proteção dos seus direitos.',
      icon: <FaCheckCircle className="text-[#E83241]" />,
    },
  ];

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Fundo com gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0">
        {/* Elementos abstratos animados */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#E83241]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#E83241]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          {/* Badge com branding consistente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#E83241]/10 backdrop-blur-sm border border-[#E83241]/20 rounded-full px-5 py-2.5 mb-6"
          >
            <span className="text-[#E83241] text-sm font-bold">PROCESSO DE TRABALHO</span>
          </motion.div>
          
          {/* Título com branding consistente */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            <span className="block">Como</span>
            <span className="block text-[#E83241]">Trabalhamos</span>
          </h2>
          
          {/* Subtítulo com branding consistente */}
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Metodologia clara, transparente e focada em resultados
          </p>
        </motion.div>

        {/* Etapas do processo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#E83241]/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {/* Número da etapa - Com melhor espaçamento em mobile */}
              <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#E83241] text-white font-bold text-sm lg:-top-5 lg:-left-5 lg:w-12 lg:h-12">
                {step.number}
              </div>

              {/* Conteúdo da etapa */}
              <div className="space-y-4 pt-8 lg:pt-6">
                <div className="text-[#E83241] text-3xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#E83241] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Linha de conexão (oculta em mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-[#E83241]"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Meeting CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
         
        </motion.div>
      </div>
    </section>
  );
}