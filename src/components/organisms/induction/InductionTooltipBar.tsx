import React from "react";
import { Box } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ArticleIcon from "@mui/icons-material/Article";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { inductionSelector, showUtilsAction } from "../../../redux/features/inductionSlice";
import { Tooltip } from "../../molecules";

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
  const induction = useAppSelector(inductionSelector);
  const isOpenUserAnswers = induction.isOpen.answers;
  const isOpenDocuments = induction.isOpen.documents;
  const isOpenSlide = induction.isOpen.slide;
  return (
    <>
      <Box sx={styles.utilButtonBox}>
        <Tooltip
          title="スライドを確認する"
          color="primary.main"
          icon={<AutoAwesomeMotionIcon fontSize="large" />}
          onClick={() => dispatch(showUtilsAction({ key: "slide", value: !isOpenSlide }))}
        />
        <Tooltip
          title="自分の回答を確認する"
          color="info.main"
          icon={<PersonSearchIcon fontSize="large" />}
          onClick={() => dispatch(showUtilsAction({ key: "answers", value: !isOpenUserAnswers }))}
        />
        <Tooltip
          title="資料を見る"
          color="success.main"
          icon={<ArticleIcon fontSize="large" />}
          onClick={() => dispatch(showUtilsAction({ key: "documents", value: !isOpenDocuments }))}
        />
      </Box>
    </>
  );
});

export default InductionTooltipBar;
