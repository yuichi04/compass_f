import { FC, memo } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

type Props = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2";
  color?: string;
  triangleColor: string;
  fontWeight?: number;
  children: React.ReactNode;
  mb?: string;
};

const TitleWithTriangle: FC<Props> = memo(({ children, ...props }) => {
  const { variant, color, triangleColor, fontWeight, mb } = props;
  return (
    <Typography variant={variant} color={color} fontWeight={fontWeight} mb={mb}>
      <STitle triangleColor={triangleColor ? triangleColor : "#555"}>{children}</STitle>
    </Typography>
  );
});

export default TitleWithTriangle;

const STitle = styled.span<Props>`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -32px;
    top: 50%;
    height: 24px;
    width: 24px;
    background: ${(props) => props.triangleColor};
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
    transform: translateY(-50%);
  }
`;
