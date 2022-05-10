import React from "react";
import Button from "@mui/material/Button";

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
};

const MuiButton: React.FC<Props> = React.memo(({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
});

export default MuiButton;
