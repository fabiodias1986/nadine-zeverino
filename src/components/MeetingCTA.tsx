'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight, FaPhone, FaStar, FaShieldAlt } from 'react-icons/fa';

interface MeetingCTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  phoneLink?: string;
  showPhoneOption?: boolean;
  className?: string;
}

export default function MeetingCTA({
  title = "Pronto para Proteger os Seus Direitos?",
  subtitle = "Agende uma reunião inicial e descubra como podemos ajudar a resolver o seu caso.",
  buttonText = "Agendar Reunião",
  buttonLink = "/contact",
  phoneLink = "tel:+351964022222",
  showPhoneOption = true,
  className = ""
}: MeetingCTAProps) {
  return (
    <div className={`w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900 via-black to-gray-900 shadow-xl"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E83241]/10 via-transparent to-transparent"></div>
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            animate={{
              background: [
                'radial-gradient(400px circle at 30% 40%, rgba(232, 50, 65, 0.1), transparent 70%)',
                'radial-gradient(400px circle at 70% 60%, rgba(232, 50, 65, 0.1), transparent 70%)',
              ]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-6 right-6 text-[#E83241]/5 text-4xl">
          <FaStar />
        </div>

        <div className="relative z-10 p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-8"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: 0.3 
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E83241]/20 to-[#B83232]/20 rounded-full border border-[#E83241]/30 mb-4"
              >
                <div className="w-1.5 h-1.5 bg-[#E83241] rounded-full animate-pulse"></div>
                <span className="text-[#E83241] font-bold text-xs uppercase tracking-wider">+100 CASOS RESOLVIDOS</span>
                <div className="w-1.5 h-1.5 bg-[#E83241] rounded-full animate-pulse"></div>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            </motion.div>

            {/* CTA Buttons - Aligned with Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            >
              {/* Primary CTA - Fonte Maior */}
              <motion.button
                onClick={() => window.location.href = buttonLink}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px -10px rgba(232, 50, 65, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full px-6 py-5 bg-gradient-to-r from-[#E83241] via-red-600 to-[#B83232] text-white font-bold rounded-xl text-lg md:text-xl overflow-hidden shadow-lg border border-[#E83241]"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaCalendarAlt className="text-xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-normal text-white/80">Toque para</div>
                    <div className="text-lg md:text-xl font-bold">{buttonText}</div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight className="text-lg" />
                  </motion.div>
                </span>
              </motion.button>

              {/* Secondary CTA - Fonte Maior */}
              {showPhoneOption && (
                <motion.button
                  onClick={() => window.location.href = phoneLink}
                  whileHover={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#E83241",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg md:text-xl flex items-center gap-3 hover:border-[#E83241] transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#E83241]/10 rounded-lg flex items-center justify-center border border-[#E83241]/20">
                    <FaPhone className="text-xl text-[#E83241]" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-normal text-white/70">Ligue agora</div>
                    <div className="text-lg md:text-xl font-bold">Contacto Direto</div>
                  </div>
                </motion.button>
              )}
            </motion.div>

            {/* Features Cards - Ícones Maiores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-3"
            >
              {[
                { icon: <FaStar />, title: "+100", desc: "Casos Resolvidos" },
                { icon: <FaShieldAlt />, title: "98%", desc: "Sucesso" },
                { icon: <FaCalendarAlt />, title: "24h", desc: "Resposta" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-[#E83241]/30 transition-all duration-300"
                >
                  {/* Ícone Maior com Destaque */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E83241] to-[#B83232] rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg border border-[#E83241]/30">
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#E83241] via-red-500 to-[#E83241]"
        />
      </motion.div>
    </div>
  );
}