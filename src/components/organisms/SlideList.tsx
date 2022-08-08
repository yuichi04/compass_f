import { FC, memo, useCallback } from "react";
import Box from "@mui/material/Box";
import { SlideListItem } from ".";
import { SlideListData } from "../../dataset/induction";
import { useAppSelector } from "../../redux/hooks";
import { inductionSelector } from "../../redux/features/inductionSlice";

const SlideList: FC = memo(() => {
  const induction = useAppSelector(inductionSelector);
  const isOpenSlide = induction.isOpen.slide;
  const { slideItems, setSlideItems } = SlideListData();
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
    <>
      {isOpenSlide && (
        <Box
          className="path-center"
          bgcolor="#e0f7fa"
          sx={{
            zIndex: "999",
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100%",
            width: "100%",
            overflow: "hidden",
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
      )}
    </>
  );
});

export default SlideList;
