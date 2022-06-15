import React from "react";
import { MenuItem, TextField } from "@mui/material";

type Props = {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  fullWidth?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
};

const SelectBox: React.FC<Props> = React.memo((props) => {
  const { options, label, fullWidth, onChange, category } = props;
  return (
    <TextField select label={label} variant="outlined" value={category} onChange={onChange} fullWidth={fullWidth}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
});

export default SelectBox;
