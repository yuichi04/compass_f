import { FC, memo } from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";
import { FlexType, MarginType } from "../../types/styleTypes";
import FadeInOutBox from "./FadeInOutBox";
type Props = {
  children?: React.ReactNode;
  rootMargin?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  display?: "block" | "inline-block" | "flex";
} & MarginType &
  FlexType;

const ScrollAnimationBox: FC<Props> = memo(({ children, ...props }) => {
  const { rootMargin, triggerOnce, delay, duration } = props;
  const [ref, inView] = useInView({
    rootMargin: rootMargin ? `${rootMargin}px 0px` : "-150px 0px",
    triggerOnce: triggerOnce ? triggerOnce : false,
  });
  return (
    <Box component="div" ref={ref} {...props}>
      <FadeInOutBox fadeIn={inView} delay={delay} duration={duration}>
        {children}
      </FadeInOutBox>
    </Box>
  );
});

export default ScrollAnimationBox;
