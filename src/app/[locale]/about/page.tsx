'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import MeetingCTA from '@/components/MeetingCTA';
import PageHeader from '@/components/layout/PageHeader';

const SobreMimPage: React.FC = () => {
    const specialties = [
       "Direito de Família e Sucessões",
        "Direito Comercial e das Sociedades",
        "Direito Imobiliário e Construção",
        "Direito Penal e Contraordenacional"
    ];

    const values = [
        { 
            title: "Ética", 
            description: "Compromisso com a integridade e a transparência em cada atuação jurídica.",
            icon: "⚖️"
        },
        { 
            title: "Excelência", 
            description: "Busca constante por qualidade e precisão em cada serviço prestado.",
            icon: "⭐"
        },
        { 
            title: "Proximidade", 
            description: "Relacionamento direto e humano com cada cliente e caso específico.",
            icon: "🤝"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Page Header - Reusable Component */}
            <PageHeader 
                title="NADINE ISABEL ZEVERINO"
                subtitle="Advogada especializada em Portugal com mais de 10 anos de experiência"
               
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 max-w-7xl -mt-16 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Profile Image Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-2xl border-2 border-gray-300 shadow-2xl overflow-hidden">
                            <div className="aspect-[3/4] relative">
                                <Image 
                                    src="/media/profile.jpg"
                                    alt="Nadine Isabel Zeverino - Advogada em Portimão, Portugal"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                            
                            {/* Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-2xl font-bold text-white mb-2">Nadine Isabel Zeverino</h3>
                                <p className="text-gray-200 text-lg font-medium">Advogada em Portugal</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content Card */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-2xl"
                    >
                        <div className="inline-block px-5 py-2 bg-[#E83241]/10 text-[#E83241] text-lg font-bold rounded-full mb-6">
                            SOBRE MIM
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                            Especialista em <span className="text-[#E83241]">Direito Português</span>
                        </h2>
                        
                        <div className="h-1.5 w-20 bg-[#E83241] mb-8"></div>
                        
                        <div className="space-y-6">
                            <p className="text-gray-700 text-lg leading-relaxed font-medium">
                                Com mais de 10 anos de experiência no exercício da advocacia em Portugal, ofereço 
                                <span className="text-[#E83241] font-bold"> soluções jurídicas personalizadas</span>, 
                                <span className="text-[#E83241] font-bold"> éticas</span> e 
                                <span className="text-[#E83241] font-bold"> eficazes</span> para particulares e empresas em Portimão e região Algarvia.
                            </p>
                            
                            <p className="text-gray-700 text-lg leading-relaxed font-medium">
                                A minha prática jurídica assenta em dois pilares fundamentais: 
                                <span className="text-gray-900 font-bold"> conhecimento técnico sólido</span> e 
                                <span className="text-gray-900 font-bold"> relacionamento humano próximo</span>. 
                                Acredito que cada caso merece atenção individualizada e transparência em todos os momentos.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Specialties Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-24"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                            ÁREAS DE <span className="text-[#E83241]">ATUAÇÃO</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-[#E83241] mx-auto"></div>
                        <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
                            Soluções jurídicas especializadas com foco em resultados excepcionais
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specialties.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl border-2 border-gray-300 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-[#E83241] rounded-full flex-shrink-0"></div>
                                    <h3 className="text-xl font-bold text-gray-900">{area}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-24"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                            OS MEUS <span className="text-[#E83241]">VALORES</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-[#E83241] mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl border-2 border-gray-300 p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="text-4xl mb-6">{value.icon}</div>
                                <h3 className="text-2xl font-black text-[#E83241] mb-4">{value.title}</h3>
                                <p className="text-gray-700 text-lg leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Meeting CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 mb-20"
                >
                    <MeetingCTA 
                        title="Pronto para Proteger os Seus Direitos?"
                        subtitle="Agende uma reunião inicial e descubra como podemos ajudar a resolver o seu caso."
                        buttonText="Agendar Reunião"
                        showPhoneOption={true}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default SobreMimPage;