import { FC, memo } from "react";
import { useInView } from "react-intersection-observer";
import { Box, Paper } from "@mui/material";
import { MarginType } from "../../types/styleTypes";
import FadeInOutBox from "./FadeInOutBox";

type Props = {
  images: string[];
} & MarginType;

const FeaturesViewList: FC<Props> = memo((props) => {
  const { images } = props;
  const [ref, inView] = useInView({
    rootMargin: "0px 0px",
    triggerOnce: true,
  });

  return (
    <Box ref={ref} display="flex" justifyContent="space-between" alignItems="center" {...props}>
      {images.map((image, index) => (
        <FadeInOutBox fadeIn={inView} key={index} delay={index / 2}>
          <Paper elevation={8} sx={{ width: "608px", border: "2px solid", borderColor: "info.main" }}>
            <Box component="img" alt="slide-capture" src={image} width="100%" sx={{ verticalAlign: "bottom" }} />
          </Paper>
        </FadeInOutBox>
      ))}
    </Box>
  );
});

export default FeaturesViewList;
