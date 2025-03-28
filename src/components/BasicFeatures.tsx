'use client';

import {motion, useScroll} from 'framer-motion';
import {useRef} from "react";

const basicFeatures = [
  {
    title: 'AI Analysis',
    description: 'Advanced algorithms analyze your betting patterns',
    icon: '🤖',
  },
  {
    title: 'Real-time Tracking',
    description: 'Monitor your bets as they happen',
    icon: '📊',
  },
  {
    title: 'Smart Predictions',
    description: 'Get AI-powered insights for better decisions',
    icon: '🎯',
  },
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
  });

  return (
    <section ref={containerRef} className="h-[1200vh] relative bg-dark-secondary">
      <div className={"sticky top-0 h-screen flex py-20"}>
      </div>
    </section>
  );
}