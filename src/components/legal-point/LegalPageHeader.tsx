'use client';

import { motion } from 'framer-motion';

interface LegalPageHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

export default function LegalPageHeader({ title, subtitle, tag }: LegalPageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 bg-black overflow-hidden border-b border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A065]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C5A065]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {tag && (
            <span className="inline-block text-[#C5A065] text-xs font-semibold uppercase tracking-[0.4em] mb-4">
              {tag}
            </span>
          )}
          
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">
            {title.split(' ').map((word, i) => (
              <span key={i} className={word.toLowerCase() === 'portugal' ? "text-[#C5A065] font-semibold" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>

          {subtitle && (
            <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A065] to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
