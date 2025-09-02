'use client';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaRegBuilding, FaGavel, FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';

export default function WhyChooseUs() {
  const values = [
    {
      title: 'Transparência Total',
      description: 'Comunicação 100% transparente sobre o seu caso jurídico. Será sempre informado sobre o estado do processo e os próximos passos, sem burocracias ou linguagem jurídica desnecessária.',
      icon: <FaRegLightbulb className="text-[#E83241] text-4xl" />,
      highlight: 'Sem surpresas',
      metric: '98% satisfação'
    },
    {
      title: 'Estratégia Personalizada',
      description: 'Cada cliente recebe uma estratégia jurídica desenvolvida especificamente para a sua situação. Analisamos cuidadosamente cada caso para criar soluções eficazes e adequadas às suas necessidades.',
      icon: <FaRegBuilding className="text-[#E83241] text-4xl" />,
      highlight: 'Soluções específicas',
      metric: '10+ anos de experiência'
    },
    {
      title: 'Resultados Comprovados',
      description: 'O nosso foco está em obter resultados concretos e duradouros para os nossos clientes. Trabalhamos não apenas para processos, mas para soluções reais que melhorem a sua situação jurídica.',
      icon: <FaGavel className="text-[#E83241] text-4xl" />,
      highlight: 'Impacto real',
      metric: '100+ casos resolvidos'
    },
    {
      title: 'Excelência Reconhecida',
      description: 'Mais de uma década de experiência na resolução dos casos mais complexos do direito português. A nossa reputação foi construída através de resultados consistentes e conduta ética irrepreensível.',
      icon: <FaCheckCircle className="text-[#E83241] text-4xl" />,
      highlight: 'Tradição em resultados',
      metric: 'Escritório certificado'
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E83241]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
         {/* Header Section - Título e subtítulo centralizados */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center gap-2 bg-[#E83241]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 mx-auto"
            >
              <FaStar className="text-[#E83241] text-sm" />
              <span className="text-[#E83241] font-semibold text-sm uppercase tracking-wider">
                
                POR que nos escolher
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight text-center">
              <span className="text-[#E83241]">Vantagens</span> que nos<br />Distinguem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-center">
              <span className="font-bold text-[#E83241]">100+ casos resolvidos</span> com <span className="font-bold">98% de satisfação</span>
            </p>
          </div>
          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line - Responsiva */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E83241] to-transparent hidden md:block"></div>
            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#E83241] to-transparent md:hidden"></div>
            {/* Animated flowing dots - Desktop */}
            <motion.div 
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-10 w-2 h-2 bg-[#E83241] rounded-full opacity-60 hidden md:block z-40"
            />
            <motion.div 
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-10 w-2 h-2 bg-[#E83241] rounded-full opacity-60 hidden md:block z-40"
            />
            {/* Mobile flowing dots */}
            <motion.div 
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-8 transform -translate-x-1/2 top-10 w-2 h-2 bg-[#E83241] rounded-full opacity-60 md:hidden z-40"
            />
            <motion.div 
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute left-8 transform -translate-x-1/2 bottom-10 w-2 h-2 bg-[#E83241] rounded-full opacity-60 md:hidden z-40"
            />
            {/* Timeline Items */}
            <div className="space-y-16">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 
                      ? 'md:flex-row-reverse' 
                      : 'md:flex-row'
                  } flex-row`}
                >
                  {/* Timeline Node - Desktop */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 z-30 hidden md:block"
                  >
                    <div className="relative w-full h-full">
                      {/* Outer ring with glow */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-[#E83241]/30"
                      />
                      {/* Inner core */}
                      <div className="absolute inset-2 rounded-full bg-[#E83241] shadow-lg shadow-[#E83241]/30">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          className="absolute inset-0 rounded-full bg-[#E83241]/20"
                        />
                      </div>
                      {/* Pulse effect */}
                      <motion.div 
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index }}
                        className="absolute inset-0 rounded-full bg-[#E83241]/20"
                      />
                    </div>
                  </motion.div>
                  {/* Timeline Node - Mobile */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="absolute left-8 transform -translate-x-1/2 w-8 h-8 z-30 md:hidden"
                  >
                    <div className="relative w-full h-full">
                      {/* Outer ring with glow */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-[#E83241]/30"
                      />
                      {/* Inner core */}
                      <div className="absolute inset-2 rounded-full bg-[#E83241] shadow-lg shadow-[#E83241]/30">
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                          className="absolute inset-0 rounded-full bg-[#E83241]/20"
                        />
                      </div>
                      {/* Pulse effect */}
                      <motion.div 
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index }}
                        className="absolute inset-0 rounded-full bg-[#E83241]/20"
                      />
                    </div>
                  </motion.div>
                  {/* Content Card */}
                  <div className={`w-full max-w-2xl z-50 ${
                    index % 2 === 0 
                      ? 'md:mr-8 md:ml-0' 
                      : 'md:ml-8 md:mr-0'
                  } ml-16 md:ml-8`}>
                    <motion.div 
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: index % 2 === 0 ? 2 : -2,
                        boxShadow: "0 25px 50px rgba(232, 50, 65, 0.15)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="group relative bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                      {/* Card Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-slate-50/90 rounded-2xl"></div>
                      {/* Hover Effect Overlay */}
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="absolute top-4 right-4 w-12 h-12 bg-[#E83241]/10 rounded-full flex items-center justify-center"
                      >
                        <FaArrowRight className="text-[#E83241] text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start gap-4 md:gap-6 mb-6">
                          <div className="p-3 bg-gradient-to-br from-[#E83241]/10 to-[#E83241]/20 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {value.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                              <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-[#E83241] transition-colors duration-300">
                                {value.title}
                              </h3>
                              <span className="hidden lg:block bg-[#E83241]/10 text-[#E83241] text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                                {value.highlight}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="w-12 h-0.5 bg-gradient-to-r from-[#E83241] to-transparent"></div>
                              <span className="text-[#E83241] font-bold text-sm">{value.metric}</span>
                            </div>
                          </div>
                        </div>
                        {/* Description */}
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 text-justify">
                          {value.description}
                        </p>
                        {/* Bottom Action */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <motion.div 
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-[#E83241] font-semibold cursor-pointer group-hover:gap-3 transition-all duration-300"
                          >
                          </motion.div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + i * 0.1 }}
                              >
                                <FaStar className="text-[#E83241] text-sm" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#E83241]/5 to-transparent rounded-full blur-xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-black/5 to-transparent rounded-full blur-xl"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
           
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}