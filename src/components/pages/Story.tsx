import React from "react";
import styled, { keyframes } from "styled-components";
import { BackgroundImage } from "../../assets/images/background";
import { CharacterGuideImages } from "../../assets/images/character/guide";
import { StoryContainer } from "../layouts";

const Story: React.FC = React.memo(() => {
  return (
    <SBackground>
      <StoryContainer>
        <SInner>
          <STitle>
            第一章
            <br />
            「説明の種類を知ろう」
          </STitle>
          <SCharacter>
            <img src={CharacterGuideImages.normal} alt="character" />
          </SCharacter>
        </SInner>
      </StoryContainer>
    </SBackground>
  );
});

export default Story;

const SBackground = styled.div`
  background: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  height: calc(100vh - 60px);
  z-index: -999;

  //   &:before {
  //     z-index: 999;
  //     position: absolute;
  //     content: "";
  //     width: 50%;
  //     height: 100%;
  //     background: red;
  //   }
  //   &:after {
  //     z-index: 999;
  //     position: absolute;
  //     content: "";
  //     width: 50%;
  //     height: 100%;
  //     background: blue;
  //     right: 0;
  //     top: 0;
  //   }
`;

const move = keyframes`
  0%   { tpo: 0; }
  50%  { top: 30px; }
  100% { top:  0; }
`;

const SCharacter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  //   animation-name: ${move};
  animation-duration: 8s;
  animation-iteration-count: infinite;

  img {
    height: 100%;
  }
`;

const SInner = styled.div`
  position: relative;
  //   background: url(${BackgroundImage.blackboard});
  background-size: cover;
  background-repeast: no-repeat;
  height: calc(100vh - 90px);
`;

const STitle = styled.h1`
  z-index: 999;
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-25%, -50%);
  font-size: 64px;
  color: #fff;
`;
