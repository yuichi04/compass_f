import React from "react";
import Button from "@mui/material/Button";
import { ButtonTypes } from "../../types/formTypes";

type Props = ButtonTypes;

const PrimaryButton: React.FC<Props> = React.memo(({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
});

export default PrimaryButton;
