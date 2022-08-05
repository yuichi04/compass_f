import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import { MarginTypes, PositionTypes } from "../../types/styleTypes";

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction: "top" | "right" | "bottom" | "left";
  display?: "block" | "inline-block";
  distance: number;
  duration?: number;
  key?: number;
  position?: "relative" | "absolute";
} & MarginTypes &
  PositionTypes;

const SlideInBox: FC<Props> = memo(({ children, ...props }) => {
  return <SlideIn {...props}>{children}</SlideIn>;
});

export default SlideInBox;

const topOrBottom = keyframes`
100% {
    opacity: 1;
    transform: translateY(0);
}
`;
const leftOrRight = keyframes`
100% {
    opacity: 1;
    transform: translateX(0);
}
`;

const SlideIn = styled.div<Props>`
  position: ${(props) => props.position && props.position};
  top: ${(props) => props.t && props.t};
  right: ${(props) => props.r && props.r};
  bottom: ${(props) => props.b && props.b};
  left: ${(props) => props.l && props.l};
  animation-name: ${(props) => (props.direction === "top" || props.direction === "bottom" ? topOrBottom : leftOrRight)};
  animation-duration: ${(props) => (props.duration ? `${props.duration}s` : "0.5s")};
  animation-delay: ${(props) => (props.delay ? `${props.delay}s` : "0")};
  animation-timing-fuction: ease-in-out;
  animation-fill-mode: forwards;
  display: ${(props) => (props.display ? props.display : "block")};
  margin: ${(props) => props.m && props.m};
  margin-top: ${(props) => props.mt && props.mt};
  margin-right: ${(props) => props.mr && props.mr};
  margin-bottom: ${(props) => props.mb && props.mb};
  margin-left: ${(props) => props.ml && props.ml};
  opacity: 0;
  transform: ${(props) =>
    props.direction === "top"
      ? `translateY(-${props.distance}px)`
      : props.direction === "right"
      ? `translateX(${props.distance}px)`
      : props.direction === "bottom"
      ? `translateY(${props.distance}px)`
      : props.direction === "left"
      ? `translateX(-${props.distance}px)`
      : null};
`;
