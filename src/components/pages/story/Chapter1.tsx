import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import { StoryOperationScreen, SlideListModal } from "../../organisms";
import { useModal } from "../../../hooks/useModal";
import { SlideContentList } from "../../../dataset";

const StoryChapter1: React.FC = React.memo(() => {
  const { chapter1, setChapter1 } = SlideContentList();
  const { open, setOpen } = useModal();

  const handleClickNextSlide = useCallback(
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

  const handleClickBackSlide = useCallback(
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

  // スライドのオン・オフを切り替える
  const handleOpenSlide = useCallback(
    (open: boolean) => {
      const newChapter1 = chapter1.map((content) => {
        return {
          ...content,
          className: "",
        };
      });
      setChapter1(newChapter1);
      setOpen(open);
    },
    [chapter1, setChapter1, setOpen]
  );

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
      <StoryOperationScreen setOpen={setOpen} />
      {/* スライドコンポーネント */}
      <SlideListModal
        open={open}
        setOpen={handleOpenSlide}
        contents={chapter1}
        next={handleClickNextSlide}
        back={handleClickBackSlide}
      />
    </Box>
  );
});

export default StoryChapter1;
