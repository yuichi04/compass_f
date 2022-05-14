import React from "react";
import Container from "@mui/material/Container";
import { theme } from "../../assets/theme";

type Props = {
  children: React.ReactNode;
  maxWidth: "sm" | "md" | "lg";
};

const style = {
  minHeight: "calc(100vh - 192px)",
  padding: "32px",
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
};

const MuiContaier: React.FC<Props> = React.memo(({ children, ...props }) => {
  return (
    <Container {...props} sx={style}>
      {children}
    </Container>
  );
});

export default MuiContaier;
