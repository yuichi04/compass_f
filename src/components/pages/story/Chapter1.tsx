import { Box } from "@mui/material";
import React from "react";
import { StoryOperationScreen } from "../../layouts";

const StoryChapter1: React.FC = React.memo(() => {
  return (
    <Box sx={{ position: "relative" }}>
      <StoryOperationScreen />
      {/* スライドコンポーネント */}
    </Box>
  );
});

export default StoryChapter1;
