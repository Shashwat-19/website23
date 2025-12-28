import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reasons from './pages/Reasons';
import BucketList from './pages/BucketList';
import { useEffect } from 'react';

import FloatingPandas from './components/FloatingPandas';

// Wrapper to handle page transitions and scroll to top
const AppContent = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="relative min-h-screen w-full bg-kawaii-cream font-sans selection:bg-kawaii-pink selection:text-white">
            <FloatingPandas />
            
            {/* Animated Background */}
            <motion.div 
                className="fixed inset-0 z-0 bg-gradient-to-br from-kawaii-pink via-kawaii-lilac to-kawaii-cream opacity-60"
                animate={{
                    background: [
                        "linear-gradient(to bottom right, #FFD1DC, #E6E6FA, #FFFDD0)",
                        "linear-gradient(to bottom right, #FFFDD0, #FFD1DC, #E6E6FA)", 
                        "linear-gradient(to bottom right, #E6E6FA, #FFFDD0, #FFD1DC)"
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
            />

            <div className="relative z-10 w-full">
                <Navbar />
                
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route 
                            path="/" 
                            element={
                                <PageWrapper>
                                    <Home />
                                </PageWrapper>
                            } 
                        />
                        <Route 
                            path="/reasons" 
                            element={
                                <PageWrapper>
                                    <Reasons />
                                </PageWrapper>
                            } 
                        />
                         <Route 
                            path="/bucket-list" 
                            element={
                                <PageWrapper>
                                    <BucketList />
                                </PageWrapper>
                            } 
                        />
                    </Routes>
                </AnimatePresence>
            </div>
        </div>
    );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
);

function App() {
  return (
    <Router>
        <AppContent />
    </Router>
  );
}

export default App;
