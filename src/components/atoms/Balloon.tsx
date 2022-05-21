import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

type StyleProps = {
  background?: string;
};

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
} & StyleProps;

const Balloon: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { className, title, background } = props;
  return (
    <SBalloon className={className} background={background}>
      {title && <Typography variant="h6">{title}</Typography>}
      <Typography fontWeight={600}>{children}</Typography>
    </SBalloon>
  );
});

export default Balloon;

const SBalloon = styled.div<StyleProps>`
  position: relative;
  background: ${(props) => props.background};
  border-radius: 24px;
  box-shadow: 0 0 3px #ccc;
  padding: 16px 24px;

  &:before {
    content: "";
    position: absolute;
    left: -40px;
    width: 13px;
    height: 12px;
    bottom: 0;
    background: ${(props) => props.background};
    border-radius: 50%;
    box-shadow: 1px 3px 6px #bbb;
  }

  &:after {
    content: "";
    position: absolute;
    left: -24px;
    width: 20px;
    height: 18px;
    bottom: 3px;
    background: ${(props) => props.background};
    border-radius: 50%;
    box-shadow: 1px 3px 6px #bbb;
  }
`;
