'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const router = useRouter();
  const t = useTranslations('NotFound');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Error Number */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E83241] to-red-600 rounded-full blur-xl opacity-20"></div>
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-[#E83241] to-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-5xl font-black text-white">404</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-3">
              {t('title')}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="relative mt-12 mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <button
              onClick={() => router.back()}
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-[#E83241] hover:text-[#E83241] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              {t('goBack')}
            </button>
            
            <button
              onClick={() => router.push('/')}
              className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#E83241] to-red-600 text-white font-semibold rounded-xl hover:from-[#E83241]/90 hover:to-red-600/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Home className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              {t('homePage')}
            </button>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}