'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Erro ao enviar mensagem. Tente novamente.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Erro de conexão. Por favor, tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Envie uma Mensagem</h2>
      <div className="h-1 w-20 bg-[#E83241] mb-8"></div>
      
      {submitStatus && (
        <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors"
              placeholder="seu@email.com"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors"
              placeholder="+351 912 345 678"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Assunto *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors appearance-none bg-white"
            >
              <option value="">Selecione um assunto</option>
              <option value="Direito Civil">Direito Civil</option>
              <option value="Direito Comercial">Direito Comercial</option>
              <option value="Direito Imobiliário">Direito Imobiliário</option>
              <option value="Contratos e Negócios">Contratos e Negócios</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#E83241] focus:border-[#E83241] transition-colors"
            placeholder="Descreva brevemente a sua situação..."
          ></textarea>
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-6 bg-[#E83241] text-white font-bold rounded-xl hover:bg-[#d02a37] transition-colors duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </motion.button>
      </form>
    </div>
  );
}