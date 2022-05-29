import { Typography } from "@mui/material";
import React from "react";

type Props = { children: React.ReactNode; className?: string };

const MuiTypographyBold: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { className } = props;
  return (
    <Typography className={className} variant="h6" component="span" fontWeight={600}>
      {children}
    </Typography>
  );
});

export default MuiTypographyBold;
