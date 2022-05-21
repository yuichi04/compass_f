import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { SlideListItem } from "./index";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  contents: {
    title: string;
    sectionTitle: string;
    sentence: React.ReactNode;
    order: number;
    className: string;
  }[];
  next: (order: number) => void;
  back: (order: number) => void;
};

const SlideList: React.FC<Props> = React.memo((props) => {
  const { open, setOpen, contents, next, back } = props;
  const lastSlideNum = contents.slice(-1)[0].order;

  return (
    <Modal open={open} onClose={() => setOpen(true)}>
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
        {contents.map((content) => (
          <SlideListItem
            key={content.order}
            order={content.order}
            className={content.className}
            next={next}
            back={back}
            title={content.title}
            sectionTitle={content.sectionTitle}
            last={lastSlideNum}
            setOpen={setOpen}
          >
            {content.sentence}
          </SlideListItem>
        ))}
      </Box>
    </Modal>
  );
});

export default SlideList;
