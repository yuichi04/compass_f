import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const LessonMain: React.FC = React.memo(() => {
  return (
    <Box sx={{ position: "relative", height: "calc(100vh - 64px)", width: "100vw", overflow: "hidden" }}>
      <Outlet />
    </Box>
  );
});

export default LessonMain;
