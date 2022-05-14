import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { theme } from "../../assets/theme";
import { PrivacyPolicy, Terms } from "../pages";

type Props = {
  open: boolean;
  onClose: () => void;
  content: string;
};

const style = {
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "90vh",
    bgcolor: "background.paper",
    boxShadow: 12,
    p: 4,
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  icon: {
    position: "sticky",
    top: 0,
    bgcolor: "rgba(0,0,0,0.4)",
    color: "#fff",
    "&:hover": { bgcolor: "rgba(0,0,0,0.3)" },
  },
};

const MuiModalConfirmation: React.FC<Props> = React.memo((props) => {
  const { open, onClose, content } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style.box}>
        <IconButton onClick={onClose} sx={style.icon}>
          <CloseIcon />
        </IconButton>
        {content === "terms" ? <Terms /> : <PrivacyPolicy />}
      </Box>
    </Modal>
  );
});

export default MuiModalConfirmation;
