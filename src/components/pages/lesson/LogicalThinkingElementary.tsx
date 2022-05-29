import React from "react";
import Box from "@mui/material/Box";
import { Scene, SlideList } from "../../organisms";
import { useModal } from "../../../hooks/useModal";
import { LogicalThinkingElementaryDataset } from "../../../dataset";

const LessonMain: React.FC = React.memo(() => {
  const { open, setOpen } = useModal();
  const { contents, setContents } = LogicalThinkingElementaryDataset();

  return (
    <Box sx={{ position: "relative", height: "calc(100vh - 64px)", width: "100vw", overflow: "hidden" }}>
      <Scene setClose={setOpen} />
      <SlideList open={open} setOpen={setOpen} contents={contents} setContents={setContents} />
    </Box>
  );
});

export default LessonMain;
