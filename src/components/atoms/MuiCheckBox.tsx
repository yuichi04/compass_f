import React from "react";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "medium" | "small";
  checked?: boolean;
  color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  defaultChecked?: boolean;
};

const MuiCheckBox: React.FC<Props> = React.memo((props) => {
  return <Checkbox {...props} />;
});

export default MuiCheckBox;
