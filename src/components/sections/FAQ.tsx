'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from '@/i18n/navigation'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Como funciona a primeira consulta?",
      answer: "Nesta reunião, ouviremos atentamente o seu caso, esclareceremos suas dúvidas e explicaremos as possíveis estratégias jurídicas. Você sairá desta consulta com uma compreensão clara de suas opções."
    },
    {
      question: "Quais são os honorários advocatícios?",
      answer: "Os honorários são definidos de acordo com a complexidade do caso e o tipo de serviço necessário. Após a consulta inicial, apresentarei uma proposta detalhada com todos os custos envolvidos, sem surpresas. Trabalho com transparência total em todos os aspectos financeiros."
    },
    {
      question: "Posso agendar uma consulta em Portimão?",
      answer: "Sim, atendo pessoalmente no meu escritório em Portimão, localizado no centro da cidade. Também ofereço consultas por videoconferência para clientes de toda a região do Algarve e restante de Portugal."
    },
    {
      question: "Quanto tempo demora resolver um caso?",
      answer: "O tempo varia conforme a complexidade do caso e o tribunal envolvido. Durante a consulta inicial, poderei fornecer uma estimativa realista com base na minha experiência de mais de 10 anos no sistema jurídico português."
    },
    {
      question: "Preciso de documentos para a primeira consulta?",
      answer: "É útil trazer qualquer documento relacionado ao seu caso, mas não é obrigatório. Mesmo sem documentos, posso avaliar sua situação e orientá-lo sobre quais documentos serão necessários para prosseguir."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E83241]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header Section - COM MESMO BRANDING */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge com branding consistente */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#E83241]/10 backdrop-blur-sm rounded-full px-5 py-2.5 mb-6 border border-[#E83241]/20"
          >
            <span className="w-2 h-2 bg-[#E83241] rounded-full animate-pulse"></span>
            <span className="text-[#E83241] text-sm font-bold uppercase tracking-wider">
              Perguntas Frequentes
            </span>
          </motion.div>
          
          {/* Título com branding consistente */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6 leading-tight">
            <span className="block">Esclareça suas</span>
            <span className="block text-[#E83241]">
              Dúvidas
            </span>
          </h2>
          
          {/* Subtítulo com branding consistente */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            As perguntas mais comuns que nossos clientes em nos fazem
          </p>
        </motion.div>
        
        {/* Accordion de perguntas - BORDAS SIMPLES E CLEAN */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card com bordas simples e clean */}
              <div 
                className={`bg-white rounded-xl border ${
                  openIndex === index 
                    ? 'border-[#E83241]/30' 
                    : 'border-gray-200'
                } p-6 transition-all duration-300 hover:border-[#E83241]/20`}
              >
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-[#E83241] transition-colors duration-300">
                    {faq.question}
                  </span>
                  <motion.span
                    initial={false}
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className={`ml-4 ${openIndex === index ? 'text-[#E83241]' : 'text-gray-400'} group-hover:text-[#E83241] transition-colors duration-300`}
                  >
                    <FaChevronDown className="text-lg" />
                  </motion.span>
                </button>
                
                <motion.div
                  id={`faq-answer-${index}`}
                  initial="collapsed"
                  animate={openIndex === index ? "open" : "collapsed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 }
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 p-6 max-w-2xl mx-auto">
            <p className="text-gray-700">
              Não encontrou sua pergunta?{' '}
              <Link 
                href="/contact/" 
                className="text-[#E83241] font-semibold hover:text-[#E83241]/80 transition-colors duration-300 underline underline-offset-4"
              >
                Entre em contato diretamente
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}