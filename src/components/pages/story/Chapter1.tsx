import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import { StoryOperationScreen } from "../../layouts";
import { SlideListModal } from "../../organisms";
import { useModal } from "../../../hooks/useModal";

const StoryChapter1: React.FC = React.memo(() => {
  const { open, setOpen } = useModal();
  const [contents, setContents] = useState([
    {
      title: "第1章「相手の知りたい情報を知る」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat{" "}
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 0,
      className: "",
    },
    {
      title: "第2章「相手の知りたい情報を知る」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat{" "}
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 1,
      className: "",
    },
    {
      title: "第3章「相手の知りたい情報を知る」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat{" "}
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 2,
      className: "",
    },
  ]);
  const handleClickNext = useCallback(
    (order: number) => {
      // contents[order].className = "slide-left-out";
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
          return { ...content, className: "display-none" };
        }
      });
      setContents(newContents);
    },
    [contents]
  );

  const handleClickBack = useCallback(
    (order: number) => {
      // contents[order].className = "slide-left-out";
      const newContents = contents.map((content) => {
        if (content.order === order) {
          return {
            ...content,
            className: "slide-right-out",
          };
        }
        if (content.order === order - 1) {
          return {
            ...content,
            className: "slide-left-in",
          };
        }
        return content;
      });
      setContents(newContents);
    },
    [contents]
  );

  return (
    <Box sx={{ position: "relative", height: "100vh", width: "100vw" }}>
      <StoryOperationScreen />
      {/* スライドコンポーネント */}
      <SlideListModal open={open} setOpen={setOpen} contents={contents} next={handleClickNext} back={handleClickBack} />
    </Box>
  );
});

export default StoryChapter1;
