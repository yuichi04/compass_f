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
    <Box component="section" mt="16px">
      <div>
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
            <Typography variant="subtitle1" fontWeight={600}>
              {title}
            </Typography>
            {icon}
          </Box>
        </Paper>
      </div>
      {children}
    </Box>
  );
};

export default SlideSectionContent;
