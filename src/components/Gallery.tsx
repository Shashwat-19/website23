import React from 'react';
import { motion } from 'framer-motion';

import us1 from '../assets/images/us1.jpg';
import us2 from '../assets/images/us2.jpg';
import us3 from '../assets/images/us3.jpg';

const IMAGES = [
  us1,
  us2,
  us3,
];

const Gallery: React.FC = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="text-center">
        <h2 className="font-display text-4xl text-kawaii-text mb-2">Our Beautiful Memories</h2>
        <p className="font-body text-gray-500">Every moment with you is a treasure.</p>
      </div>

      <div className="columns-1 md:columns-3 gap-4 space-y-4 w-full px-4 md:px-0">
        {IMAGES.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl break-inside-avoid cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img 
              src={src} 
              alt=""
              className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
