import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { TextFieldTypes } from "../../types/formTypes";

type Props = {
  options: {
    value: string;
    label: string;
  }[];
} & TextFieldTypes;

const SelectBox: React.FC<Props> = React.memo((props) => {
  const { options } = props;
  return (
    <TextField select {...props}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
});

export default SelectBox;
