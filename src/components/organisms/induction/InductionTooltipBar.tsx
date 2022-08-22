import React from "react";
import { Box } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ArticleIcon from "@mui/icons-material/Article";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Tooltip } from "../../molecules";
import { lessonSelector, toggleShowAndHideInterfaceAction } from "../../../redux/features/lessonSlice";

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

const InductionTooltipBar: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const lesson = useAppSelector(lessonSelector);
  const isOpen = lesson.isOpen;
  return (
    <>
      <Box sx={styles.utilButtonBox}>
        <Tooltip
          title="スライドを確認する"
          color="primary.main"
          icon={<AutoAwesomeMotionIcon fontSize="large" />}
          onClick={() => dispatch(toggleShowAndHideInterfaceAction({ key: "slideList", open: !isOpen.slideList }))}
        />
        <Tooltip
          title="自分の解答を確認する"
          color="info.main"
          icon={<PersonSearchIcon fontSize="large" />}
          onClick={() => dispatch(toggleShowAndHideInterfaceAction({ key: "answers", open: !isOpen.answers }))}
        />
        {/* <Tooltip
          title="資料を見る"
          color="success.main"
          icon={<ArticleIcon fontSize="large" />}
          onClick={() => dispatch(toggleShowAndHideInterfaceAction({ key: "documents", open: !isOpen.documents }))}
        /> */}
      </Box>
    </>
  );
});

export default InductionTooltipBar;
