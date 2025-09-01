'use client';
import { useState, useEffect } from 'react';
import { 
  Scale, Phone, Mail, Calendar, Shield, Star, ChevronRight, Clock, Users 
} from 'lucide-react';

export default function NadineLawCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const achievements = [
    { icon: Star, label: "5.0", sublabel: "Avaliação" },
    { icon: Users, label: "100+", sublabel: "Clientes" },
    { icon: Clock, label: "24h", sublabel: "Resposta" },
    { icon: Shield, label: "100%", sublabel: "Seguro" }
  ];

  return (
    <section className="py-8 md:py-12 relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black">
        {/* Animated Orbs - Hidden on mobile for performance */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gray-500/8 rounded-full mix-blend-multiply filter blur-3xl animate-pulse hidden md:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gray-600/8 rounded-full mix-blend-multiply filter blur-3xl animate-pulse hidden md:block" style={{ animationDelay: '1s' }}></div>
        {/* Interactive Mouse Glow - Hidden on mobile */}
        <div 
          className="absolute pointer-events-none opacity-20 transition-all duration-500 hidden md:block"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(232, 50, 65, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Grid Pattern - Reduced opacity on mobile */}
        <div 
          className="absolute inset-0 opacity-[0.02] md:opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 opacity-10 hidden md:block">
        <Scale className="w-16 h-16 md:w-24 md:h-24 animate-bounce" style={{ animationDuration: '4s' }} />
      </div>

      {/* Main Content - FULLY RESPONSIVE */}
      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10 max-w-7xl">
        <div className={`grid grid-cols-1 gap-8 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Column - Content - FULLY MOBILE OPTIMIZED */}
          <div className="space-y-6 md:space-y-8">
            {/* Main Heading - Responsive sizing */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  Nadine Isabel
                </span>
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Zeverino
                </span>
                <span className="block text-white/70 text-base md:text-lg font-light mt-1 md:mt-2">
                  Advogada · Portugal
                </span>
              </h1>
              
              {/* Simplified Description */}
              <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg">
                Proteção jurídica completa com <span className="font-semibold text-[#E83241]">resultados comprovados.</span> 
              </p>
            </div>

            {/* Achievement Cards - MOBILE RESPONSIVE GRID */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="group relative p-3 md:p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-[#E83241]/50 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                >
                  <item.icon className="w-4 h-4 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 group-hover:scale-110 transition-transform text-[#E83241]" />
                  <div className="text-sm md:text-lg font-bold text-white">{item.label}</div>
                  <div className="text-xs text-white/60">{item.sublabel}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - MOBILE STACKED PERFECTLY */}
            <div className="flex flex-col gap-3 md:gap-4">
              {/* Botão Ligar Agora - Link para telefone */}
              <a 
                href="tel:+351964022222"
                className="group relative px-5 py-3 md:px-6 md:py-4 bg-gradient-to-r from-[#E83241] to-[#E83241]/90 rounded-xl font-bold text-base md:text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E83241]/30 flex items-center justify-center gap-2 md:gap-3 text-white"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>Ligar Agora</span>
              </a>

              {/* Botão Agendar Reunião - Link externo */}
              <a 
                href="https://calendly.com/nadinezeverino" // Substitua pela sua URL real
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-5 py-3 md:px-6 md:py-4 bg-transparent border-2 border-white/30 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:border-[#E83241] hover:bg-[#E83241]/10 flex items-center justify-center gap-2 md:gap-3 text-white"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>Agendar Reunião</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Card - MOBILE OPTIMIZED */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-2xl rounded-2xl p-5 md:p-6 lg:p-8 border border-white/30 shadow-2xl">
              {/* Card Header */}
              <div className="text-center mb-5 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#E83241] to-[#E83241]/80 rounded-xl mx-auto mb-3 md:mb-4 flex items-center justify-center shadow-lg">
                  <Scale className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Contactos</h3>
                <p className="text-white/60 text-sm md:text-base">Nadine Isabel Zeverino</p>
              </div>

              {/* Contact Options - MOBILE RESPONSIVE */}
              <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                {/* Telefone - Link direto para chamada */}
                <a 
                  href="tel:+351964022222"
                  className="w-full group flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-[#E83241]/50 transition-all duration-300 hover:bg-white/15 shadow-lg"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E83241] rounded-lg flex items-center justify-center shadow-lg">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-white text-sm md:text-base">Telefone</div>
                    <div className="text-xs md:text-sm text-white/60">+351 964 022 222</div>
                  </div>
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email - Link direto para email */}
                <a 
                  href="mailto:niz@nadinezeverino.com"
                  className="w-full group flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-[#E83241]/50 transition-all duration-300 hover:bg-white/15 shadow-lg"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E83241] rounded-lg flex items-center justify-center shadow-lg">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-white text-sm md:text-base">Email</div>
                    <div className="text-xs md:text-sm text-white/60">niz@nadinezeverino.com</div>
                  </div>
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Badge */}
              <div className="text-center p-3 md:p-4 bg-gradient-to-r from-[#E83241]/20 to-[#E83241]/10 backdrop-blur-lg rounded-xl border border-[#E83241]/30">
                <div className="flex items-center justify-center gap-2 text-white font-semibold text-xs md:text-sm">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-[#E83241]" />
                  <span>Atendimento Confidencial</span>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-[#E83241] rounded-full animate-ping hidden md:block"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-white/20 rounded-full animate-pulse hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}