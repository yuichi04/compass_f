import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  open: boolean;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
};

const ScreenForBlackoutEvent: FC<Props> = memo(({ children, ...props }) => {
  return (
    <Screen {...props}>
      <div>{children}</div>
    </Screen>
  );
});

export default ScreenForBlackoutEvent;

const fadeIn = keyframes`
  0% {
    opacity:0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity:1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
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
  background: radial-gradient(circle, rgba(33, 33, 33, 0.9) 25%, rgba(55, 55, 55, 0.9));
  animation-name: ${(props) => (props.open ? fadeIn : fadeOut)};
  animation-delay: ${(props) => (props.delay ? `${props.delay}s` : "0s")};
  animation-duration: ${(props) => (props.duration ? `${props.duration}s` : "0.5s")};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity: ${(props) => (props.open ? 0 : 1)};
`;
