import { Typography } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";

type StyleProps = {
  background?: string;
};

type Props = {
  children: React.ReactNode;
  title?: string;
} & StyleProps;

const Balloon: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { title, background } = props;
  return (
    <SBalloon background={background}>
      {title && <Typography variant="h6">{title}</Typography>}
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
    transform : translateX(-15px);
  }
  to {
    opacity: 1;
  }

`;

const SBalloon = styled.div<StyleProps>`
  position: relative;
  background: #fff;
  box-shadow: 0 2px 6px #999;
  border-radius: 24px;
  padding: 16px 24px;
  text-align: center;
  animation-name: ${fadeInAnime};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  opacity: 0;
  margin-bottom: 4px;

  &:before {
    content: "";
    position: absolute;
    left: -40px;
    width: 13px;
    height: 12px;
    bottom: 0;
    background: #fff;
    box-shadow: 0 2px 6px #999;
    border-radius: 50%;
  }

  &:after {
    content: "";
    position: absolute;
    left: -24px;
    width: 20px;
    height: 18px;
    background: #fff;
    box-shadow: 0 2px 6px #999;
    bottom: 3px;
    border-radius: 50%;
  }
`;
