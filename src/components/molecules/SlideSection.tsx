import React from "react";
import { Paper, Typography } from "@mui/material";

type Props = {
  color: string;
  title: string;
  titleIcon?: React.ReactNode;
  mb?: string;
  children: React.ReactNode;
};

const SlideSection: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { color, title, mb, titleIcon } = props;
  return (
    <Paper elevation={8} sx={{ position: "relative", bgcolor: "#fff", p: "40px 32px 16px", mb: mb }}>
      <Paper
        elevation={8}
        sx={{
          position: "absolute",
          top: "-24px",
          left: "-12px",
          bgcolor: color,
          borderRadius: "4px",
          p: "8px 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color="#fff" fontWeight={600}>
          {title}
        </Typography>
        {titleIcon}
      </Paper>
      <Typography variant="h6" component="div">
        {children}
      </Typography>
    </Paper>
  );
});

export default SlideSection;
