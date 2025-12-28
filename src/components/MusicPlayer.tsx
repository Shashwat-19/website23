import React, { useState, useEffect } from 'react';
import { Play, Pause, X, SkipForward, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MusicPlayerProps {
    isVisible: boolean;
    onClose: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isVisible, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isVisible) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [isVisible]);

  useEffect(() => {
    if (audioRef.current) {
        if (isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
        } else {
            audioRef.current.pause();
        }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0, y: 50, scale: 0.9 }}
           animate={{ opacity: 1, y: 0, scale: 1 }}
           exit={{ opacity: 0, y: 50, scale: 0.9 }}
           className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-2xl w-80 md:w-96"
        >
            {/* Native Audio Element */}
            <audio 
                ref={audioRef}
                src="/Lover.wav"
                onEnded={() => setIsPlaying(false)}
                loop={false}
                preload="auto"
            />

          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-inner ${isPlaying ? 'bg-green-100' : 'bg-gray-100'} transition-colors duration-500`}>
                <Music className={`text-kawaii-text ${isPlaying ? 'animate-pulse' : ''}`} size={24} />
            </div>
            
            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-display text-kawaii-text text-lg leading-tight truncate">Lover</h3>
              <p className="text-sm text-gray-500 font-body truncate">Taylor Swift</p>
              
              {/* Visualizer Bar Simulation */}
              <div className="flex items-end gap-1 h-4 mt-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-kawaii-pink/70 rounded-full"
                    animate={{ height: isPlaying ? [4, 12, 6, 16, 4] : 4 }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={togglePlay}
                className="p-3 rounded-full hover:bg-gray-100 transition-colors text-kawaii-text"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
              </button>
              
              <button 
                className="p-3 rounded-full hover:bg-gray-100 transition-colors text-gray-400"
                aria-label="Skip Forward"
              >
                <SkipForward size={24} />
              </button>

              <div className="w-px h-8 bg-gray-200 mx-2" />

              <button 
                onClick={onClose}
                className="p-3 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors text-gray-400"
                aria-label="Close Player"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicPlayer;
