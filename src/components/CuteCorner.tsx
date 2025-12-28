import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { X } from 'lucide-react';

const CuteCorner: React.FC = () => {
    const [activeMascot, setActiveMascot] = useState<MascotData | null>(null);

    const mascots: MascotData[] = [
        {
            id: 'panda',
            emoji: "🐼",
            title: "Mr. Panda",
            modalTitle: "It's Mr. Panda!",
            modalContent: "I'm popping in to say that I miss you BEARY much! You mean the world to me! 🎋❤️❤️",
            color: "bg-white"
        },
        {
            id: 'kitty',
            emoji: "🐱",
            title: "Ms. Kitty",
            modalTitle: "It's Ms. Kitty!",
            modalContent: "Just wanted to tell you that you are absolutely PURR-FECT! I love you so much! 😻✨",
            color: "bg-kawaii-lilac"
        }
    ];

  return (
    <section className="py-12 flex flex-col items-center gap-12">
        <div className="text-center">
            <h2 className="font-display text-4xl text-kawaii-text mb-2">Our Mascots</h2>
            <p className="font-body text-gray-500">Tap them for a surprise!</p>
        </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center w-full max-w-4xl">
        {mascots.map((mascot) => (
            <MascotCard 
                key={mascot.id} 
                mascot={mascot} 
                onClick={() => setActiveMascot(mascot)} 
            />
        ))}
      </div>

      <AnimatePresence>
        {activeMascot && (
            <MascotModal 
                mascot={activeMascot} 
                onClose={() => setActiveMascot(null)} 
            />
        )}
      </AnimatePresence>
    </section>
  );
};

interface MascotData {
    id: string;
    emoji: string;
    title: string;
    modalTitle: string;
    modalContent: string;
    color: string;
}

const MascotCard: React.FC<{ mascot: MascotData; onClick: () => void }> = ({ mascot, onClick }) => {
  return (
    <motion.div
      className="relative w-64 h-72 cursor-pointer"
      onClick={onClick}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
    >
        <div className={`w-full h-full relative rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 text-center border-4 border-white/50 backdrop-blur-sm ${mascot.color}`}>
            <span className="text-8xl mb-4 filter drop-shadow-md">{mascot.emoji}</span>
            <h3 className="font-display text-2xl text-kawaii-text">{mascot.title}</h3>
            <p className="text-xs text-gray-400 mt-2 font-bold tracking-widest uppercase">Click Me</p>
        </div>
    </motion.div>
  );
};

const MascotModal: React.FC<{ mascot: MascotData; onClose: () => void }> = ({ mascot, onClose }) => {
    React.useEffect(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD1DC', '#E6E6FA', '#FFFDD0']
        });
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`relative w-full max-w-sm p-8 rounded-3xl shadow-2xl text-center border-4 border-white ${mascot.color}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 transition-colors text-gray-400"
                >
                    <X size={24} />
                </button>

                <div className="text-9xl mb-6 filter drop-shadow-xl animate-bounce">
                    {mascot.emoji}
                </div>
                
                <h3 className="font-display text-3xl text-kawaii-text mb-4">
                    {mascot.modalTitle}
                </h3>
                
                <p className="font-body text-lg text-gray-700 leading-relaxed mb-6">
                    {mascot.modalContent}
                </p>

                <div className="flex justify-center gap-2 text-2xl animate-pulse">
                    ❤️ ✨ ❤️
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CuteCorner;
