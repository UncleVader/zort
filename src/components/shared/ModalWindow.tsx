import React, {Dispatch, FC, SetStateAction} from 'react';
import {motion, AnimatePresence} from 'framer-motion';


interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}

const ModalWindow:FC<IProps> = (props) => {
  const {isOpen, setIsOpen, title, children} = props;

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-xs flex items-center justify-center z-50"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-grey-1 w-full max-w-md max-h-[90vh] p-6 rounded-lg shadow-lg relative border border-white/10 overflow-y-auto"
              initial={{scale: 0.9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              exit={{scale: 0.9, opacity: 0}}
              transition={{duration: 0.3}}
            >
              <button
                onClick={toggleModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-white text-3xl cursor-pointer"
              >
                &times;
              </button>
              <h2 className="text-lg font-semibold mb-4">{title}</h2>
              <>
                {children}
              </>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalWindow;