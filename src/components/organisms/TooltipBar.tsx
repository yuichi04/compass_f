import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import BorderColorIcon from "@mui/icons-material/BorderColor";

type Props = {
  setOpen: (open: boolean) => void;
};

const styles = {
  utilButtonBox: {
    position: "absolute",
    left: "8px",
    bottom: "8px",
    display: "flex",
    bgcolor: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(10px)",
    padding: "12px 16px",
    borderRadius: "12px",
  },
};

const TooltipBar: React.FC<Props> = React.memo((props) => {
  const { setOpen } = props;
  return (
    <>
      <Box sx={styles.utilButtonBox}>
        <Tooltip title="スライドを確認する">
          <IconButton
            sx={{
              bgcolor: "info.dark",
              color: "#fff",
              borderRadius: "8px",
              mr: "16px",
              transition: "0.2s",
              "&:hover": { bgcolor: "info.dark", transform: "scale(1.075)" },
            }}
            onClick={() => setOpen(true)}
          >
            <AutoAwesomeMotionIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="メモを書く">
          <IconButton
            sx={{
              bgcolor: "warning.dark",
              color: "#fff",
              borderRadius: "8px",
              transition: "0.2s",
              "&:hover": { bgcolor: "warning.dark", transform: "scale(1.075)" },
            }}
            onClick={() => setOpen(true)}
          >
            <BorderColorIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
});

export default TooltipBar;
