'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headingRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (headingRef.current) {
      const rect = headingRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-dark-main to-dark-secondary"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <div className="relative">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold mb-6 p-4"
            style={{
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              backgroundImage: `radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                var(--secondary) 0%,
                rgba(0, 242, 254, 0.8) 15%,
                rgba(0, 242, 254, 0.4) 35%,
                rgba(0, 242, 254, 0.2) 50%,
                transparent 100%
              )`
            }}
          >
            Transform <br/>Your <br/>Betting Game
          </h1>
        </div>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 md:w-2/3 mx-auto">
          Harness the power of AI to track, analyze, and optimize your sports betting. Instant bet slip scanning, real-time analytics, and intelligent insights at your fingertips.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold text-lg cursor-pointer"
        >
          Download Now
        </motion.button>
      </motion.div>
    </section>
  );
}