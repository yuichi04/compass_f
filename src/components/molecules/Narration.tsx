import { FC, memo } from "react";
import { Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ScreenForBlackoutEvent } from ".";
import { FadeInOutBox } from ".";
import { PulseButton } from "../atoms";

type Props = {
  text: string;
  contentWidth?: string;
  contentHeight?: string;
  open: boolean;
  handleClose: () => void;
};

const Narration: FC<Props> = memo((props) => {
  const { open, handleClose, contentWidth, contentHeight, text } = props;
  return (
    <ScreenForBlackoutEvent open={open} bgcolor="dark" animationType="path-center">
      <FadeInOutBox fadeIn={open} duration={1}>
        <Box position="absolute" top="64px" right="64px">
          <PulseButton autoEffect size="40px" bgcolor="#eee" onClick={handleClose}>
            <CloseIcon sx={{ color: "typography.gray", fontSize: "32px" }} />
          </PulseButton>
        </Box>
        <Box
          id="narration"
          width={contentWidth ? contentWidth : "900px"}
          height={contentHeight && contentHeight}
          m="0 auto"
          textAlign="center"
        >
          <FadeInOutBox fadeIn={open} duration={1} delay={0.3}>
            <Typography variant="h3" color="typography.white" sx={{ textShadow: "0 0 2px #ccc" }}>
              {text}
            </Typography>
          </FadeInOutBox>
        </Box>
      </FadeInOutBox>
    </ScreenForBlackoutEvent>
  );
});

export default Narration;
