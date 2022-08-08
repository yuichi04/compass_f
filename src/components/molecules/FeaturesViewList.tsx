import { FC, memo } from "react";
import { Box, Paper } from "@mui/material";
import { MarginType } from "../../types/styleTypes";
import ScrollAnimationBox from "./ScrollAnimationBox";

type Props = {
  images: string[];
} & MarginType;

const FeaturesViewList: FC<Props> = memo((props) => {
  const { images } = props;

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" {...props}>
      {images.map((image, index) => (
        <ScrollAnimationBox key={index} delay={index / 2} duration={1} triggerOnce>
          <Paper elevation={16} sx={{ width: "608px" }}>
            <Box component="img" alt="slide-capture" src={image} width="100%" sx={{ verticalAlign: "bottom" }} />
          </Paper>
        </ScrollAnimationBox>
      ))}
    </Box>
  );
});

export default FeaturesViewList;
