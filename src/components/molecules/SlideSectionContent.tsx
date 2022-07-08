import React from "react";
import { Box, Paper, Typography } from "@mui/material";

type Props = {
  title: string;
  icon?: React.ReactNode;
  color: string;
  children: React.ReactNode;
};

const SlideSectionContent: React.FC<Props> = ({ children, ...props }) => {
  const { title, icon, color } = props;
  return (
    <Box component="section" mt="24px">
      <Box component="div">
        <Paper
          elevation={8}
          sx={{
            display: "inline-block",
            color: "#fff",
            bgcolor: color,
            borderRadius: "4px",
            p: "4px 12px",
            mb: "8px",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h6">{title}</Typography>
            {icon}
          </Box>
        </Paper>
      </Box>
      {children}
    </Box>
  );
};

export default SlideSectionContent;
