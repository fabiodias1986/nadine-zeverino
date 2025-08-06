'use client';

import { motion } from 'framer-motion';
import { FaRegLightbulb, FaRegBuilding, FaGavel, FaCheckCircle } from 'react-icons/fa';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consulta Inicial',
      description: 'Entendemos seu caso, objetivos e desafios em uma consulta gratuita e confidencial.',
      icon: <FaRegLightbulb className="text-[#E83241]" />,
    },
    {
      number: '02',
      title: 'Estratégia Personalizada',
      description: 'Elaboramos uma estratégia jurídica adaptada às suas necessidades e ao seu perfil.',
      icon: <FaRegBuilding className="text-[#E83241]" />,
    },
    {
      number: '03',
      title: 'Execução Eficiente',
      description: 'Implementamos ações concretas com transparência e comunicação constante.',
      icon: <FaGavel className="text-[#E83241]" />,
    },
    {
      number: '04',
      title: 'Resolução e Resultado',
      description: 'Concluímos o processo com foco em resultados tangíveis e sua tranquilidade.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como Trabalhamos
          </h2>
          <p className="text-white/70 text-lg">
            Processo claro, transparente e focado em resultados para sua tranquilidade.
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
              className="group relative bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-[#E83241]/30 transition-all duration-300"
            >
              {/* Número da etapa */}
              <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#E83241] text-white font-bold text-sm">
                {step.number}
              </div>

              {/* Conteúdo da etapa */}
              <div className="space-y-4 pt-6">
                <div className="text-[#E83241] text-3xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
              </div>

              {/* Linha de conexão (oculta em mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-[#E83241]"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}