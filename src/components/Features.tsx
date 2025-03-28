'use client';

import {useState} from "react";
import {TFeature} from "@/types/common";
import FeaturesCarousel from "@/components/shared/FeaturesCarousel";
import {motion} from 'framer-motion';
import useMousePosition from "@/hooks/useMousePosition";


const featuresList: TFeature[] = [
  {
    title: 'AI Bet Slip Scanner',
    description: 'Instantly scan and analyze any bet slip. Our AI extracts odds, stakes, and potential returns with incredible accuracy.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path
          d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h16V4H4zm3 3h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
        <rect x="15" y="13" width="4" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Interactive Dashboard',
    description: 'Track your performance with beautiful visualizations. Monitor win rates, ROI, and betting patterns in real-time.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M4 3h16v2H4V3zm1 4h14v12H5V7zm2 2v8h10V9H7z"/>
        <circle cx="12" cy="13" r="2"/>
      </svg>
    ),
  },
  {
    title: 'Smart Analytics',
    description: 'Get intelligent insights about your betting behavior. Identify winning strategies and optimize your approach.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 2v14h14V5H5z"/>
        <path d="M7 13h2v4H7v-4zM11 9h2v8h-2V9zM15 11h2v6h-2v-6z"/>
        <circle cx="12" cy="7" r="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Secure & Private',
    description: 'Your data is encrypted and protected. We prioritize your privacy and security above everything.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path
          d="M12 2a4 4 0 0 0-4 4v4H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4zm-2 4a2 2 0 1 1 4 0v4h-4V6zm2 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
      </svg>
    ),
  },
];

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const {
    targetRef,
    mousePosition,
    handleMouseMove
  } = useMousePosition()

  return (
    <section
      className="h-screen relative bg-dark-secondary"
    >
      <div
        className={"sticky top-0 h-screen flex flex-col items-center justify-center py-20"}
        onMouseMove={handleMouseMove}
      >
        <motion.h2
          ref={targetRef}
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: false}}
          transition={{duration: 0.8}}
          className="text-3xl md:text-7xl font-bold mb-6 p-4 text-center"
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            backgroundImage: `radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                var(--secondary) 0%,
                rgba(0, 242, 254, 0.9) 15%,
                rgba(0, 242, 254, 0.85) 35%,
                rgba(0, 242, 254, 0.8) 50%,
                transparent 100%
              )`
          }}        >
          Smart Features <br/> for Smart Betting
        </motion.h2>

        <FeaturesCarousel
          itemsData={featuresList}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </section>
  );
}