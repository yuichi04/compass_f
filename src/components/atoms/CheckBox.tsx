import React from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "medium" | "small";
  checked?: boolean;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  defaultChecked?: boolean;
};

const CheckBox: React.FC<Props> = React.memo((props) => {
  return <MuiCheckbox {...props} />;
});

export default CheckBox;
