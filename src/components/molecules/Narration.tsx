import { FC, memo } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ScreenForBlackoutEvent } from ".";
import FadeInOutBox from "./FadeInOutBox";

type Props = {
  children: React.ReactNode;
  contentWidth?: string;
  contentHeight?: string;
  open: boolean;
  handleClose: () => void;
};

const Narration: FC<Props> = memo(({ children, ...props }) => {
  const { open, handleClose, contentWidth, contentHeight } = props;
  return (
    <ScreenForBlackoutEvent open={open} bgcolor="dark" animationType="path-center">
      <FadeInOutBox fadeIn={open} duration={1} delay={0.5}>
        <Box position="absolute" top="64px" right="64px">
          <IconButton onClick={handleClose} sx={{ bgcolor: "rgba(200,255,255,0.1)" }}>
            <CloseIcon sx={{ color: "#fff", fontSize: "40px" }} />
          </IconButton>
        </Box>
        <Box width={contentWidth ? contentWidth : "900px"} height={contentHeight && contentHeight} m="0 auto">
          {open && (
            <Typography className="path-left" variant="h3" color="#fff" letterSpacing={1.5} textAlign="center">
              {children}
            </Typography>
          )}
        </Box>
      </FadeInOutBox>
    </ScreenForBlackoutEvent>
  );
});

export default Narration;
