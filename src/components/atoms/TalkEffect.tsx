import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";

const TalkEffect: FC = memo(() => {
  return (
    <STalkEffect>
      <STalkScaleUpDown>
        <RecordVoiceOverIcon sx={{ width: "100%", height: "100%", color: "#fff" }} />
      </STalkScaleUpDown>
    </STalkEffect>
  );
});

export default TalkEffect;

const pulsate = keyframes`
  0% {
    border: 2px solid #42a5f5;
    transform: scale(1);
    opacity: 1;
  }
  100% {
    border: 1px solid #42a5f5;
    transform: scale(1.5);
    opacity: 0;
  }
`;

const talkScaleUpDown = keyframes`
80% {
  transform: scale(1.1);
}
`;

const STalkScaleUpDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${talkScaleUpDown} 1s linear infinite;
`;

const STalkEffect = styled.div`
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

    border-radius: 50%;
    box-sizing: border-box;
    pointer-events: none;
    animation: ${pulsate} 2s linear infinite;
  }

  &::after {
    animation-delay: 1s;
  }
`;
