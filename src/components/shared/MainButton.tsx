import React, {FC} from 'react';
import {motion} from "framer-motion";

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const MainButton: FC<IProps> = ({children, onClick}) => {
  return (
    <motion.button
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      className="bg-secondary text-dark px-8 py-3 rounded-full font-semibold text-lg cursor-pointer"
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </motion.button>
  );
};

export default MainButton;