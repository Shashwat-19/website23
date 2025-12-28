import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Music } from 'lucide-react';

interface HeroProps {
  onPlayMusic: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlayMusic }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center relative gap-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm text-kawaii-text text-sm font-bold tracking-wider mb-4 border border-white/50 shadow-sm">
          DISTANCE <span className="mx-1">💔</span> MEANS NOTHING
        </span>
      </motion.div>

      <motion.h1 
        className="font-display text-6xl md:text-8xl text-kawaii-text drop-shadow-sm"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        I Miss You <span className="text-kawaii-pink inline-block">So Much</span>
      </motion.h1>

      <motion.p 
        className="font-body text-xl md:text-2xl text-gray-600 max-w-lg"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        You are mine, today and forever.
        <br/><span className="text-sm opacity-70">(Can't wait to hug you)</span>
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8"
      >
        <button 
          onClick={onPlayMusic}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/60 text-kawaii-text font-bold"
        >
          <div className="p-2 bg-kawaii-pink rounded-full text-white group-hover:scale-110 transition-transform">
            <Music size={20} />
          </div>
          <span>Play Our Song</span>
          <motion.div
            className="absolute -right-2 -top-2 text-kawaii-pink"
            animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={16} fill="currentColor" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
