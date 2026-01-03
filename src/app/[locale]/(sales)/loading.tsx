'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">

            {/* Logo Glow Effect */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-[#C5A065] blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                        src="/media/logo.png"
                        alt="Loading..."
                        fill
                        className="object-contain brightness-0 invert"
                        priority
                    />
                </div>
            </div>

            {/* Gold Loading Dots */}
            <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-3 h-3 bg-[#C5A065] rounded-full"
                        animate={{
                            y: [0, -10, 0],
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-[#C5A065] text-sm font-serif tracking-[0.2em] uppercase"
            >
                Legal Point
            </motion.p>
        </div>
    );
}
