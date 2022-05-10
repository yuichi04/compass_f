import React from "react";
import Chip from "@mui/material/Chip";

type Props = {
  label: string;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "medium" | "small";
  variant?: "filled" | "outlined";
};

const MuiChip: React.FC<Props> = React.memo((props) => {
  return <Chip {...props} />;
});

export default MuiChip;
