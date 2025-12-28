import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Popup {
    id: number;
    x: number;
    y: number;
    text: string;
}

const FloatingPandas: React.FC = () => {
    const [popups, setPopups] = useState<Popup[]>([]);

    // Generate random positions and delays for multiple pandas
    const pandas = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // random start horizontal position
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 20,
        scale: 0.5 + Math.random() * 0.5,
        rotate: Math.random() * 360
    }));

    const handlePandaClick = (e: React.MouseEvent, id: number) => {
        const x = e.clientX;
        const y = e.clientY;
        const newPopup = { id: Date.now(), x, y, text: "I Love You! ❤️" };
        
        setPopups(prev => [...prev, newPopup]);

        // Remove popup after animation
        setTimeout(() => {
            setPopups(prev => prev.filter(p => p.id !== newPopup.id));
        }, 1000);

        // pop effect on the target
        const target = e.target as HTMLDivElement;
        target.style.transition = "transform 0.1s";
        target.style.transform = "scale(0)";
        setTimeout(() => {
            target.style.transform = "scale(1)";
        }, 2000);
    };

    return (
        <>
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {pandas.map((panda) => (
                    <motion.div
                        key={panda.id}
                        className="absolute text-4xl select-none cursor-pointer pointer-events-auto hover:scale-125 transition-transform"
                        initial={{ y: "110vh", x: `${panda.x}vw`, opacity: 0, scale: panda.scale, rotate: 0 }}
                        animate={{ 
                            y: "-10vh", 
                            opacity: [0, 1, 1, 0],
                            rotate: panda.rotate + 360
                        }}
                        transition={{
                            duration: panda.duration,
                            repeat: Infinity,
                            delay: panda.delay,
                            ease: "linear"
                        }}
                        whileHover={{ scale: 1.5, rotate: 0 }}
                        onClick={(e) => handlePandaClick(e, panda.id)}
                    >
                        🐼
                    </motion.div>
                ))}
            </div>

            {/* Popups Layer */}
            <div className="fixed inset-0 pointer-events-none z-50">
                <AnimatePresence>
                    {popups.map(popup => (
                        <motion.div
                            key={popup.id}
                            initial={{ opacity: 1, y: popup.y - 20, x: popup.x }}
                            animate={{ opacity: 0, y: popup.y - 100 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute text-kawaii-pink font-bold text-xl drop-shadow-md whitespace-nowrap"
                            style={{ left: 0, top: 0 }} 
                        >
                            {popup.text}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
};

export default FloatingPandas;
