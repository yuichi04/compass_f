import React from "react";
import { Chip as MuiChip } from "@mui/material";

type Props = {
  label: string;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "medium" | "small";
  variant?: "filled" | "outlined";
};

const Chip: React.FC<Props> = React.memo((props) => {
  return <MuiChip {...props} />;
});

export default Chip;
