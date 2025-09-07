'use client';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaShieldVirus, FaAward, FaCalendarAlt, FaGavel, FaArrowRight, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  const specialties = [
    { icon: <FaHome />, title: t('specialties.realEstate'), key: 'realEstate' },
    { icon: <FaBalanceScale />, title: t('specialties.commercial'), key: 'commercial' },
    { icon: <FaShieldVirus />, title: t('specialties.criminal'), key: 'criminal' },
    { icon: <FaAward />, title: t('specialties.labor'), key: 'labor' }
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
              <span className="text-white/90 font-medium text-sm">{t('certifiedLawyer')}</span>
            </motion.div>

            {/* Main Title - Nadine Isabel on same line */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-tight">
                <motion.span 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-[#E83241] via-red-500 to-[#E83241]"
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
                animate={{ width: "80px" }}
                transition={{ duration: 1, delay: 0.9 }}
                className="h-1 bg-gradient-to-r from-[#E83241] via-red-500 to-transparent mt-4 shadow-lg shadow-[#E83241]/30"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="hidden md:block text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
                {t('description')}
              </p>
            </motion.div>

            {/* MOBILE: Image and Stats Section - Between text and cards */}
            <div className="lg:hidden mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto"
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full relative overflow-hidden z-30">
                  <Image
                    src="/media/profile.jpg"
                    alt="Dra. Nadine Isabel Zeverino"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Professional Badge Overlay - With Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 z-30 p-4"
                >
                  <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-white font-bold text-lg">{t('fullName')}</h3>
                        <p className="text-white/70 text-sm mt-1">{t('lawyerTitle')}</p>
                      </div>
                      <div className="bg-[#E83241] p-2 rounded-lg">
                        <FaAward className="text-white text-lg" />
                      </div>
                    </div>
                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-[#E83241] font-bold text-base">10+</div>
                        <div className="text-white/60 text-xs">{t('stats.years')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#E83241] font-bold text-base">100+</div>
                        <div className="text-white/60 text-xs">{t('stats.cases')}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#E83241] font-bold text-base">98%</div>
                        <div className="text-white/60 text-xs">{t('stats.success')}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Interactive Specialties - Centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 5px 15px rgba(232, 50, 65, 0.25)"
                  }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 cursor-pointer group hover:border-[#E83241]/50 transition-all duration-300 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-[#E83241] text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <h3 className="text-white font-medium text-sm">{specialty.title}</h3>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - IGUAL AOS DA SEÇÃO SERVICES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Botão Agendar Reunião - External Link */}
              <motion.a
                href="https://calendly.com/nadinezeverino"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(232, 50, 65, 0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#E83241] to-[#B83232] text-white font-bold rounded-xl overflow-hidden shadow-xl border border-[#E83241] flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <FaCalendarAlt className="group-hover:scale-110 transition-transform" />
                <span>{t('bookMeeting')}</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.div>
                
                {/* Efeito de brilho */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                />
              </motion.a>

              {/* Botão Ver Serviços - Internal Link */}
              <Link href="/pratice-areas">
                <motion.button
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "#E83241",
                    color: "#E83241"
                  }}
                  className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl hover:border-[#E83241]/30 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <FaGavel />
                  <span>{t('viewServices')}</span>
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
                  alt="Dra. Nadine Isabel Zeverino"
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

              {/* Professional Badge Overlay - With Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 z-30 p-4"
              >
                <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold text-lg">{t('fullName')}</h3>
                      <p className="text-white/70 text-sm mt-1">{t('lawyerTitle')}</p>
                    </div>
                    <div className="bg-[#E83241] p-2 rounded-lg">
                      <FaAward className="text-white text-lg" />
                    </div>
                  </div>
                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-[#E83241] font-bold text-base">10+</div>
                      <div className="text-white/60 text-xs">{t('stats.years')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#E83241] font-bold text-base">100+</div>
                      <div className="text-white/60 text-xs">{t('stats.cases')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#E83241] font-bold text-base">98%</div>
                      <div className="text-white/60 text-xs">{t('stats.success')}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="hidden md:block">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#E83241]/90 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-[#E83241] shadow-lg shadow-[#E83241]/30 z-40"
              >
                <FaBalanceScale className="text-white text-base" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.4, 0.7]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-white/5 rounded-full flex items-center justify-center backdrop-blur border border-white/10 z-40"
              >
                <FaShieldVirus className="text-[#E83241] text-sm" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}