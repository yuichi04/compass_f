import { FC, memo } from "react";
import styled, { css, keyframes } from "styled-components";

type Props = {
  autoEffect?: boolean;
  size: string;
  bgcolor: string;
  color?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const PulseButton: FC<Props> = memo(({ children, ...props }) => {
  return <SPulseButton {...props}>{children}</SPulseButton>;
});

export default PulseButton;

const pulsate = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const animationCSS = css<Props>`
  &::before,
  &::after {
    content: "";
    display: ${(props) => (props.disabled ? "none" : "block")};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.bgcolor};
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${pulsate} 2s linear infinite;
  }

  &::after {
    animation-delay: 1s;
  }
`;

const hovered = css`
  &:hover {
    ${animationCSS};
  }
`;

const SPulseButton = styled.button<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: ${(props) => props.bgcolor};
  box-shadow: 0 0 20px ${(props) => props.bgcolor};
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) => props.color};
  ${(props) => props.disabled && "opacity: 0.3"};
  ${(props) => (props.autoEffect ? animationCSS : hovered)}
`;
