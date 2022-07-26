import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  size: string;
  color: string;
  children: React.ReactNode;
};

const PulseButton: FC<Props> = memo(({ children, ...props }) => {
  const { size, color } = props;
  return (
    <SPulseButton size={size} color={color}>
      {children}
    </SPulseButton>
  );
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

const SPulseButton = styled.button<Props>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background: ${(props) => props.color};
  box-shadow: 0 0 20px ${(props) => props.color};
  cursor: pointer;
  transition: all 0.2s;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    border: 1px solid ${(props) => props.color};
    border-radius: 50%;
    box-sizing: border-box;
    pointer-events: none;
    animation: ${pulsate} 2s linear infinite;
  }

  &::after {
    animation-delay: 1s;
  }

  &:hover {
    opacity: 0.8;
  }
`;
