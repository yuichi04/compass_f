import { FC, useEffect } from "react";
// Modules
import { Box, Grid, Typography } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  fetchAllAnswersHistoryAction,
  answerSelector,
  getAnswerOfInduction,
  toggleShowAnswerDetails,
} from "../../redux/features/answerSlice";
import { hideLoadingAction, showLoadingAction } from "../../redux/features/lodingSlice";
// Conponents
import { InductionAnswerHistory } from "../organisms";
import MuiContaier from "../layouts/MuiContainer";
import { IconWithPageTitle } from "../molecules";

const UserAnswersHistory: FC = () => {
  const dispatch = useAppDispatch();
  // userAnswer selector
  const answerList = useAppSelector(answerSelector);
  const answers = answerList.answerListOfInduction;

  // 引数のidと一致する解答の詳細を取得し、詳細画面を表示する
  const handleClick = (id: string) => {
    dispatch(getAnswerOfInduction(id));
    dispatch(toggleShowAnswerDetails());
  };

  useEffect(() => {
    (async () => {
      dispatch(showLoadingAction("データ取得中..."));
      await dispatch(fetchAllAnswersHistoryAction());
      dispatch(hideLoadingAction());
    })();
  }, [dispatch]);

  return (
    <MuiContaier maxWidth="md">
      <IconWithPageTitle title="学習履歴" icon={HistoryIcon} iconColor="primary" />
      <Grid container p="8px" mb="8px" bgcolor="primary.main" color="typography.white">
        <Grid item xs={2}>
          <Typography variant="subtitle2">作成日</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">コース名</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="subtitle2">相談内容</Typography>
        </Grid>
      </Grid>
      {answers.length === 0 ? (
        <Typography variant="h6" textAlign="center" m="32px 0 64px">
          まだ学習履歴はありません
        </Typography>
      ) : (
        <ul>
          {answers.map((answer, index) => (
            <Box
              component="li"
              key={index}
              p="8px"
              mb="16px"
              boxShadow="0 0 4px #999"
              onClick={() => answer.id && handleClick(answer.id)}
              sx={{ transition: "all 0.2s", cursor: "pointer", "&:hover": { boxShadow: "0 0 8px #ccc" } }}
            >
              <Grid container display="flex" alignItems="center">
                <Grid item xs={2}>
                  <Typography variant="h6" color="typography.gray" fontWeight={400}>
                    {answer.createdAt?.substring(0, 10)}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6" color="typography.gray" fontWeight={400}>
                    {answer.course}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6" color="typography.gray" fontWeight={400}>
                    {answer.consultation}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </ul>
      )}
      {/* ページネーション */}
      <Box display="flex" justifyContent="center">
        <Stack spacing={2}>
          <Pagination count={answers.length <= 6 ? 1 : answers.length / 6} color="primary" />
        </Stack>
      </Box>

      {/* 詳細画面の表示 */}
      <InductionAnswerHistory />
    </MuiContaier>
  );
};

export default UserAnswersHistory;
