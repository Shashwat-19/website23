import React from 'react';
import confetti from 'canvas-confetti';
import { Check, Circle } from 'lucide-react';
import { motion } from 'framer-motion';

const BUCKET_LIST_ITEMS = [
    { id: 1, text: "Go to Japan together", completed: false },
    { id: 2, text: "Adopt a puppy", completed: true },
    { id: 3, text: "Learn to make pasta from scratch", completed: false },
    { id: 4, text: "Watch the sunrise on a beach", completed: true },
    { id: 5, text: "Build a blanket fort", completed: true },
    { id: 6, text: "Go skydiving (maybe?)", completed: false },
    { id: 7, text: "Grow old together", completed: false }, // The sweet one
];

const BucketList: React.FC = () => {
    // Determine initial state based on data, but let user toggle for fun
    const [items, setItems] = React.useState(BUCKET_LIST_ITEMS);

    const toggleItem = (id: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newCompleted = !item.completed;
                if (newCompleted) {
                    confetti({
                        particleCount: 50,
                        spread: 60,
                        origin: { y: 0.7 },
                        colors: ['#FFD1DC', '#E6E6FA', '#FFFDD0']
                    });
                }
                return { ...item, completed: newCompleted };
            }
            return item;
        }));
    };

    return (
        <div className="min-h-[80vh] flex flex-col items-center pt-32 px-4 max-w-2xl mx-auto w-full">
            <h1 className="font-display text-4xl mb-4 text-kawaii-text text-center">Our Bucket List</h1>
            <p className="text-gray-500 mb-12 text-center">Adventures we've had and dreams we're chasing.</p>

            <div className="w-full space-y-4">
                {items.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => toggleItem(item.id)}
                        className={`
                            group relative overflow-hidden p-4 rounded-xl shadow-sm border-2 cursor-pointer transition-all duration-300
                            ${item.completed ? 'bg-kawaii-lilac/30 border-kawaii-lilac' : 'bg-white border-white hover:border-kawaii-pink'}
                        `}
                    >
                        <div className="flex items-center gap-4 relative z-10">
                            <div className={`
                                w-6 h-6 rounded-full flex items-center justify-center transition-colors
                                ${item.completed ? 'bg-kawaii-lilac text-white' : 'bg-gray-100 text-gray-300 group-hover:text-kawaii-pink'}
                            `}>
                                {item.completed ? <Check size={14} strokeWidth={3} /> : <Circle size={14} />}
                            </div>
                            <span className={`font-body text-lg ${item.completed ? 'text-gray-500 line-through decoration-kawaii-pink decoration-2' : 'text-gray-700'}`}>
                                {item.text}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default BucketList;
