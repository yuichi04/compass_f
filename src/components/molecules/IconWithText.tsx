import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  icon: React.ReactNode;
  text: string;
};

const IconWithText: React.FC<Props> = React.memo((props) => {
  const { icon, text } = props;
  return (
    <Box display="flex" alignItems="center">
      {icon}
      <Typography variant="body1" component="h6" fontWeight={600}>
        {text}
      </Typography>
    </Box>
  );
});

export default IconWithText;
