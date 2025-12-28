import React from 'react';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    // Heart shapes
    const heart = confetti.shapeFromPath({
      path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 76,-75 38,0 57,18 75,56z'
    });

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD1DC', '#E6E6FA', '#FFFDD0'],
        shapes: [heart]
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD1DC', '#E6E6FA', '#FFFDD0'],
        shapes: [heart]
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    
    // Also standard confetti burst
     confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
       colors: ['#FFD1DC', '#E6E6FA', '#FFFDD0']
    });
  };

  return (
    <footer className="py-12 flex flex-col items-center justify-center gap-6 mt-12 bg-white/30 backdrop-blur-sm w-full">
      <button 
        onClick={triggerConfetti}
        className="group px-8 py-3 bg-kawaii-pink text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 font-bold font-display text-xl"
      >
        <span className="group-hover:animate-bounce">Send Love</span>
        <Heart fill="currentColor" className="group-hover:animate-ping" />
      </button>

      <p className="text-sm text-gray-500 font-body">
        Made with ❤️ by Shashwat
      </p>
    </footer>
  );
};

export default Footer;
