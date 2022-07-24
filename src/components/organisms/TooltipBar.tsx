import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ArticleIcon from "@mui/icons-material/Article";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import {
  showDocumentsAction,
  showUserAnswersAction,
  showSlideAction,
  inductionSelector,
} from "../../lib/redux/features/inductionSlice";

const styles = {
  utilButtonBox: {
    position: "absolute",
    left: "-8px",
    top: "-8px",
    display: "flex",
    alignItems: "center",
    padding: "8px",
    borderRadius: "8px",
  },
};

const TooltipBar: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const isOpenUserAnswers = induction.scene.isOpenAnswers;
  return (
    <>
      <Box sx={styles.utilButtonBox}>
        <Tooltip title="スライドを確認する" placement="bottom">
          <IconButton
            sx={{
              bgcolor: "rgba(51,187,173, 0.9)",
              color: "#fff",
              borderRadius: "50%",
              p: "12px",
              mr: "16px",
              transition: "0.2s",
              "&:hover": { bgcolor: "rgba(51,187,173, 0.9)", transform: "scale(1.075)" },
            }}
            onClick={() => dispatch(showSlideAction(true))}
          >
            <AutoAwesomeMotionIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="資料を見る" placement="bottom">
          <IconButton
            sx={{
              bgcolor: "rgba(255,167, 38, 0.9)",
              color: "#fff",
              borderRadius: "50%",
              p: "12px",
              mr: "16px",
              transition: "0.2s",
              "&:hover": { bgcolor: "rgba(255,167, 38, 0.9)", transform: "scale(1.075)" },
            }}
            onClick={() => dispatch(showDocumentsAction(true))}
          >
            <ArticleIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="自分の回答を確認する" placement="bottom">
          <IconButton
            sx={{
              bgcolor: "rgba(66,165,245, 0.9)",
              color: "#fff",
              borderRadius: "50%",
              p: "12px",
              transition: "0.2s",
              "&:hover": { bgcolor: "rgba(66,165,245, 0.9)", transform: "scale(1.075)" },
            }}
            onClick={() => dispatch(showUserAnswersAction(!isOpenUserAnswers))}
          >
            <PersonSearchIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
});

export default TooltipBar;
