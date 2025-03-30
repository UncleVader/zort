import {useMediaQuery} from "react-responsive";

export const useResponsive = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  return {
    isDesktop
  };
};