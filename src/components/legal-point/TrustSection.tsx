'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Users2, Gavel } from 'lucide-react';

export default function TrustSection() {
  const t = useTranslations('LegalPoint.Trust');

  const stats = [
    { id: 'years', icon: <Award size={20} />, value: "10+", label: t('years') },
    { id: 'cases', icon: <CheckCircle size={20} />, value: "100+", label: t('cases') },
    { id: 'success', icon: <Gavel size={20} />, value: "98%", label: t('success') },
    { id: 'clients', icon: <Users2 size={20} />, value: "12+", label: t('nations') },
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-gray-50 text-brand rounded-full group-hover:bg-brand group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div>
                <p className="text-2xl font-bold text-black leading-none">{stat.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}