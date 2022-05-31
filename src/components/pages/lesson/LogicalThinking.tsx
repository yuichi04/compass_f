import React from "react";
import Box from "@mui/material/Box";
import { Scene, SlideList } from "../../organisms";
import { useModal } from "../../../hooks/useModal";
import Chapter1SlideItemsData from "../../../dataset/logical_thinking/slide_items/Chapter1SlideItemsData";

const LessonMain: React.FC = React.memo(() => {
  const { open, setOpen } = useModal();
  const { slideItems, setSlideItems } = Chapter1SlideItemsData();

  return (
    <Box sx={{ position: "relative", height: "calc(100vh - 64px)", width: "100vw", overflow: "hidden" }}>
      <Scene setClose={setOpen} />
      <SlideList open={open} setOpen={setOpen} slideItems={slideItems} setSlideItems={setSlideItems} />
    </Box>
  );
});

export default LessonMain;
