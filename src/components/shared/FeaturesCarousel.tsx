"use client"

import {AnimatePresence, motion, PanInfo} from "framer-motion";
import {useState, useEffect, useRef, FC, Dispatch, SetStateAction} from "react";
import {TFeature} from "@/types/common";
import {cn} from "@/lib/utils";

interface IProps {
  itemsData: TFeature[];
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
}

const FeaturesCarousel:FC<IProps> = ({itemsData, currentSlide, setCurrentSlide}) => {
  const [[activeIndex, direction], setActiveIndex] = useState([-1, 0]);
  const parentRef = useRef<HTMLDivElement|null>(null)
  const wrapperRef = useRef<HTMLDivElement|null>(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const itemsLength = itemsData?.length || 0
  const indexInArrayScope = ((activeIndex % itemsLength) + itemsLength) % itemsLength;

  const visibleItems = [...itemsData, ...itemsData].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    setCurrentSlide((indexInArrayScope + 1) % itemsLength)
  },[indexInArrayScope,itemsLength,setCurrentSlide])

  useEffect(() => {
    const slideIndex = isNaN(currentSlide) ? 0 : currentSlide
    setActiveIndex([slideIndex-1,0])
  },[currentSlide])

  const handleClick = (newDirection:number) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // Determine if drag was significant enough to trigger a slide
    const dragThreshold = 100; // pixels
    if (Math.abs(info.offset.x) > dragThreshold) {
      // Determine direction based on drag
      const dragDirection = info.offset.x > 0 ? -1 : 1;
      handleClick(dragDirection);
    }
  };

  return (
    <div
      className="flex items-center relative justify-center w-full"
      ref={parentRef}
    >
      <div className="flex m-5 overflow-hidden justify-center" ref={wrapperRef}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visibleItems.map((item, i) => {
            const isLeft = item === visibleItems[0]
            const isCenter = item === visibleItems[1]
            const isRight = item === visibleItems[2]

            return (
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragMomentum={false} // Disable momentum to prevent unintended slides
                dragElastic={0.5}
                onDragEnd={handleDragEnd}
                className={cn(
                  "relative h-[50vh] min-w-[50vw] md:min-w-[40vw] bg-grey-1 border border-white/10 rounded-2xl text-white",
                  "p-6 md:p-10 flex flex-col justify-center gap-5 md:gap-10",
                  {"cursor-pointer": !isCenter}
                )}
                key={item.title}
                layout
                custom={{
                  direction,
                  position: () => isLeft ? 'left' : isRight ? 'right' : 'center',
                  wrapperWidth
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{duration: .5}}
                onClick={() => handleClick(isLeft ? -1 : isRight ? 1 : 0)}
                id={`item-${i}`}
              >
                <div className="flex justify-center [&_svg]:size-16 md:[&_svg]:size-20 [&_svg]:text-secondary">
                  {item.icon}
                </div>
                <h4 className={"text-xl md:text-3xl text-center"}>{item.title}</h4>
                <p className={"text-center text-md md:text-xl leading-xl"}>{item.description}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

// const sideOffset = 100
const variants = {
  enter: ({direction, wrapperWidth}:{direction:number,wrapperWidth:number,}) => {
    const sideOffset = wrapperWidth / 3 / 2;
    return {
      scale: 0.2,
      x: direction < 1 ? sideOffset : -sideOffset,
      opacity: 0
    };
  },
  center: ({position, direction, wrapperWidth}:{position:()=>"left"|"right"|"center", direction:number, wrapperWidth:number}) => {
    const sideOffset = wrapperWidth / 3 / 2;
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: position() === "left" ? sideOffset : position() === "right" ? -sideOffset : 0,
      zIndex: getZIndex({position, direction}),
      opacity: position() === "center" ? 1 : 0.7,
    };
  },
  exit: () => {
    return {scale: 0.2, opacity: 0};
  }
}

function getZIndex({position, direction}:{position:()=>"left"|"right"|"center", direction:number}) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2
  };
  return indexes[position()];
}

export default FeaturesCarousel;
