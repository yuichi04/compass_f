import React, { useCallback } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { SlideListItem } from "./index";
import { SlideContentList } from "../../dataset/index";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SlideList: React.FC<Props> = React.memo((props) => {
  const { open, setOpen } = props;
  const { chapter1Contents, setChapter1Contents } = SlideContentList();
  const lastSlideNum = chapter1Contents.slice(-1)[0].order;

  // スライド表示のオン・オフ
  const handleOpenSlide = useCallback(
    (open: boolean) => {
      const newChapter1 = chapter1Contents.map((content) => {
        return {
          ...content,
          className: "",
        };
      });
      setChapter1Contents(newChapter1);
      setOpen(open);
    },
    [chapter1Contents, setChapter1Contents, setOpen]
  );

  // 次のスライドへ
  const handleClickNextSlide = useCallback(
    (order: number) => {
      const newContents = chapter1Contents.map((content) => {
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
      setChapter1Contents(newContents);
    },
    [chapter1Contents, setChapter1Contents]
  );

  // 前のスライドへ
  const handleClickBackSlide = useCallback(
    (order: number) => {
      const newContents = chapter1Contents.map((content) => {
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
      setChapter1Contents(newContents);
    },
    [chapter1Contents, setChapter1Contents]
  );

  return (
    <Modal open={open} onClose={() => handleOpenSlide(false)}>
      <Box
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
        {chapter1Contents.map((content) => (
          <SlideListItem
            key={content.order}
            order={content.order}
            className={content.className}
            next={handleClickNextSlide}
            back={handleClickBackSlide}
            title={content.title}
            sectionTitle={content.sectionTitle}
            last={lastSlideNum}
            setOpen={handleOpenSlide}
          >
            {content.sentence}
          </SlideListItem>
        ))}
      </Box>
    </Modal>
  );
});

export default SlideList;
