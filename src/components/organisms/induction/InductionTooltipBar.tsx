import React from "react";
import { Box } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ArticleIcon from "@mui/icons-material/Article";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, showUtilsAction } from "../../../lib/redux/features/inductionSlice";
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
  const isOpenUserAnswers = induction.isOpenAnswers;
  const isOpenDocuments = induction.isOpenDocuments;
  const isOpenSlide = induction.isOpenSlide;
  return (
    <>
      <Box sx={styles.utilButtonBox}>
        <Tooltip
          title="スライドを確認する"
          color="rgba(51,187,173,0.9)"
          icon={<AutoAwesomeMotionIcon fontSize="large" />}
          onClick={() => dispatch(showUtilsAction({ key: "slide", value: !isOpenSlide }))}
        />
        <Tooltip
          title="資料を見る"
          color="rgba(255,167,38,0.9)"
          icon={<ArticleIcon fontSize="large" />}
          onClick={() => dispatch(showUtilsAction({ key: "documents", value: !isOpenDocuments }))}
        />
        <Tooltip
          title="自分の回答を確認する"
          color="rgba(66,165,245,0.9)"
          icon={<PersonSearchIcon fontSize="large" />}
          onClick={() => dispatch(showUtilsAction({ key: "answers", value: !isOpenUserAnswers }))}
        />
      </Box>
    </>
  );
});

export default InductionTooltipBar;
