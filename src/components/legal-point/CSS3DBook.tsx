'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CSS3DBookProps {
  coverImage: string;
}

export default function CSS3DBook({ coverImage }: CSS3DBookProps) {
  return (
    <div className="flex items-center justify-center py-12" style={{ perspective: '2000px' }}>
      <motion.div 
        className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] group"
        initial={{ rotateY: -20, rotateX: 5, rotateZ: -1 }}
        whileHover={{ rotateY: -10, rotateX: 2, rotateZ: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Main Book Shadow */}
        <div 
          className="absolute -inset-4 bg-black/60 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* The "Thickness" (Simulated with multiple layers) */}
        <div 
          className="absolute inset-0 bg-[#ddd] rounded-sm"
          style={{ transform: 'translateZ(-1px)' }}
        />
        <div 
          className="absolute inset-0 bg-[#ccc] rounded-sm"
          style={{ transform: 'translateZ(-2px)' }}
        />
        <div 
          className="absolute inset-0 bg-[#bbb] rounded-sm"
          style={{ transform: 'translateZ(-3px)' }}
        />

        {/* Front Cover Container */}
        <div 
          className="absolute inset-0 z-10 rounded-sm overflow-hidden shadow-[10px_10px_30px_rgba(0,0,0,0.5)] border border-white/10"
          style={{ transform: 'translateZ(0px)' }}
        >
          <Image
            src={coverImage}
            alt="Ebook Cover"
            fill
            className="object-cover"
            priority
          />
          
          {/* Subtle Reflection Sheen */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ transform: 'translateZ(1px)' }}
          />
        </div>

        {/* Golden Edge Highlight */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C5A065]/30 z-20"
          style={{ transform: 'translateZ(1px)' }}
        />
      </motion.div>
    </div>
  );
}
