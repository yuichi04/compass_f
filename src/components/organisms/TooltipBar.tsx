import React from "react";
import { IconButton, Tooltip, Box } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../lib/redux/hooks";
import { setSlideListAction } from "../../lib/redux/features/chapter1Slice";

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <Box sx={styles.utilButtonBox}>
        {/* <Tooltip title="ヒントを見る" placement="right-start">
          <IconButton
            sx={{
              bgcolor: "warning.light",
              color: "#fff",
              borderRadius: "8px",
              mb: "16px",
              transition: "0.2s",
              "&:hover": { bgcolor: "warning.light", transform: "scale(1.075)" },
            }}
            onClick={() => navigate("slide")}
          >
            <LightbulbIcon fontSize="large" />
          </IconButton>
        </Tooltip> */}
        <Tooltip title="スライドを確認する" placement="right-start">
          <IconButton
            sx={{
              bgcolor: "primary.main",
              color: "#fff",
              borderRadius: "8px",
              // mb: "16px",
              transition: "0.2s",
              "&:hover": { bgcolor: "primary.main", transform: "scale(1.075)" },
            }}
            onClick={() => dispatch(setSlideListAction(true))}
          >
            <AutoAwesomeMotionIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        {/* <Tooltip title="メモを書く" placement="right-start">
          <IconButton
            sx={{
              bgcolor: "error.light",
              color: "#fff",
              borderRadius: "8px",
              transition: "0.2s",
              "&:hover": { bgcolor: "error.light", transform: "scale(1.075)" },
            }}
            onClick={() => navigate("slide")}
          >
            <BorderColorIcon fontSize="large" />
          </IconButton>
        </Tooltip> */}
      </Box>
    </>
  );
});

export default TooltipBar;
