import React from "react";
import { Typography } from "@mui/material";
import styled, { css } from "styled-components";

type StyleProps = {
  direction?: "top" | "center" | "bottom";
};

type Props = {
  children: React.ReactNode;
} & StyleProps;

const Balloon: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { direction } = props;
  return (
    <SBalloon direction={direction}>
      <Typography>{children}</Typography>
    </SBalloon>
  );
});

export default Balloon;

const top = css`
  top: 32px;
  margin-left: -16px;
  border-right: 48px solid #e0edff;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  transform: rotate(-30deg);
`;

const center = css`
  top: 50%;
  margin-left: -16px;
  border-right: 48px solid #e0edff;
  border-top: 24px solid transparent;
  border-bottom: 24px solid transparent;
  transform: translateY(-50%);
`;

const SBalloon = styled.div<StyleProps>`
  position: relative;
  display: inline-block;
  padding: 16px 32px;
  background: #e0edff;
  border-radius: 15px;
  word-break: break-all;
  
  &:before {
    content: "";
    position: absolute;
    left: -16px;
    ${(props) => props.direction === "top" && top}
    ${(props) => props.direction === "center" && center}
    ${(props) => props.direction === "top" && top}
  
`;
