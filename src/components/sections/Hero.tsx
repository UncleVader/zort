'use client';

import { motion } from 'framer-motion';
import useMousePosition from "@/hooks/useMousePosition";
import MainButton from "@/components/shared/MainButton";
import {useResponsive} from "@/hooks/useResponsive";

export default function Hero() {
  const {
    targetRef,
    mousePosition,
    handleMouseMove
  } = useMousePosition()
  const {isDesktop} = useResponsive();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col relative bg-gradient-to-b from-dark-main to-dark-secondary"
      onMouseMove={isDesktop ? handleMouseMove : undefined}
    >
      <div className={"container mx-auto flex-grow flex items-center justify-center"}>
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="text-center px-4 -mt-20 md:mt-0"
        >
          <div className="relative">
            <h1
              ref={targetRef}
              className="text-5xl md:text-7xl font-bold mb-6 p-4"
              style={{
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                backgroundImage: isDesktop ?
                  `radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                var(--secondary) 0%,
                #ffffff 75%,
                #ffffff 100%
              )`
                  : 'radial-gradient(#ffffff 0%, var(--secondary) 100%)'
              }}
            >
              Transform <br/>Your <br/>Betting Game
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 md:w-2/3 mx-auto">
            Harness the power of AI to track, analyze, and optimize your sports betting. Instant bet slip scanning,
            real-time analytics, and intelligent insights at your fingertips.
          </p>
          <MainButton onClick={() => window.open('https://apps.apple.com/gb/app/zort/id6740245454', "_blank")}>Download
            Now</MainButton>
        </motion.div>
      </div>

    </section>
  );
}