import React, { FC, memo } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { MarginType } from "../../types/styleTypes";

type Props = {
  variant?: "body2" | "body1" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2";
  children?: React.ReactNode;
  color?: string;
  fontWeight?: number;
} & MarginType;

const TitleWithTriangleIcon: FC<Props> = memo(({ children, ...props }) => {
  const { variant, color, fontWeight, mb } = props;
  return (
    <Typography variant={variant} color={color} fontWeight={fontWeight} mb={mb}>
      <STitle>{children}</STitle>
    </Typography>
  );
});

export default TitleWithTriangleIcon;

const STitle = styled.span`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -32px;
    top: 50%;
    height: 24px;
    width: 24px;
    background: ${(props) => props.theme.palette.info.main};
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
    transform: translateY(-50%);
  }
`;
