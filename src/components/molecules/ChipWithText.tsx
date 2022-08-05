import React from "react";
import styled from "styled-components";
import { Chip } from "../atoms";

type Props = {
  label: string;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "medium" | "small";
  variant?: "filled" | "outlined";
  text: string;
};

const ChipWithText: React.FC<Props> = React.memo(({ text, ...props }) => {
  return (
    <SFlex>
      <Chip {...props} />
      <SText>{text}</SText>
    </SFlex>
  );
});

export default ChipWithText;

const SFlex = styled.div`
  display: flex;
  align-items: center;
`;

const SText = styled.p`
  font-weight: bold;
  margin-left: 8px;
`;
