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
    <ScrollAnimationBox duration={1} triggerOnce>
      <Box display="flex" justifyContent="space-between" alignItems="center" {...props} width="100%">
        {images.map((image, index) => (
          <Paper key={index} elevation={16} sx={{ m: "0 16px" }}>
            <Box component="img" alt="slide-capture" src={image} width="100%" sx={{ verticalAlign: "bottom" }} />
          </Paper>
        ))}
      </Box>
    </ScrollAnimationBox>
  );
});

export default FeaturesViewList;
