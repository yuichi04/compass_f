import React from "react";
// Modules
import { Box, Icon, Paper, Typography } from "@mui/material";

type Props = {
  children: React.ReactNode;
  color: string;
  icon: React.ElementType;
  iconSize?: string;
  title: string;
};

const SubTitleWithContent: React.FC<Props> = ({ children, ...props }) => {
  const { title, icon, iconSize, color } = props;
  return (
    <Box component="section" mt="16px">
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
          <Typography variant="subtitle1" fontWeight={600} mr="4px">
            {title}
          </Typography>
          <Icon component={icon} sx={{ fontSize: iconSize && iconSize }} />
        </Box>
      </Paper>
      <Box p="0 16px">{children}</Box>
    </Box>
  );
};

export default SubTitleWithContent;
