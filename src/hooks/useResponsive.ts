import {useMediaQuery} from "react-responsive";

export const useResponsive = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const isSmallScreen = useMediaQuery({
    query: '(max-width: 768px)'
  })

  return {
    isDesktop,
    isSmallScreen
  };
};