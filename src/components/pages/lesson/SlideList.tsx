import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import { SlideListItem } from "../../organisms/index";
import Chapter1SlideItemsData from "../../../dataset/logical_thinking/slide_items/Chapter1SlideItemsData";

const SlideList: React.FC = React.memo(() => {
  const { slideItems, setSlideItems } = Chapter1SlideItemsData();
  const lastSlideNum = slideItems.slice(-1)[0].order;

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
        >
          {slideItem.sentence}
        </SlideListItem>
      ))}
    </Box>
  );
});

export default SlideList;
