'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta é gratuita e sem compromisso. Nesta reunião, ouviremos atentamente o seu caso, esclareceremos suas dúvidas e explicaremos as possíveis estratégias jurídicas. Você sairá desta consulta com uma compreensão clara de suas opções."
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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Título da seção */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#E83241]/5 text-[#E83241] rounded-full px-6 py-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E83241] animate-pulse"></span>
            <span className="font-medium">Perguntas frequentes</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Esclareça suas dúvidas antes de agendar
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            As perguntas mais comuns que nossos clientes em Portimão e região nos fazem
          </p>
        </motion.div>
        
        {/* Accordion de perguntas */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg font-medium text-black">
                  {faq.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ 
                    rotate: openIndex === index ? 180 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="ml-4 text-[#E83241]"
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
                <div className="px-5 pb-5 pt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
              
              {/* Separador discreto */}
              {index < faqs.length - 1 && (
                <div className="h-px bg-gray-100"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Informação adicional */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Não encontrou sua pergunta?{' '}
            <a 
              href="#contact" 
              className="text-[#E83241] font-medium hover:text-[#E83241]/80 transition-colors"
            >
              Entre em contato diretamente
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}