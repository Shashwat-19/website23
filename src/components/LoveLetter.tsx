import React from 'react';
import { motion } from 'framer-motion';

const LoveLetter: React.FC = () => {
    const text = "My Dearest, \n\nEvery day with you feels like a dream I never want to wake up from. You are my sunshine, my best friend, and my greatest adventure. Thank you for being you.\n\nHere's to us, today and forever. \n\nWith all my love, \nMe";

    return (
        <section className="flex flex-col items-center">
             <div className="relative max-w-2xl w-full bg-[#fdfbf7] p-8 md:p-12 shadow-xl rounded-sm transform rotate-1">
                {/* Paper Texture Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
                
                {/* Stamp */}
                <div className="absolute top-4 right-4 w-16 h-20 border-4 border-kawaii-pink/30 flex items-center justify-center rotate-6">
                    <span className="text-kawaii-pink/50 font-bold text-xs uppercase text-center transform -rotate-12">Love<br/>Mail</span>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="font-display text-3xl mb-8 text-kawaii-text">To My One and Only</h2>
                    
                    <div className="font-body text-lg leading-loose text-gray-700 whitespace-pre-line">
                         <Typewriter text={text} />
                    </div>
                </motion.div>
             </div>
        </section>
    );
};

// Simple Typewriter Component
const Typewriter = ({ text }: { text: string }) => {
    const chars = text.split("");

    return (
        <p>
            {chars.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.05, delay: index * 0.03 }} // Adjust speed here
                >
                    {char}
                </motion.span>
            ))}
        </p>
    );
};

export default LoveLetter;
