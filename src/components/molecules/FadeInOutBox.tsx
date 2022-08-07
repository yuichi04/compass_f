import React, { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import { FlexType, PositionType } from "../../types/styleTypes";

type Props = {
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
  position?: "relative" | "absolute";
  center?: boolean;
  fadeIn: boolean;
  duration?: number;
  delay?: number;
  display?: "block" | "inline-block" | "flex";
} & PositionType &
  FlexType;

const FadeInOutBox: FC<Props> = memo(({ children, ...props }) => {
  return <FadeInOut {...props}>{children}</FadeInOut>;
});

export default FadeInOutBox;

const fadeIn = keyframes`
  100% {
    opacity:1;
  }
`;

const fadeOut = keyframes`
  100% {
    opacity:0;
  }
`;

const FadeInOut = styled.div<Props>`
  position: ${(props) => props.position && props.position};
  top: ${(props) => props.t && props.t};
  right: ${(props) => props.r && props.r};
  bottom: ${(props) => props.b && props.b};
  left: ${(props) => props.l && props.l};
  ${(props) => props.center && "transform: translate(-50%, -50%)"};
  display: ${(props) => props.display && props.display};
  flex-direction: ${(props) => props.flexDirection && props.flexDirection};
  justify-content: ${(props) => props.justifyContent && props.justifyContent};
  align-items: ${(props) => props.alignItems && props.alignItems};
  animation-name: ${(props) => (props.fadeIn ? fadeIn : fadeOut)};
  animation-delay: ${(props) => (props.delay ? `${props.delay}s` : "0")};
  animation-duration: ${(props) => (props.duration ? `${props.duration}s` : "0.5s")};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;
`;
