'use client';

import {useState} from "react";
import {TFeature} from "@/types/common";
import FeaturesCarousel from "@/components/shared/FeaturesCarousel";
import useMousePosition from "@/hooks/useMousePosition";
import AnimatedHeading from "@/components/shared/AnimatedHeading";


const featuresList: TFeature[] = [
  {
    title: 'Open ZORT',
    description: 'Launch the app and point your camera at any bet slip - no sign up required.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M4 4h16v16H4V4z" fillOpacity="0.2"/>
        <path d="M9 7h6v2H9V7zM9 11h6v2H9v-2zM9 15h3v2H9v-2z"/>
        <path d="M12 6l4 4-4 4-4-4 4-4z"/>
      </svg>
    ),
  },
  {
    title: 'Take a Photo',
    description: 'Capture your bet slip with your phone\'s camera. Works with both physical and digital slips.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path d="M4 7h16v12H4V7z" fillOpacity="0.2"/>
        <circle cx="12" cy="13" r="3"/>
        <path d="M6 6l2-2h8l2 2H6z"/>
      </svg>
    ),
  },
  {
    title: 'Instant Processing',
    description: 'Our AI immediately extracts all bet details including odds, stakes, and potential returns.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24"
        height="24"
      >
        <path
          d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.41.12-.62l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1a6.964 6.964 0 0 0-1.69-.98l-.38-2.65a.5.5 0 0 0-.49-.42h-4a.5.5 0 0 0-.49.42l-.38 2.65c-.61.23-1.18.54-1.69.98l-2.49-1a.5.5 0 0 0-.61.22l-2 3.46c-.12.21-.07.47.12.62l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.41-.12.62l2 3.46c.12.21.37.29.61.22l2.49-1c.51.44 1.08.75 1.69.98l.38 2.65c.05.23.26.42.49.42h4c.23 0 .45-.18.49-.42l.38-2.65c.61-.23 1.18-.54 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.21.07-.47-.12-.62l-2.11-1.65ZM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
      </svg>
    ),
  },
  {
    title: 'View Results',
    description: 'See your organized bets and track your performance over time through the interactive dashboard.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12c-3.03 0-5.5-2.47-5.5-5.5S8.97 6 12 6s5.5 2.47 5.5 5.5S15.03 17 12 17Z"
          fill="currentColor"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    )
  },
];

export default function HowItWorks() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const {
    targetRef,
    mousePosition,
    handleMouseMove
  } = useMousePosition()

  return (
    <section
      id="how-it-works"
      className="h-screen relative bg-gradient-to-b from-dark-main to-dark-secondary"
    >
      <div
        className={"sticky top-0 h-screen flex flex-col items-center justify-center py-20"}
        onMouseMove={handleMouseMove}
      >
        <AnimatedHeading
          targetRef={targetRef}
          mousePosition={mousePosition}
        >How It Works</AnimatedHeading>

        <FeaturesCarousel
          itemsData={featuresList}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </section>
  );
}