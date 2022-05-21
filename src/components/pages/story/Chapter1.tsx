import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import { StoryOperationScreen, SlideListModal } from "../../organisms";
import { useModal } from "../../../hooks/useModal";
import { SlideContentList } from "../../../dataset";

const StoryChapter1: React.FC = React.memo(() => {
  const { chapter1, setChapter1 } = SlideContentList();
  const { open, setOpen } = useModal();
  const handleClickNext = useCallback(
    (order: number) => {
      const newContents = chapter1.map((content) => {
        if (content.order === order) {
          return {
            ...content,
            className: "slide-left-out",
          };
        } else if (content.order === order + 1) {
          return {
            ...content,
            className: "slide-right-in",
          };
        } else {
          return {
            ...content,
            className: "display-none",
          };
        }
      });
      setChapter1(newContents);
    },
    [chapter1, setChapter1]
  );

  const handleClickBack = useCallback(
    (order: number) => {
      const newContents = chapter1.map((content) => {
        if (content.order === order) {
          return {
            ...content,
            className: "slide-right-out",
          };
        } else if (content.order === order - 1) {
          return {
            ...content,
            className: "slide-left-in",
          };
        } else {
          return {
            ...content,
            className: "display-none",
          };
        }
      });
      setChapter1(newContents);
    },
    [chapter1, setChapter1]
  );

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
      <StoryOperationScreen setOpen={setOpen} />
      {/* スライドコンポーネント */}
      <SlideListModal open={open} setOpen={setOpen} contents={chapter1} next={handleClickNext} back={handleClickBack} />
    </Box>
  );
});

export default StoryChapter1;
