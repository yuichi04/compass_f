import { FC, memo } from "react";
// Modules
import styled, { keyframes, css } from "styled-components";
import { Box, Typography } from "@mui/material";

type PositionType = {
  position: number;
  direction: "left" | "right" | "";
};

type Props = {
  children: React.ReactNode;
  slideTitle: string;
} & PositionType;

const SlideListItem: FC<Props> = memo(({ children, ...props }) => {
  const { position, direction, slideTitle } = props;

  return (
    <SSlideListItem position={position} direction={direction}>
      {/* ヘッダー */}
      <SHeader>
        <Box width="1280px" m="0 auto" color="typography.white">
          <Box component="div" height="24px" />
          <Typography variant="h4" fontWeight={600}>
            {slideTitle}
          </Typography>
        </Box>
      </SHeader>

      {/* コンテンツ */}
      <SContent>
        <Typography component="div" variant="h6" color="typography.black">
          {children}
        </Typography>
      </SContent>
    </SSlideListItem>
  );
});

export default SlideListItem;

// Styled-Components
const slideInRight = keyframes`
  0% {
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
  75% {
    opacity: 0;
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
  ${(props) => props.direction === "left" && toLeft};
  ${(props) => props.direction === "right" && toRight};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`;

const SHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 16px 0;
`;

const SContent = styled.div`
  position: relative;
  width: 1280px;
  height: calc(100% - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
