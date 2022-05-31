import React, { useCallback } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { SlideListItem } from "./index";
import { LessonDatasetType } from "../../types/lessonItemTypes";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  slideItems: LessonDatasetType;
  setSlideItems: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        sectionTitle: string;
        sentence: JSX.Element;
        order: number;
        className: string;
      }[]
    >
  >;
};

const SlideList: React.FC<Props> = React.memo((props) => {
  const { open, setOpen, slideItems, setSlideItems } = props;
  const lastSlideNum = slideItems.slice(-1)[0].order;

  // スライドのon・offを管理
  const handleCloseSlide = useCallback(
    (close: boolean) => {
      const newChapter1 = slideItems.map((slideItem) => {
        return {
          ...slideItem,
          className: "",
        };
      });
      setSlideItems(newChapter1);
      setOpen(close);
    },
    [slideItems, setSlideItems, setOpen]
  );

  // 次のスライドへ
  const handleClickNextSlide = useCallback(
    (order: number) => {
      const newSlideItems = slideItems.map((slideItem) => {
        if (slideItem.order === order) {
          return {
            ...slideItem,
            className: "slide-left-out",
          };
        } else if (slideItem.order === order + 1) {
          return {
            ...slideItem,
            className: "slide-right-in",
          };
        } else {
          return {
            ...slideItem,
            className: "display-none",
          };
        }
      });
      setSlideItems(newSlideItems);
    },
    [slideItems, setSlideItems]
  );

  // 前のスライドへ
  const handleClickBackSlide = useCallback(
    (order: number) => {
      const newSlideItems = slideItems.map((slideItem) => {
        if (slideItem.order === order) {
          return {
            ...slideItem,
            className: "slide-right-out",
          };
        } else if (slideItem.order === order - 1) {
          return {
            ...slideItem,
            className: "slide-left-in",
          };
        } else {
          return {
            ...slideItem,
            className: "display-none",
          };
        }
      });
      setSlideItems(newSlideItems);
    },
    [slideItems, setSlideItems]
  );

  return (
    <Modal open={!open} onClose={() => handleCloseSlide(true)}>
      <Box
        className="expand_center"
        sx={{
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "100%",
          width: "100%",
        }}
      >
        {slideItems.map((slideItem) => (
          <SlideListItem
            key={slideItem.order}
            order={slideItem.order}
            className={slideItem.className}
            next={handleClickNextSlide}
            back={handleClickBackSlide}
            title={slideItem.title}
            sectionTitle={slideItem.sectionTitle}
            last={lastSlideNum}
            setClose={handleCloseSlide}
          >
            {slideItem.sentence}
          </SlideListItem>
        ))}
      </Box>
    </Modal>
  );
});

export default SlideList;
