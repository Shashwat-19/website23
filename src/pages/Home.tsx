import React, { useState } from 'react';
import Hero from '../components/Hero';
import MusicPlayer from '../components/MusicPlayer';
import CuteCorner from '../components/CuteCorner';
import Gallery from '../components/Gallery';
import LoveLetter from '../components/LoveLetter';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const [showMusicPlayer, setShowMusicPlayer] = useState(false);

    return (
        <div className="flex flex-col gap-32 pb-32">
            <Hero onPlayMusic={() => setShowMusicPlayer(true)} />
            <CuteCorner />
            <Gallery />
            <LoveLetter />
            <Footer />
            <MusicPlayer isVisible={showMusicPlayer} onClose={() => setShowMusicPlayer(false)} />
        </div>
    );
};

export default Home;
