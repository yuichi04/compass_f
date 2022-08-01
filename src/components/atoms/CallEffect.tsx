import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const CallEffect: FC = memo(() => {
  return (
    <SCallEffect>
      <SCallScaleUpDown>
        <PhoneInTalkIcon sx={{ width: "100%", height: "100%", color: "#fff" }} />
      </SCallScaleUpDown>
    </SCallEffect>
  );
});

export default CallEffect;

const pulsate = keyframes`
  0% {
    border: 3px solid #ffa726;
  }
  100% {
    border: 1px solid #ffa726;
    transform: scale(2);
    opacity: 0;
  }
`;

const callScaleUpDown = keyframes`
  20% {
    transform: scale(1.1) rotate(3deg);
  }
  40% {
    transform: scale(1.2) rotate(-6deg);
  }
  60% {
    transform: scale(1.3) rotate(3deg);
  }
  80% {
    transform: scale(1.4) rotate(-6deg);
  }
`;

const SCallScaleUpDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${callScaleUpDown} 1s linear infinite;
`;

const SCallEffect = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  padding: 32px;
  border-radius: 50%;
  background-color: #ffa726;
  box-shadow: 0 0 80px #ffa726;

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

    border-radius: 50%;
    box-sizing: border-box;
    pointer-events: none;
    animation: ${pulsate} 2s linear infinite;
  }

  &::after {
    animation-delay: 1s;
  }
`;
