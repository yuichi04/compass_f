import { Typography } from "@mui/material";
import React from "react";

type Props = { children: React.ReactNode };

const MuiTypographyDiv: React.FC<Props> = React.memo(({ children }) => {
  return (
    <Typography variant="h6" component="div" sx={{ color: "#454d44" }}>
      {children}
    </Typography>
  );
});

export default MuiTypographyDiv;
