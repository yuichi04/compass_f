import React from "react";
import TextField from "@mui/material/TextField";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  error?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  label?: string;
  margin?: "dense" | "none" | "normal";
  maxRows?: number;
  minRows?: number;
  multiline?: boolean;
  required?: boolean;
  rows?: number;
  size?: "medium" | "small";
  type?: React.HTMLInputTypeAttribute;
  variant?: "filled" | "outlined" | "standard";
};

const MuiTextField: React.FC<Props> = React.memo(({ ...props }) => {
  return <TextField {...props} />;
});

export default MuiTextField;
