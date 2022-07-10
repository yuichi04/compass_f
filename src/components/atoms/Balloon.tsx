import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Balloon: React.FC<Props> = React.memo(({ children }) => {
  return <SBalloon>{children}</SBalloon>;
});

export default Balloon;

const fadeInAnime = keyframes`
  from {
    opacity: 0;
    transform : translateY(10px);
  }
  to {
    opacity: 1;
  }

`;

const SBalloon = styled.div`
  position: relative;
  border: 1px solid #999;
  background: #f3ecda;
  border-radius: 8px;
  padding: 8px 12px;
  text-align: left;
  animation-name: ${fadeInAnime};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 1;
  word-break: break-all;

  &:before {
    content: "";
    position: absolute;
    left: -42px;
    width: 13px;
    height: 12px;
    bottom: -12px;
    background: #f9fbe7;
    border: 1px solid #999;
    box-shadow: 0 0 24px #bbb;
    border-radius: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    left: -24px;
    width: 20px;
    height: 18px;
    background: #f9fbe7;
    border: 1px solid #999;
    box-shadow: 0 0 24px #bbb;
    bottom: -6px;
    border-radius: 50%;
  }
`;
