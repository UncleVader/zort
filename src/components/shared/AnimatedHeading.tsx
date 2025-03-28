import {motion} from "framer-motion";
import {FC, RefObject} from "react";

interface IProps {
  children: React.ReactNode;
  targetRef: RefObject<HTMLHeadingElement | null>;
  mousePosition: { x: number, y: number };
}
const AnimatedHeading:FC<IProps> = ({targetRef,mousePosition,children}) => {
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
        backgroundImage: `radial-gradient(
                circle at ${mousePosition.x}px ${mousePosition.y}px,
                var(--secondary) 0%,
                rgba(0, 242, 254, 0.9) 15%,
                rgba(0, 242, 254, 0.85) 35%,
                rgba(0, 242, 254, 0.8) 50%,
                transparent 100%
              )`
      }}
    >
      {children}

    </motion.h2>
  )
}

export default AnimatedHeading;