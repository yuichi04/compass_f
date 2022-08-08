import { FC, memo } from "react";
// modules
import styled, { keyframes, css } from "styled-components";
import { Box, IconButton, Paper, Typography, Tooltip } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

type PositionType = {
  itemId: number;
  position: number;
  direction: "left" | "right" | "";
};

type Props = {
  children: React.ReactNode;
  classTitle: string;
  slideTitle: string;
  isFirst: boolean;
  isLast: boolean;
  close: () => void;
  next: () => void;
  previous: () => void;
} & PositionType;

const SlideListItem: FC<Props> = memo(({ children, ...props }) => {
  const { itemId, position, direction, classTitle, slideTitle, isFirst, isLast, next, previous, close } = props;

  return (
    <SSlideListItem itemId={itemId} position={position} direction={direction}>
      {/* スライドを閉じるボタン */}
      <Tooltip placement="left" title="演習に進む" arrow>
        <IconButton sx={{ position: "absolute", right: "8px", top: "8px" }} onClick={close}>
          <CancelIcon fontSize="large" />
        </IconButton>
      </Tooltip>

      <SHeader>
        <Box width="1280px" m="0 auto" color="typography.white">
          <Typography variant="h6">{classTitle}</Typography>
          <Typography variant="h4" fontWeight={600}>
            {slideTitle}
          </Typography>
        </Box>
      </SHeader>

      {/* スライドのコンテンツ */}
      <SContent>
        <Typography component="div" variant="h6" color="typography.black">
          {children}
        </Typography>
      </SContent>

      {/* （左矢印）最初のスライド以外は表示する */}
      {!isFirst && (
        <Box position="absolute" top="50%" left="8px" display="flex" alignItems="center">
          <Paper elevation={12} sx={styles.arrow.container} onClick={previous}>
            <ArrowLeftIcon sx={styles.arrow.icon} />
          </Paper>
        </Box>
      )}

      {/* （右矢印）最後のスライド以外は表示する */}
      {!isLast && (
        <Box position="absolute" top="50%" right="8px" display="flex" alignItems="center">
          <Paper elevation={12} sx={styles.arrow.container} onClick={next}>
            <ArrowForwardIosIcon sx={styles.arrow.icon} />
          </Paper>
        </Box>
      )}
    </SSlideListItem>
  );
});

export default SlideListItem;

// Material-UI
const styles = {
  arrow: {
    container: {
      bgcolor: "primary.main",
      borderRadius: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.3s",
      "&:hover": { cursor: "pointer", opacity: 0.9 },
    },
    icon: {
      fontSize: "50px",
      color: "secondary.main",
    },
  },
};

// Styled-Components
const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(0);
  }
  100% {
    opacity: 1;
    transform: translateX(-100%);
  }
`;

const slideOutRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    opacity: 0;
    transform: translate(0);
  }
`;
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;
const slideOutLeft = keyframes`
  0% {
    transform: translate(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

const toLeft = css<PositionType>`
  animation-name: ${(props) => (props.position < 0 ? slideOutLeft : props.position >= 0 ? slideInRight : "")};
  display: ${(props) => (props.position < -1 ? "none" : props.position >= 1 ? "none" : "")};
`;
const toRight = css<PositionType>`
  animation-name: ${(props) => (props.position > 0 ? slideOutRight : props.position <= 0 ? slideInLeft : "")};
  display: ${(props) => (props.position > 1 ? "none" : props.position <= -1 ? "none" : "")};
`;

const SSlideListItem = styled.div<PositionType>`
  position: relative;
  height: 100%;
  min-width: 100%;
  background: ${(props) => props.theme.palette.secondaryBackgroundColor.main};
  ${(props) => props.direction === "left" && toLeft};
  ${(props) => props.direction === "right" && toRight};
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`;

const SHeader = styled.div`
  background: ${(props) => props.theme.palette.primary.main};
  box-shadow: 0 1px 20px ${(props) => props.theme.palette.primary.dark};
  display: flex;
  align-items: center;
  height: 100px;
  padding: 16px 0;
`;

const SContent = styled.div`
  position: relative;
  width: 1280px;
  height: calc(100% - 132px); // 132px = SHeaderのheight(100px)とpadding(32px)の合計
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
