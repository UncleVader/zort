'use client';

import {motion, MotionValue, useScroll, useTransform} from 'framer-motion';
import React, {useRef} from 'react';
import MainButton from "@/components/shared/MainButton";

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
  });
  const y = useTransform(scrollYProgress,
    [0,1/4,1/2,3/4,1],
    ["-40%","50%","-40%","50%","-40%"]
  );
  const opacity1 = useTransform(scrollYProgress,
    [0,1/5,2/5,3/5,4/5,1],
    [1,1,0,0,0,0]
  );
  const opacity2 = useTransform(scrollYProgress,
    [0,1/5,2/5,3/5,4/5,1],
    [0,0,1,1,0,0]
  );
  const opacity3 = useTransform(scrollYProgress,
    [0,1/5,2/5,3/5,4/5,1],
    [0,0,0,0,1,1]
  );

  return (
    <section ref={containerRef} className="h-[1200vh] relative bg-gradient-to-b from-dark-main to-dark-secondary" id="showcase">
      <div className={"sticky top-0 h-screen flex py-20 max-w overflow-hidden"}>
        <div className="container h-full mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div
            className="h-[40vh] md:h-full w-full md:w-1/2 relative overflow-hidden flex items-center"
            style={{
              maskImage: "linear-gradient(to left, transparent, transparent 50px, black 100px)",
          }}
          >
            <FeatureSection
              scrollYProgress={scrollYProgress}
              thresholds={[0,1/5,2/5,3/5,4/5,1]}
              positions={["0%", "0%", "-100%", "-100%", "-100%", "-100%"]}
              opacities={[1,1,0,0,0,0]}
              header={"Manage and Track Your Bets Effortlessly"}
              features={[
                "Quickly check total bets, win rate, and profit",
                "Easily log your bets",
                "Dive into analytics and visualizations via the Dashboards"
              ]}
            />

            <FeatureSection
              scrollYProgress={scrollYProgress}
              thresholds={[0,1/5,2/5,3/5,4/5,1]}
              positions={["100%", "100%", "0%", "0%", "-100%", "-100%"]}
              opacities={[0,0,1,1,0,0]}
              header={"Monitor Your Betting Balance and Track Performance Trends"}
              features={[
                "Check your current total balance for a quick snapshot of your betting position",
                "See balance trends with a historical chart",
                "Track monthly profit, win rate, and averages"
              ]}
            />

            <FeatureSection
              scrollYProgress={scrollYProgress}
              thresholds={[0,1/5,2/5,3/5,4/5,1]}
              positions={ ["100%", "100%", "100%", "100%", "0%", "0%"]}
              opacities={[0,0,0,0,1,1]}
              header={"Track Your Betting Performance with Detailed Statistics"}
              features={[
                "Check your win rate for different bets displayed graphically",
                "View a monthly summary with profit, win rate, biggest wins/losses and other statistics"
              ]}
            />
          </div>

          <div className="h-[60vh] md:h-full md:w-1/2 flex items-center">
            <motion.div
              className="flex-1 rounded-3xl h-full"
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: false}}
              transition={{duration: 0.8}}
            >
              <div className="relative h-full aspect-4/6 max-w-[400px] mx-auto flex items-center justify-center">
                <motion.div
                  className="absolute -z-10 size-40 md:size-100 bg-secondary blur-3xl rounded-full"
                  style={{y}}
                />
                <motion.img
                  src={"/screen1.webp"}
                  alt="BetTracker AI"
                  className={"object-contain absolute size-full"}
                  style={{opacity: opacity1}}
                />
                <motion.img
                  src={"/screen2.webp"}
                  alt="BetTracker AI"
                  className={"object-contain absolute size-full"}
                  style={{opacity: opacity2}}
                />
                <motion.img
                  src={"/screen3.webp"}
                  alt="BetTracker AI"
                  className={"object-contain absolute size-full"}
                  style={{opacity: opacity3}}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface IFeatureSectionProps {
  scrollYProgress: MotionValue<number>;
  thresholds: number[];
  positions: string[];
  opacities: number[];
  header: string;
  features: string[];
}
function FeatureSection({scrollYProgress, thresholds, positions, opacities, header, features}:IFeatureSectionProps) {
  const x = useTransform(scrollYProgress,
    thresholds,
    positions
  );
  const opacity = useTransform(scrollYProgress,
    thresholds,
    opacities
  );

  return (
    <motion.div
      className="flex w-full flex-col px-5 md:pl-10 md:pr-25 absolute"
      style={{x, opacity}}
    >
      <h2 className={"text-xl md:text-2xl lg:text-4xl font-bold mb-4 md:mb-6"}>{header}</h2>
      <ul className={"text-sm md:text-lg lg:text-xl mb-8 list-disc list-inside [&_li]:mb-2 md:[&_li]:mb-4"}>
        {features.map((feature, index) => (<li key={index}>{feature}</li>))}
      </ul>
      <MainButton className={"hidden md:block"}>Learn More</MainButton>
    </motion.div>
  )
}