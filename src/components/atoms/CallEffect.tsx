import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const CallEffect: FC = memo(() => {
  return (
    <SCallEffect>
      <PhoneInTalkIcon className="scale-up-down" sx={{ width: "100%", height: "100%", color: "#fff" }} />
    </SCallEffect>
  );
});

export default CallEffect;

const pulsate = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
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
  background-color: #42a5f5;
  box-shadow: 0 0 80px #42a5f5;

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
    border: 1px solid #42a5f5;
    border-radius: 50%;
    box-sizing: border-box;
    pointer-events: none;
    animation: ${pulsate} 2s linear infinite;
  }

  &::after {
    animation-delay: 1s;
  }
`;
