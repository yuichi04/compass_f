import { FC, memo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { MuiTextField, PulseButton } from "../../atoms";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../lib/redux/features/inductionSlice";

const InductionAnswerConclusion: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const common = induction.userAnswers.common;
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
          <Typography variant="h5" color="primary.light" fontWeight={600} mb="32px">
            共通点から結論を導き出しましょう
          </Typography>
          <Typography variant="h6" color="#fff" mb="16px">
            共通点
          </Typography>
          <SCommon>
            <Typography variant="h5" color="#fff" fontWeight={600}>
              {common}
            </Typography>
          </SCommon>

          <Typography variant="h6" color="#fff" mb="16px">
            ここに結論を入力して下さい
          </Typography>
          <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "primary.light", fontSize: "48px" }} />

          <SForm onSubmit={handleSubmit}>
            <Box mr="16px" width="100%">
              <MuiTextField variant="standard" onChange={handleChange} value={answer} fullWidth autoComplete="off" />
            </Box>
            <PulseButton size="50px" bgcolor="#00aa99" color="#fff" disabled={answer === ""}>
              <SendIcon sx={{ color: "#fff" }} />
            </PulseButton>
          </SForm>
        </SBox>
      )}
    </>
  );
});

export default InductionAnswerConclusion;

const slideIn = keyframes`
  0% {
    transform: translateX(-16px);
  }
  100% {
    opacity: 1;
  }
`;
const fadeIn = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    box-shadow: 0 0 12px #fff;
    transform: translateY(32px);
    opacity: 1;
  }
`;

const SBox = styled.div`
  width: 900px;
  height: 80vh;
  text-align: center;
`;
const SCommon = styled.div`
  animation: ${slideIn} 1s 1s ease-in-out forwards;
  margin-bottom: 64px;
  opacity: 0;
`;

const SForm = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 16px 24px;
  animation: ${fadeIn} 1s 2s ease-in-out forwards;
  opacity: 0;
`;
