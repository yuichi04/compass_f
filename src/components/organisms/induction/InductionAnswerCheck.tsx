import { FC, memo, useState } from "react";
import styled from "styled-components";
import { Typography, Box, Paper, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../lib/redux/features/inductionSlice";

const InductionAnswerCheck: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const answers = induction.userAnswers;
  const isOpenScreen = induction.isOpenScreenForAnswers;

  // ユーザーの回答を管理
  const [answer, setAnswer] = useState("");

  // 回答の入力
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  // ユーザーの回答をstoreに保存
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answer === "") return false;
    setAnswer("");
    // セリフを生成し、表示する処理。表示を0.2秒遅延させる。
    setTimeout(() => dispatch(setNextDynamicSceneAction(answer)), 100);
  };

  return (
    <>
      {isOpenScreen && (
        <SBox>
          <Typography variant="h5" color="primary.light" fontWeight={600}>
            最後に論理に飛躍がないか確認しましょう
          </Typography>
          <Typography variant="subtitle1" color="primary.light" fontWeight={600}>
            「なぜならば」で繋げると意味が通じる文章になりますか？
          </Typography>

          <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "primary.light", fontSize: "48px" }} />

          {/* 結論 */}
          <Paper elevation={8} sx={{ mb: "16px" }}>
            <Typography variant="subtitle2" bgcolor="#004d40" color="#fff">
              結論
            </Typography>
            <Typography bgcolor="rgba(249,251,231, 0.6)" borderTop="none" p="16px" sx={{ wordBreak: "break-all" }}>
              {answers.conclusion}
            </Typography>
          </Paper>

          <Typography variant="h5" color="#fff" mb="16px">
            なぜならば
          </Typography>

          {/* 共通点 */}
          <Paper elevation={8} sx={{ mb: "16px" }}>
            <Typography variant="subtitle2" bgcolor="primary.dark" color="#fff">
              共通点
            </Typography>
            <Typography bgcolor="rgba(249,251,231, 0.6)" borderTop="none" p="16px" sx={{ wordBreak: "break-all" }}>
              {answers.common}
            </Typography>
          </Paper>

          <Typography variant="h5" color="#fff" mb="16px">
            なぜならば
          </Typography>

          {/* 情報 */}
          <Paper elevation={8}>
            <Typography variant="subtitle2" bgcolor="primary.main" color="#fff">
              情報
            </Typography>

            <Grid
              container
              bgcolor="rgba(249,251,231, 0.6)"
              height="160px"
              overflow="scroll"
              p="8px 16px"
              display="flex"
              justifyContent="space-between"
              sx={{ wordBreak: "break-all" }}
            >
              {answers.info.map((data, index) => (
                <Grid
                  item
                  xs={4}
                  key={data.id}
                  p="8px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box component="input" display="none" type="checkbox" id={index + "info-item"} />
                  <Typography variant="subtitle2">{data.text}</Typography>
                  <label htmlFor={index + "info-item"}>
                    <Box bgcolor="primary.main" borderRadius="8px" color="#fff">
                      OK
                    </Box>
                  </label>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </SBox>
      )}
    </>
  );
});

export default InductionAnswerCheck;

const SBox = styled.div`
  width: 900px;
  height: 80vh;
  text-align: center;
`;
