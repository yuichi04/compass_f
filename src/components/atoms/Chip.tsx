import React from "react";
// Modules
import { Chip as MuiChip } from "@mui/material";
// Types
import { PaddingType } from "../../types/styleTypes";

type Props = {
  label: string;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "medium" | "small";
  variant?: "filled" | "outlined";
  fontSize?: string;
} & PaddingType;

const Chip: React.FC<Props> = React.memo((props) => {
  const { fontSize, p } = props;
  return <MuiChip {...props} sx={{ fontSize: fontSize, p: p }} />;
});

export default Chip;
