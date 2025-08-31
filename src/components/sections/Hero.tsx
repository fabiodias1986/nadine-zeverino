'use client';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaShieldVirus, FaAward, FaCalendarAlt, FaGavel, FaArrowRight, FaHome, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { Link } from '@/i18n/navigation'

export default function Hero() {

  const specialties = [
    { icon: <FaHome />, title: "Direito Imobiliário" },
    { icon: <FaBalanceScale />, title: "Direito Comercial" },
    { icon: <FaShieldVirus />, title: "Direito Penal" },
    { icon: <FaAward />, title: "Direito Laboral" }
  ];

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-16 lg:pt-16">
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
          className="absolute top-32 left-10 w-32 h-32 border border-[#E83241]/20 rounded-full hidden md:block"
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
          className="absolute top-1/3 right-20 w-24 h-24 bg-[#E83241]/10 rounded-lg rotate-45 hidden md:block"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#E83241]/5 rounded-full blur-xl hidden md:block"
        />
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 py-8 relative z-10 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center w-full">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Professional Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-lg"
            >
              <FaAward className="text-[#E83241] text-base" />
              <span className="text-white/90 font-medium text-sm">Advogada Certificada | Portugal</span>
            </motion.div>

            {/* Main Title - Nadine Isabel on same line */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-[#E83241] via-red-400 to-[#E83241]"
                >
                  Nadine Isabel
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white"
                >
                  Zeverino
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1, delay: 1.0 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#E83241] via-red-500 to-transparent mt-4 mb-6 shadow-lg shadow-[#E83241]/30"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-4"
            >
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Representação jurídica de excelência com mais de 10 anos de experiência. 
                Soluções personalizadas para proteger os seus direitos e interesses.
              </p>
            </motion.div>

            {/* MOBILE: Image and Stats Section - Between text and cards */}
            <div className="lg:hidden mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full relative overflow-hidden z-30">
                  <Image
                    src="/media/profile.jpg"
                    alt="Dra. Nadine Isabel Zeverino - Advogada em Portimão"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Professional Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 z-30 p-4"
                >
                  <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#E83241] rounded-lg flex items-center justify-center">
                        <FaBalanceScale className="text-white text-sm" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm">Nadine Isabel Zeverino</h3>
                        <p className="text-white/70 text-xs">Advogada em Portimão</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#E83241] text-xs" />
                        ))}
                      </div>
                      <span className="text-white/80 text-xs">Excelência Reconhecida</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Interactive Specialties - Centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 10px 25px rgba(232, 50, 65, 0.25)"
                  }}
                  className="flex items-center gap-2.5 py-2.5 px-3 bg-gray-50/5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E83241]"></span>
                  <span className="text-gray-200 text-sm">{specialty.title}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Stacked on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              {/* Agendar Reunião - External Link */}
              <motion.a
                href="https://calendly.com/nadinezeverino" // Substitua pela sua URL real
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(232, 50, 65, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 py-4 bg-[#E83241] text-white rounded-lg font-bold text-base overflow-hidden shadow-xl border border-[#E83241] flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
                <span>Agendar Reunião</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.div>
                
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                />
                
              </motion.a>

              {/* Ver Serviços - Internal Link */}
              <Link href="/services">
                <motion.button
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#E83241",
                    color: "#E83241"
                  }}
                  className="px-6 py-4 border-2 border-white/20 text-white rounded-lg font-bold text-base hover:border-[#E83241]/30 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FaGavel />
                  <span>Ver Serviços</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Content - 5 columns (Desktop Only) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto"
            >
              {/* Image Container */}
              <div className="aspect-[4/5] w-full relative overflow-hidden z-30">
                <Image
                  src="/media/profile.jpg"
                  alt="Dra. Nadine Isabel Zeverino - Advogada em Portimão"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Professional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 z-30 p-6"
              >
                <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#E83241] rounded-lg flex items-center justify-center">
                      <FaBalanceScale className="text-white text-sm" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Nadine Isabel Zeverino</h3>
                      <p className="text-white/70 text-xs">Advogada em Portimão</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-[#E83241] text-xs" />
                      ))}
                    </div>
                    <span className="text-white/80 text-xs">Excelência Reconhecida</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-[#E83241]/10 rounded-xl transform rotate-6"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}