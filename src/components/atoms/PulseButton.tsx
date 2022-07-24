import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const PulseButton: FC = memo(() => {
  return (
    <SPulseButton>
      <SendIcon sx={{ color: "#fff", fontSize: "20px" }} />
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

const SPulseButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #00aa99;
  box-shadow: 0 0 20px #00aa99;
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
    border: 1px solid #00aa99;
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
