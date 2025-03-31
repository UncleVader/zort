"use client"
import {motion} from "framer-motion";
import {FC, RefObject} from "react";
import {useResponsive} from "@/hooks/useResponsive";

interface IProps {
  children: React.ReactNode;
  targetRef: RefObject<HTMLHeadingElement | null>;
  mousePosition: { x: number, y: number };
}
const AnimatedHeading:FC<IProps> = ({targetRef,mousePosition,children}) => {
  const {isDesktop} = useResponsive();

  return (
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
        backgroundImage: isDesktop
          ? `radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              var(--secondary) 0%,
              #ffffff 75%,
              #ffffff 100%
            )`
          : 'radial-gradient(#ffffff 0%, var(--secondary) 100%)'
      }}
    >
      {children}

    </motion.h2>
  )
}

export default AnimatedHeading;