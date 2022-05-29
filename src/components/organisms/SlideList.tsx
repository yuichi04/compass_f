import React, { useCallback } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { SlideListItem } from "./index";
import { LessonDatasetType } from "../../types/lessonItemTypes";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  contents: LessonDatasetType;
  setContents: React.Dispatch<
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
  const { open, setOpen, contents, setContents } = props;
  const lastSlideNum = contents.slice(-1)[0].order;

  // スライドのon・offを管理
  const handleCloseSlide = useCallback(
    (close: boolean) => {
      const newChapter1 = contents.map((content) => {
        return {
          ...content,
          className: "",
        };
      });
      setContents(newChapter1);
      setOpen(close);
    },
    [contents, setContents, setOpen]
  );

  // 次のスライドへ
  const handleClickNextSlide = useCallback(
    (order: number) => {
      const newContents = contents.map((content) => {
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
      setContents(newContents);
    },
    [contents, setContents]
  );

  // 前のスライドへ
  const handleClickBackSlide = useCallback(
    (order: number) => {
      const newContents = contents.map((content) => {
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
      setContents(newContents);
    },
    [contents, setContents]
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
        {contents.map((content) => (
          <SlideListItem
            key={content.order}
            order={content.order}
            className={content.className}
            next={handleClickNextSlide}
            back={handleClickBackSlide}
            title={content.title}
            sectionTitle={content.sectionTitle}
            last={lastSlideNum}
            setClose={handleCloseSlide}
          >
            {content.sentence}
          </SlideListItem>
        ))}
      </Box>
    </Modal>
  );
});

export default SlideList;
