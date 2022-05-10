import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: JSX.Element;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  label?: string;
  margin?: "dense" | "none" | "normal";
  maxRows?: number;
  minRows?: number;
  multiline?: boolean;
  required?: boolean;
  rows?: number;
  size?: "small" | "medium";
  type?: React.HTMLInputTypeAttribute;
  variant?: "standard" | "outlined" | "filled";
};

const MuiTextFieldWithAdornment: React.FC<Props> = React.memo(({ ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        startAdornment: <InputAdornment position="start">{props.icon}</InputAdornment>,
      }}
    />
  );
});

export default MuiTextFieldWithAdornment;