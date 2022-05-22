import React from "react";
import Box from "@mui/material/Box";
import { Scene, SlideList } from "../../organisms";
import { useModal } from "../../../hooks/useModal";

const StoryChapter1: React.FC = React.memo(() => {
  const { open, setOpen } = useModal();

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Scene setOpen={setOpen} />
      <SlideList open={open} setOpen={setOpen} />
    </Box>
  );
});

export default StoryChapter1;
