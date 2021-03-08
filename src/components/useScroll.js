import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = margin => {
  const controls = useAnimation();

  //treshold je dio ciljanog elementa, kada margin (0.25 i 0.5) bude u view
  //započni animaciju
  const [element, view] = useInView({ threshold: margin });

  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
