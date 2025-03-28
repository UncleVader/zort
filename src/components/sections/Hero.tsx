'use client';

import { motion } from 'framer-motion';
import useMousePosition from "@/hooks/useMousePosition";
import MainButton from "@/components/shared/MainButton";

export default function Hero() {
  const {
    targetRef,
    mousePosition,
    handleMouseMove
  } = useMousePosition()

  return (
    <section
      id="hero"
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
            ref={targetRef}
            className="text-5xl md:text-7xl font-bold mb-6 p-4"
            style={{
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              backgroundImage: `radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                var(--secondary) 0%,
                rgba(0, 242, 254, 0.9) 15%,
                rgba(0, 242, 254, 0.6) 35%,
                rgba(0, 242, 254, 0.5) 50%,
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
        <MainButton onClick={() => window.open('https://apps.apple.com/gb/app/zort/id6740245454',"_blank")}>Download Now</MainButton>
      </motion.div>
    </section>
  );
}