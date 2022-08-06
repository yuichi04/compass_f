import React from "react";
import { Chip as MuiChip } from "@mui/material";

type Props = {
  label: string;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "medium" | "small";
  variant?: "filled" | "outlined";
  fontSize?: string;
};

const Chip: React.FC<Props> = React.memo((props) => {
  const { fontSize } = props;
  return <MuiChip {...props} sx={{ fontSize: fontSize }} />;
});

export default Chip;
