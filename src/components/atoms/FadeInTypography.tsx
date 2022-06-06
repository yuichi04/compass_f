import { Typography } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";

type StyleProps = {
  background?: string;
  delay: number;
};

type Props = {
  children: React.ReactNode;
} & StyleProps;

const FadeInTypography: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { delay } = props;
  return (
    <SFadeInTypography delay={delay}>
      <Typography fontWeight={600} component="div" variant="subtitle1">
        {children}
      </Typography>
    </SFadeInTypography>
  );
});

export default FadeInTypography;

const fadeInAnime = keyframes`
  from {
    opacity: 0;
    transform : translateY(2px);
  }
  to {
    opacity: 1;
  }

`;

const SFadeInTypography = styled.div<StyleProps>`
  animation-name: ${fadeInAnime};
  animation-duration: 1s;
  animation-delay: ${(props) => props.delay / 2 + props.delay + 1}s;
  animation-fill-mode: forwards;
  opacity: 0;
`;
