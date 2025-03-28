import React, {FC} from 'react';
import {motion} from "framer-motion";
import {cn} from "@/lib/utils";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MainButton: FC<IProps> = ({children, onClick,className}) => {
  return (
    <motion.button
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      className={cn("bg-secondary text-dark px-8 py-3 rounded-full font-semibold text-lg cursor-pointer",className)}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </motion.button>
  );
};

export default MainButton;