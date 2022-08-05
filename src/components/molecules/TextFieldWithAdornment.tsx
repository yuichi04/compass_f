import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { TextFieldTypes } from "../../types/formTypes";

type Props = {
  icon: JSX.Element | boolean;
  position?: "start" | "end";
} & TextFieldTypes;

const TextFieldWithAdornment: React.FC<Props> = React.memo(({ ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={
        props.position === "end"
          ? {
              endAdornment: <InputAdornment position={"start"}>{props.icon}</InputAdornment>,
            }
          : {
              startAdornment: <InputAdornment position={"start"}>{props.icon}</InputAdornment>,
            }
      }
    />
  );
});

export default TextFieldWithAdornment;
