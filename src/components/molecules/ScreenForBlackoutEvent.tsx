import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  animationType?: "fade-in" | "slide-in" | "path-center";
  bgcolor?: "light" | "main" | "dark";
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  open: boolean;
};

const ScreenForBlackoutEvent: FC<Props> = memo(({ children, ...props }) => {
  return (
    <Screen {...props}>
      <div>{children}</div>
    </Screen>
  );
});

export default ScreenForBlackoutEvent;

// 円形に拡大・縮小するアニメーション
const expandCenter = keyframes`
 0% {
   opacity: 0;
   clip-path: circle(0 at 50% 50%);
 }
 100% {
   opacity: 1;
   clip-path: circle(100% at 50% 50%);
 }
`;
const contractCenter = keyframes`
  0% {
    opacity: 1;
    clip-path: circle(100% at 50% 50%);
  }
  100% {
    opacity: 0;
    clip-path: circle(0 at 50% 50%);
  }
`;

// スライドイン・アウト
const slideIn = keyframes`
  0% {
    opacity:0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const slideOut = keyframes`
  0% {
    opacity:1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

// フェードイン・アウト
const fadeIn = keyframes`
  0% {
    opacity:0;
    transform: translateY(-100%);
  }
  1% {
    transform: translateY(0);
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity:1;
  }
  99% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const Screen = styled.div<Props>`
  z-index: 999;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.bgcolor === "light"
      ? props.theme.palette.primaryCircleGradation.black.light
      : props.bgcolor === "dark"
      ? props.theme.palette.primaryCircleGradation.black.dark
      : props.theme.palette.primaryCircleGradation.black.main};
  animation-name: ${(props) =>
    props.animationType === "slide-in"
      ? props.open
        ? slideIn
        : slideOut
      : props.animationType === "path-center"
      ? props.open
        ? expandCenter
        : contractCenter
      : props.open
      ? fadeIn
      : fadeOut};
  animation-delay: ${(props) => (props.delay ? `${props.delay}s` : "0s")};
  animation-duration: ${(props) => (props.duration ? `${props.duration}s` : "0.5s")};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity: ${(props) => (props.open ? 0 : 1)};
`;
