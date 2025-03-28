'use client';

import {motion, MotionValue, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';

export default function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
  });
  const y = useTransform(scrollYProgress,
    [0,1/4,1/2,3/4,1],
    ["-20%","60%","-20%","60%","-20%"]
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
    <section ref={containerRef} className="h-[1200vh] relative bg-dark-main">
      <div className={"sticky top-0 h-screen flex py-20"}>
        <div className="container h-full mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="h-[40vh] md:h-full w-full md:w-1/2 relative overflow-hidden flex items-center">
            <FeatureSection
              scrollYProgress={scrollYProgress}
              thresholds={[0.2, 0.3, 0.5]}
              positions={["0%", "-100%", "-100%"]}
              opacities={[1, 0, 0]}
            >
              <h2 className="text-4xl font-bold mb-6">Manage and Track Your Bets Effortlessly</h2>
              <ul className="text-xl mb-8 list-disc list-inside [&_li]:mb-4">
                <li>Key Stats at a Glance: See your total bets placed, win rate, and total profit, providing an immediate understanding of your overall betting performance.</li>
                <li>Easy Bet Entry: The prominent "+ Add New Bet" button allows you to quickly and easily log your bets, ensuring no activity goes unrecorded.</li>
                <li>Access Detailed Dashboards: The "Dashboards" button takes you to in-depth analytics and visualizations, allowing you to dive deeper into your betting data.</li>
                <li>Currency Flexibility: Toggle the currency displayed, allowing you to view your stats in whatever currency you prefer.</li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
                Learn More
              </button>
            </FeatureSection>

            <FeatureSection
              scrollYProgress={scrollYProgress}
              thresholds={[0.2, 0.3, 0.5, 0.6]}
              positions={["100%", "0%", "0%", "-100%"]}
              opacities={[0, 1, 1, 0]}
            >
              <h2 className="text-4xl font-bold mb-6">Monitor Your Betting Balance and Track Performance Trends</h2>
              <ul className="text-xl mb-8 list-disc list-inside [&_li]:mb-4">
                <li>Total Balance Display: Easily see your current total balance, providing a quick snapshot of your overall betting position.</li>
                <li>Balance History Chart: Visualize your balance fluctuations over time with a historical chart, helping you identify trends and understand the impact of your betting decisions.</li>
                <li>Key Performance Indicators: Monitor essential stats like monthly profit, win rate, average win, and average loss to track progress and identify areas for improvement.</li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
                Learn More
              </button>
            </FeatureSection>

            <FeatureSection
              scrollYProgress={scrollYProgress}
              thresholds={[0.5, 0.6, 0.8]}
              positions={ ["100%", "0%", "0%"]}
              opacities={[0, 1, 1]}
            >
              <h2 className="text-4xl font-bold mb-6">Track Your Betting Performance with Detailed Statistics</h2>
              <ul className="text-xl mb-8 list-disc list-inside [&_li]:mb-4">
                <li>Win Rate: Instantly see your win rate for different types of bets represented in graphical format.</li>
                <li>Profit Summary: Review a monthly profit summary with total profit, win rate, biggest win, biggest loss, average stake, and average odds to find strengths and weaknesses in your strategy.</li>
              </ul>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold">
                Learn More
              </button>
            </FeatureSection>

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
                  className="absolute -z-10 size-100 bg-secondary blur-3xl rounded-full"
                  style={{y}}
                />
                <motion.img
                  src={"/screen1.png"}
                  alt="BetTracker AI"
                  className={"object-cover absolute"}
                  style={{opacity: opacity1}}
                />
                <motion.img
                  src={"/screen2.png"}
                  alt="BetTracker AI"
                  className={"object-cover absolute"}
                  style={{opacity: opacity2}}
                />
                <motion.img
                  src={"/screen3.png"}
                  alt="BetTracker AI"
                  className={"object-cover absolute"}
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
  children: React.ReactNode;
}
function FeatureSection({scrollYProgress, thresholds, positions, opacities, children}:IFeatureSectionProps) {
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
      className="flex w-full flex-col px-10 absolute"
      style={{x, opacity}}
    >
      {children}
    </motion.div>
  )
}