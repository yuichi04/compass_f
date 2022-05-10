import React from "react";
import Container from "@mui/material/Container";
import { theme } from "../../assets/theme";

type Props = {
  children: React.ReactNode;
};

const MuiContaier: React.FC<Props> = React.memo(({ children }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        boxShadow: "0 0 12px #ccc",
        padding: "32px",
        [theme.breakpoints.down("sm")]: {
          padding: "16px",
        },
      }}
    >
      {children}
    </Container>
  );
});

export default MuiContaier;
