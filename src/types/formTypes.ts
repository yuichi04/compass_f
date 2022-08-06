import { SxProps } from "@mui/material";

export type TextFieldTypes = {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  disabled?: boolean;
  defaultValue?: string;
  error?: boolean;
  fullWidth?: boolean;
  InputProps?: {};
  label?: string;
  margin?: "dense" | "none" | "normal";
  maxRows?: number;
  minRows?: number;
  multiline?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  select?: boolean;
  size?: "medium" | "small";
  type?: React.HTMLInputTypeAttribute;
  variant?: "filled" | "outlined" | "standard";
  value: string;
};

export type ButtonTypes = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "button";
  variant?: "text" | "outlined" | "contained";
  sx?: SxProps;
};
