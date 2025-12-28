import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Heart } from 'lucide-react';

const REASONS = [
    { title: "Your Smile", content: "It lights up the entire room.", color: "bg-kawaii-pink" },
    { title: "Your Laugh", content: "The best sound on earth.", color: "bg-kawaii-lilac" },
    { title: "Your Eyes", content: "I could get lost in them forever.", color: "bg-kawaii-cream" },
    { title: "Your Hugs", content: "The safest place in the world.", color: "bg-green-100" },
    { title: "Your Kindness", content: "You treat everyone with love.", color: "bg-blue-100" },
    { title: "Your Support", content: "You are my biggest cheerleader.", color: "bg-kawaii-pink" },
    { title: "Your Humor", content: "You always make me smile.", color: "bg-kawaii-lilac" },
    { title: "Your Strength", content: "I admire how you handle everything.", color: "bg-kawaii-cream" },
    { title: "Our Talks", content: "Late night conversations are my favorite.", color: "bg-green-100" },
    { title: "Your Voice", content: "Just hearing it soothes my soul.", color: "bg-blue-100" },
    { title: "Your Passion", content: "I love how passionate you are about your dreams.", color: "bg-kawaii-pink" },
    { title: "Your Patience", content: "You deal with me even when I'm annoying.", color: "bg-kawaii-lilac" },
    { title: "Your Style", content: "You look beautiful in everything.", color: "bg-kawaii-cream" },
    { title: "Your Cooking", content: "Even a simple meal with you is a feast.", color: "bg-green-100" },
    { title: "Your Adventure", content: "Life with you is never boring.", color: "bg-blue-100" },
    { title: "Your Intelligence", content: "I love how your mind works.", color: "bg-kawaii-pink" },
    { title: "Your Cuddles", content: "I never want to let go.", color: "bg-kawaii-lilac" },
    { title: "Your Encouragement", content: "You make me believe in myself.", color: "bg-kawaii-cream" },
    { title: "Your Understanding", content: "You get me like no one else does.", color: "bg-green-100" },
    { title: "You Are You", content: "I love everything about you, exactly as you are.", color: "bg-blue-100" },
];

const Reasons: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReason = () => {
        setCurrentIndex((prev) => (prev + 1) % REASONS.length);
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center pt-20 px-4">
            <h1 className="font-display text-4xl mb-12 text-kawaii-text">Reasons Why I Love You</h1>
            
            <div className="relative w-full max-w-sm aspect-[3/4]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 300, opacity: 0, rotate: 20 }}
                        animate={{ x: 0, opacity: 1, rotate: 0 }}
                        exit={{ x: -300, opacity: 0, rotate: -20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className={`absolute inset-0 rounded-3xl shadow-2xl p-8 flex flex-col items-center justify-center text-center border-4 border-white ${REASONS[currentIndex].color}`}
                    >
                        <Heart size={48} className="text-white mb-6 drop-shadow-md" fill="currentColor" />
                        <h2 className="font-display text-3xl text-kawaii-text mb-4">{REASONS[currentIndex].title}</h2>
                        <p className="font-body text-lg text-gray-700 leading-relaxed">{REASONS[currentIndex].content}</p>
                        

                    </motion.div>
                </AnimatePresence>
            </div>

            <button 
                onClick={nextReason}
                className="mt-12 group flex items-center gap-2 px-8 py-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all text-kawaii-text font-bold"
            >
                <span>Next Reason</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
    );
};

export default Reasons;
