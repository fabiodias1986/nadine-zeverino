'use client';

import { motion } from 'framer-motion';

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo com animação de aumento e diminuição */}
        <motion.div
          className="relative mx-auto mb-6"
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Glass morphism container */}
          <div className="absolute inset-0  rounded-2xl"></div>
          <div className="relative rounded-2xl p-6 ">
            <img 
              src="/media/logo.png" 
              alt="Loading" 
              className="w-16 h-16  lg:w-24 lg:h-24 object-contain"
            />
          </div>
        </motion.div>

        {/* Indicador de loading minimalista */}
        <div className="flex items-center justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}