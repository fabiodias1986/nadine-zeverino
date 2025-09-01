'use client';
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "T",
    rating: 5,
    comment: "A very professional lawyer. She speaks English very well. Nadine guided us through a horrible buying process of our property. We are forever grateful of her perseverance."
  },
  {
    id: 2,
    name: "Tonica Rebeca",
    rating: 5,
    comment: "Uma profissional que transmite confiança desde o primeiro contacto! Sempre disponível para qualquer dúvida!Recomendo plenamente os seus serviços!"
  },
  {
    id: 3,
    name: "graciete arsenio",
    rating: 5,
    comment: "Sempre desponivel quando preciso. Gosto muito da dra Nadine uma boa profissional e boa conselheira quando preciso de algum conselho. Beijinhos"
  },
  {
    id: 4,
    name: "Nuno Rosado",
    rating: 5,
    comment: "Recomendo 🙂👌👌 Excelente receção no atendimento. Sempre máxima atenção e empenho para assunto no qual nós colocamos. Profissionalismo acima⬆ de tudo ⭐⭐⭐⭐⭐. "
  },
  {
    id: 5,
    name: "Annika Karppinen",
    rating: 5,
    comment: "En duktig och pålitlig advokat. Bra på engelska. Anlitade henne i samband med vårt lägenhetsköp i portugal. Allt gick väldigt smidigt!"
  },
  {
    id: 6,
    name: "Bruna Monteiro",
    rating: 5,
    comment: "Simpática, boa profissional, recomendo vivamente, obrigada pela sua disponibilidade"
  },
  {
    id: 7,
    name: "Erik Hollander",
    rating: 5,
    comment: "Nadine is the best, communicates fast and is very reliable. I would recommend her to anyone"
  },
  {
    id: 8,
    name: "Carina Paixão",
    rating: 5,
    comment: "Simpática,boa profissional e sempre disponível para responder a qualquer dúvida. ⭐⭐⭐⭐⭐"
  },
  {
    id: 9,
    name: "Rodrigo Costa",
    rating: 5,
    comment: "Disponível, rápida, eficiente, simpática. 5 estrelas fáceis!"
  },
  {
    id: 10,
    name: "John Brock",
    rating: 5,
    comment: "Very helpful with our Portuguese residency."
  }
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);


  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E83241]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#E83241]/2 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#E83241]/1 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - COM MESMO UI DO BRANDING */}
        <div className="text-center mb-16">
          {/* Badge com branding consistente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#E83241]/10 backdrop-blur-sm border border-[#E83241]/20 rounded-full px-5 py-2.5 mb-6"
          >
            <Star className="text-[#E83241] text-sm" />
            <span className="text-[#E83241] font-semibold text-sm uppercase tracking-wider">
              Avaliações Google
            </span>
          </motion.div>
          
          {/* TÍTULO com branding consistente */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
            <span className="block">O que dizem os</span>
            <span className="block text-[#E83241]">
              Nossos Clientes
            </span>
          </h2>
          
          
          
        </div>

        {/* Main Slideshow */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Review Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Decorative top border */}
            <div className="h-1 bg-gradient-to-r from-[#E83241] via-[#E83241]/80 to-[#E83241]"></div>
            
            <div className="p-8 md:p-12 lg:p-16">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="bg-[#E83241]/5 rounded-full p-4">
                  <Quote className="w-8 h-8 text-[#E83241]" />
                </div>
              </div>
              
              {/* Review Content */}
              <div key={currentReview.id} className="text-center">
                <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic max-w-3xl mx-auto">
                  &quot;{currentReview.comment}&quot;
                </p>
                
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < currentReview.rating ? 'text-[#E83241] fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                
                {/* Author */}
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 text-lg">{currentReview.name}</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-[#E83241] hover:text-white"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-[#E83241] hover:text-white"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#E83241] w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="https://www.google.com/search?q=Nadine+Isabel+Zeverino+Advogada+reviews&tbm=lcl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E83241] text-white rounded-xl font-medium hover:bg-[#E83241]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <span>Ver avaliações no Google</span>
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}