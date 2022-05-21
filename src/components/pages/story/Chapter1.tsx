import React, { useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import { Scene, SlideList } from "../../organisms";
import { useModal } from "../../../hooks/useModal";
import { SlideContentList } from "../../../dataset";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { chapterSelector, startChapterAction } from "../../../lib/redux/storySlice";
import { fetchChapter } from "../../../lib/api/chapter";

const StoryChapter1: React.FC = React.memo(() => {
  const { chapter1, setChapter1 } = SlideContentList();
  const { open, setOpen } = useModal();
  const dispatch = useAppDispatch();
  const chapterSelecter = useAppSelector(chapterSelector);

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

  const handleFetchChapter = async () => {
    try {
      const res = await fetchChapter();
      if (res.data.status === 200) {
        console.log(res.data);
      } else {
        console.log("失敗");
      }
    } catch (error) {
      console.log("catch");
    }
  };

  useEffect(() => {
    console.log("effect");
    dispatch(startChapterAction(1));
    handleFetchChapter();
  }, []);

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Scene setOpen={setOpen} />
      <SlideList
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
