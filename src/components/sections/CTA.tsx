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
    <section className="py-12 relative bg-black text-white min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black">
        {/* Animated Orbs - Hidden on mobile for performance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-500/8 rounded-full mix-blend-multiply filter blur-3xl animate-pulse hidden md:block"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600/8 rounded-full mix-blend-multiply filter blur-3xl animate-pulse hidden md:block" style={{ animationDelay: '1s' }}></div>
        {/* Interactive Mouse Glow - Hidden on mobile */}
        <div 
          className="absolute pointer-events-none opacity-20 transition-all duration-500 hidden md:block"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(232, 50, 65, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        {/* Grid Pattern - Reduced opacity on mobile */}
        <div 
          className="absolute inset-0 opacity-[0.03] md:opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-20 right-20 opacity-10 hidden md:block">
        <Scale className="w-24 h-24 animate-bounce" style={{ animationDuration: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative z-10 max-w-7xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left Column - Content - Mobile optimized */}
          <div className="space-y-8">
            {/* Main Heading - Responsive sizing */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                  Nadine Isabel
                </span>
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Zeverino
                </span>
                <span className="block text-white/80 text-lg md:text-xl font-light mt-2">
                  Advogada · Portugal
                </span>
              </h1>
              
              {/* Simplified Description */}
              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-lg">
                Proteção jurídica completa com <span className="font-semibold text-[#E83241]">resultados comprovados.</span> 
              </p>
            </div>

            {/* Achievement Cards - Responsive grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  className="group relative p-3 md:p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-[#E83241]/50 transition-all duration-300 hover:scale-105 shadow-lg text-center"
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-2 group-hover:scale-110 transition-transform text-[#E83241]" />
                  <div className="text-base md:text-lg font-bold text-white">{item.label}</div>
                  <div className="text-xs text-white/60">{item.sublabel}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Mobile stacked */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botão Ligar Agora - Link para telefone */}
              <a 
                href="tel:+351964022222"
                className="group relative px-6 py-4 md:px-8 md:py-4 bg-gradient-to-r from-[#E83241] to-[#E83241]/90 rounded-xl font-bold text-base md:text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#E83241]/30 flex items-center justify-center gap-3 text-white"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Ligar Agora</span>
              </a>

              {/* Botão Agendar Reunião - Link externo */}
              <a 
                href="https://calendly.com/nadinezeverino" // Substitua pela sua URL real
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-4 md:px-8 md:py-4 bg-transparent border-2 border-white/30 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:border-[#E83241] hover:bg-[#E83241]/10 flex items-center justify-center gap-3 text-white"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Agendar Reunião</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Card - Mobile optimized */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/30 shadow-2xl">
              {/* Card Header */}
              <div className="text-center mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#E83241] to-[#E83241]/80 rounded-xl md:rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-2xl">
                  <Scale className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Contactos</h3>
                <p className="text-white/60 text-sm md:text-base">Nadine Isabel Zeverino</p>
              </div>

              {/* Contact Options - Simplified */}
              <div className="space-y-4 mb-6 md:mb-8">
                {/* Telefone - Link direto para chamada */}
                <a 
                  href="tel:+351964022222"
                  className="w-full group flex items-center gap-4 p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-[#E83241]/50 transition-all duration-300 hover:bg-white/15 shadow-lg"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E83241] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-white text-base md:text-lg">Telefone</div>
                    <div className="text-sm text-white/60">+351 964 022 222</div>
                  </div>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email - Link direto para email */}
                <a 
                  href="mailto:niz@nadinezeverino.com"
                  className="w-full group flex items-center gap-4 p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/20 hover:border-[#E83241]/50 transition-all duration-300 hover:bg-white/15 shadow-lg"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E83241] rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-semibold text-white text-base md:text-lg">Email</div>
                    <div className="text-sm text-white/60">niz@nadinezeverino.com</div>
                  </div>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Badge */}
              <div className="text-center p-4 bg-gradient-to-r from-[#E83241]/20 to-[#E83241]/10 backdrop-blur-lg rounded-xl border border-[#E83241]/30">
                <div className="flex items-center justify-center gap-2 text-white font-semibold text-sm md:text-base">
                  <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#E83241]" />
                  <span>Atendimento Confidencial</span>
                </div>
              </div>
            </div>

            {/* Floating Elements - Hidden on mobile */}
            <div className="absolute -top-3 -right-3 w-4 h-4 md:w-6 md:h-6 bg-[#E83241] rounded-full animate-ping hidden md:block"></div>
            <div className="absolute -bottom-3 -left-3 w-3 h-3 md:w-4 md:h-4 bg-white/20 rounded-full animate-pulse hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}