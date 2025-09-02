'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
  className?: string;
}

export default function PageHeader({
  title,
  subtitle,
  children,
  className = ""
}: PageHeaderProps) {
  return (
    <div className={`relative pb-20 md:pb-32 pt-32 bg-black text-white overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black to-black/50" />
        {/* Decorative Circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E83241]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-white">
              {title.split(' ')[0]}
            </span>
            <span className="block text-[#E83241]">
              {title.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
            {subtitle}
          </p>
          
          {/* Children Content (optional) */}
          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}