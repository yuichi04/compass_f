import { Typography } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Balloon: React.FC<Props> = React.memo(({ children }) => {
  return (
    <SBalloon>
      <Typography fontWeight={600} component="div" color="text.secondary">
        {children}
      </Typography>
    </SBalloon>
  );
});

export default Balloon;

const fadeInAnime = keyframes`
  from {
    opacity: 0;
    transform : translateX(-10px);
  }
  to {
    opacity: 1;
  }

`;

const SBalloon = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 0 24px #bbb;
  border-radius: 24px;
  padding: 16px;
  text-align: center;
  animation-name: ${fadeInAnime};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-bottom: 4px;
  word-break: break-all;

  &:before {
    content: "";
    position: absolute;
    left: -42px;
    width: 13px;
    height: 12px;
    bottom: -12px;
    background: #fff;
    box-shadow: 0 0 24px #bbb;
    border-radius: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    left: -24px;
    width: 20px;
    height: 18px;
    background: #fff;
    box-shadow: 0 0 24px #bbb;
    bottom: -6px;
    border-radius: 50%;
  }
`;
