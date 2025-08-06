import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, Play, Pause } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    comment: "Excelente profissional! A Dra. Nadine resolveu o meu caso imobiliário com muita competência e dedicação. Recomendo vivamente os seus serviços."
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    comment: "Advocada muito competente e atenciosa. Conseguiu resolver uma questão familiar complexa de forma rápida e eficaz. Serviço de excelência."
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 5,
    comment: "Profissionalismo exemplar! A Dra. Nadine orientou-me durante todo o processo legal, sempre disponível para esclarecer dúvidas. Muito satisfeita."
  },
  {
    id: 4,
    name: "Carlos Pereira",
    rating: 5,
    comment: "Excepcional! Resolveu o meu caso empresarial com estratégia e conhecimento. Comunicação clara e resultados concretos. Recomendo sem hesitação."
  },
  {
    id: 5,
    name: "Luisa Rodrigues",
    rating: 5,
    comment: "Muito profissional e dedicada. Ajudou-me numa questão de direito civil de forma eficiente. Sempre disponível e com explicações claras."
  },
  {
    id: 6,
    name: "Pedro Oliveira",
    rating: 5,
    comment: "Advogada de excelência! Conseguiu um resultado fantástico no meu processo. Muito satisfeito com a dedicação e competência demonstrada."
  },
  {
    id: 7,
    name: "Sofia Mendes",
    rating: 5,
    comment: "Serviço impecável! A Dra. Nadine é muito competente e conseguiu resolver a minha questão legal de forma rápida e eficaz. Recomendo vivamente."
  },
  {
    id: 8,
    name: "Miguel Torres",
    rating: 5,
    comment: "Excelente profissional! Muito atenciosa e sempre disponível. Conseguiu resolver o meu caso com grande competência. Serviço de qualidade superior."
  },
  {
    id: 9,
    name: "Carla Fernandes",
    rating: 5,
    comment: "Advogada muito competente! Resolveu uma questão complexa de direito imobiliário de forma brilhante. Comunicação excelente e resultados concretos."
  },
  {
    id: 10,
    name: "Ricardo Almeida",
    rating: 5,
    comment: "Profissional de excelência! A Dra. Nadine demonstrou grande conhecimento e dedicação ao meu caso. Muito satisfeito com o resultado obtido."
  }
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E83241]/5 border border-[#E83241]/10 rounded-full px-4 py-2 mb-6">
            <Star className="text-[#E83241] w-4 h-4 fill-current" />
            <span className="text-[#E83241] text-sm font-medium">Avaliações Google</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            O que dizem os nossos clientes
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 text-[#E83241] fill-current drop-shadow-sm" 
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-black">{averageRating.toFixed(1)}</span>
          </div>
        </div>

        {/* Main Slideshow */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Review Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
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
                  "{currentReview.comment}"
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

        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href="https://google.com/search?q=nadine+everino+advogada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E83241] text-white rounded-xl font-medium hover:bg-[#E83241]/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <span>Ver todas as avaliações no Google</span>
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}