import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ArticleIcon from "@mui/icons-material/Article";
import { useAppDispatch } from "../../lib/redux/hooks";
import { setDocumentAction, setSlideListAction } from "../../lib/redux/features/chapter1Slice";

const styles = {
  utilButtonBox: {
    position: "absolute",
    left: "8px",
    top: "8px",
    display: "flex",
    flexDirection: "column",
    bgcolor: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(10px)",
    padding: "24px 12px",
    borderRadius: "12px",
  },
};

const TooltipBar: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Box sx={styles.utilButtonBox}>
        <Tooltip title="スライドを確認する" placement="right-start">
          <IconButton
            sx={{
              bgcolor: "primary.main",
              color: "#fff",
              borderRadius: "8px",
              mb: "16px",
              transition: "0.2s",
              "&:hover": { bgcolor: "primary.main", transform: "scale(1.075)" },
            }}
            onClick={() => dispatch(setSlideListAction(true))}
          >
            <AutoAwesomeMotionIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="資料を見る" placement="right-start">
          <IconButton
            sx={{
              bgcolor: "warning.light",
              color: "#fff",
              borderRadius: "8px",
              mb: "16px",
              transition: "0.2s",
              "&:hover": { bgcolor: "warning.light", transform: "scale(1.075)" },
            }}
            onClick={() => dispatch(setDocumentAction(true))}
          >
            <ArticleIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="ログを確認" placement="right-start">
          <IconButton
            sx={{
              bgcolor: "info.light",
              color: "#fff",
              borderRadius: "8px",
              transition: "0.2s",
              "&:hover": { bgcolor: "info.light", transform: "scale(1.075)" },
            }}
            onClick={() => dispatch(setSlideListAction(true))}
          >
            <FindInPageIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
});

export default TooltipBar;
