import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleOpen = (content: string) => {
    setContent(content);
    setOpen(true);
  };
  const handleClose = () => {
    setContent("");
    setOpen(false);
  };

  return {
    content,
    open,
    setOpen,
    handleOpen,
    handleClose,
  };
};
