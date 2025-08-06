'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBalanceScale, FaShieldVirus, FaAward, FaCalendarAlt, FaGavel, FaArrowRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const [activeCard, setActiveCard] = useState(0);

  const specialties = [
    { icon: <FaGavel />, title: "Direito Civil" },
    { icon: <FaBalanceScale />, title: "Direito Comercial" },
    { icon: <FaShieldVirus />, title: "Direito Penal" },
    { icon: <FaAward />, title: "Direito Laboral" }
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-16  lg:pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-32 left-10 w-32 h-32 border border-[#E83241]/20 rounded-full"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -30, 0]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/3 right-20 w-24 h-24 bg-[#E83241]/10 rounded-lg rotate-45"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#E83241]/5 rounded-full blur-xl"
        />
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-8 relative z-10 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center w-full">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6 xl:space-y-8">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 lg:px-6 lg:py-3 shadow-2xl"
            >
              <FaAward className="text-[#E83241] text-base lg:text-lg" />
              <span className="text-white/90 font-medium text-sm lg:text-base">Advogada Certificada | Portugal</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-[#E83241] via-red-400 to-[#E83241] drop-shadow-2xl"
                >
                  Nadine
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_100%] drop-shadow-2xl"
                >
                  Zeverino
                </motion.span>
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1.5, delay: 1.2 }}
                className="h-1 lg:h-1.5 bg-gradient-to-r from-[#E83241] via-red-500 to-transparent mt-4 lg:mt-6 shadow-lg shadow-[#E83241]/30"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-2xl leading-relaxed">
                Representação jurídica de excelência com mais de 10 anos de experiência. 
                Soluções personalizadas para proteger seus direitos e interesses com compromisso e profissionalismo.
              </p>
            </motion.div>

            {/* Interactive Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4"
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(232, 50, 65, 0.25)"
                  }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-3 lg:p-4 cursor-pointer group hover:border-[#E83241]/50 transition-all duration-300"
                >
                  <div className="text-[#E83241] text-xl lg:text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <h3 className="text-white font-medium text-xs lg:text-sm">{specialty.title}</h3>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="flex flex-wrap gap-3 lg:gap-4 pt-2 lg:pt-4"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 35px rgba(232, 50, 65, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 py-3 lg:px-8 lg:py-4 bg-[#E83241] text-white rounded-lg font-bold text-sm lg:text-lg overflow-hidden shadow-xl border border-[#E83241] flex items-center gap-2 lg:gap-3"
              >
                <FaCalendarAlt className="text-sm lg:text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>Agendar Reunião</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-xs lg:text-sm" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#E83241] to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
              <motion.button
                whileHover={{ 
                  backgroundColor: "rgba(232, 50, 65, 0.1)",
                  borderColor: "#E83241",
                  color: "#E83241"
                }}
                className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-white/20 text-white rounded-lg font-bold text-sm lg:text-lg hover:border-[#E83241] transition-all duration-300 backdrop-blur-sm flex items-center gap-2 lg:gap-3"
              >
                <FaGavel className="text-sm lg:text-lg" />
                <span>Ver Serviços</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - 5 columns (Image with Frame) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md lg:max-w-lg xl:max-w-xl mx-auto"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] w-full relative overflow-hidden z-30">
                <Image
                  src="/media/profile.jpg"
                  alt="Dra. Nadine Zeverino"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Animated Border Frame */}
              <motion.div
                animate={{ 
                  background: [
                    'linear-gradient(0deg, #E83241, transparent, transparent, #E83241)',
                    'linear-gradient(90deg, #E83241, transparent, transparent, #E83241)',
                    'linear-gradient(180deg, #E83241, transparent, transparent, #E83241)',
                    'linear-gradient(270deg, #E83241, transparent, transparent, #E83241)',
                    'linear-gradient(360deg, #E83241, transparent, transparent, #E83241)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 p-1 rounded-3xl z-20 pointer-events-none"
              >
                <div className="w-full h-full bg-black rounded-3xl"></div>
              </motion.div>

              {/* Professional Badge Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute bottom-0 left-0 right-0 z-30 p-4 lg:p-6"
              >
                <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4 lg:p-6">
                  <div className="flex items-center justify-between mb-3 lg:mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg lg:text-xl">Nadine Zeverino</h3>
                      <p className="text-white/70 text-sm lg:text-base">Advogada</p>
                    </div>
                    <div className="bg-[#E83241] p-2 lg:p-3 rounded-lg">
                      <FaAward className="text-white text-lg lg:text-xl" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 lg:gap-4 pt-3 lg:pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-[#E83241] font-bold text-base lg:text-lg">10+</div>
                      <div className="text-white/60 text-xs">Anos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#E83241] font-bold text-base lg:text-lg">100+</div>
                      <div className="text-white/60 text-xs">Casos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#E83241] font-bold text-base lg:text-lg">98%</div>
                      <div className="text-white/60 text-xs">Sucesso</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-12 h-12 lg:w-16 lg:h-16 bg-[#E83241]/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-[#E83241] shadow-lg shadow-[#E83241]/30 z-40"
            >
              <FaBalanceScale className="text-white text-base lg:text-xl" />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.4, 0.7]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-10 h-10 lg:w-14 lg:h-14 bg-white/5 rounded-full flex items-center justify-center backdrop-blur border border-white/10 z-40"
            >
              <FaShieldVirus className="text-[#E83241] text-sm lg:text-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}