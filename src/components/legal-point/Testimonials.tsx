'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 100,
    name: "Jeroen Burcksen",
    rating: 5,
    comment: "We are currently working with Nadine Isabel Zeverino as our lawyer and real estate advisor during the purchase of our plot and the ongoing construction of our home in Portugal, and we feel very lucky to have found her. She consistently goes the extra mile, communicates quickly and clearly, and makes what can be a complex international process feel manageable and reassuring. Her English is excellent, and her local knowledge — with her office based in Portimão — is extremely valuable. Beyond her professionalism, Nadine is also simply a warm, kind, and trustworthy person who genuinely cares about her clients. We highly recommend her."
  },
  {
    id: 2,
    name: "Tonica Rebeca",
    rating: 5,
    comment: "Uma profissional que transmite confiança desde o primeiro contacto! Sempre disponível para qualquer dúvida!Recomendo plenamente os seus serviços!",
  },
  {
    id: 3,
    name: "graciete arsenio",
    rating: 5,
    comment: "Sempre desponivel quando preciso. Gosto muito da dra Nadine uma boa profissional e boa conselheira quando preciso de algum conselho. Beijinhos",
  },
  {
    id: 4,
    name: "Nuno Rosado",
    rating: 5,
    comment: "Recomendo 🙂👌👌 Excelente receção no atendimento. Sempre máxima atenção e empenho para assunto no qual nós colocamos. Profissionalismo acima⬆ de tudo ⭐⭐⭐⭐⭐. ",
  },
  {
    id: 5,
    name: "Annika Karppinen",
    rating: 5,
    comment: "En duktig och pålitlig advokat. Bra på engelska. Anlitade henne i samband med vårt lägenhetsköp i portugal. Allt gick väldigt smidigt!",
  },
  {
    id: 6,
    name: "Bruna Monteiro",
    rating: 5,
    comment: "Simpática, boa profissional, recomendo vivamente, obrigada pela sua disponibilidade",
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
    comment: "Simpática,boa profissional e sempre disponível para responder a qualquer dúvida. ⭐⭐⭐⭐⭐",
  },
  {
    id: 9,
    name: "Rodrigo Costa",
    rating: 5,
    comment: "Disponível, rápida, eficiente, simpática. 5 estrelas fáceis!",
  },
  {
    id: 10,
    name: "John Brock",
    rating: 5,
    comment: "Very helpful with our Portuguese residency."
  }
];

export default function Testimonials() {
  const t = useTranslations('LegalPoint.Testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A065]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C5A065]/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#C5A065]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C5A065] text-sm font-medium tracking-widest uppercase block mb-4">
            {t('tag')}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            {t('title')}
          </h2>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C5A065] to-transparent" />

            <div className="p-8 md:p-12 lg:p-16">
              <div className="flex justify-center mb-8">
                <div className="bg-[#C5A065]/10 rounded-full p-4 border border-[#C5A065]/20">
                  <Quote className="w-8 h-8 text-[#C5A065]" />
                </div>
              </div>

              <div className="relative min-h-[200px] flex items-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentReview.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-full text-center"
                  >
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic max-w-3xl mx-auto font-light line-clamp-5 md:line-clamp-none h-[145px] md:h-[220px] overflow-hidden">
                      &ldquo;{currentReview.comment}&rdquo;
                    </p>

                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < currentReview.rating ? 'text-[#C5A065] fill-current' : 'text-white/10'}`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <h4 className="font-medium text-white text-lg tracking-wide">
                        {currentReview.name}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-[#C5A065] hover:border-[#C5A065] transition-all duration-300 flex items-center justify-center group backdrop-blur-xl"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-[#C5A065] hover:border-[#C5A065] transition-all duration-300 flex items-center justify-center group backdrop-blur-xl"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? 'w-10 bg-[#C5A065]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://www.google.com/search?q=Nadine+Isabel+Zeverino+Advogada+reviews&tbm=lcl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#C5A065]/10 border border-[#C5A065]/30 text-[#C5A065] rounded-xl font-medium hover:bg-[#C5A065] hover:text-white transition-all duration-300 group"
          >
            <span>{t('tag') === 'Trusted by International Clients' ? 'View all reviews on Google' : 'Ver todas as avaliações no Google'}</span>
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
