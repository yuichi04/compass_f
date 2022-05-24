import { Typography } from "@mui/material";
import React from "react";

type Props = { children: React.ReactNode; className?: string };

const MuiTypographyBoldAccent: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { className } = props;
  return (
    <Typography className={className} variant="h5" component="span" fontWeight={600} color="primary.dark">
      {children}
    </Typography>
  );
});

export default MuiTypographyBoldAccent;
