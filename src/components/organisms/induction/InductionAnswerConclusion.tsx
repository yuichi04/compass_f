import { FC, memo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { MuiTextField, PulseButton } from "../../atoms";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../lib/redux/features/inductionSlice";
import { TitleWithTriangle } from "../../molecules";

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
          <TitleWithTriangle variant="h4" color="#fff" triangleColor="#00aa99" fontWeight={600} mb="48px">
            共通点から具体的な解決案を考えましょう
          </TitleWithTriangle>
          <SCommon>
            <Typography
              variant="h5"
              bgcolor="#00aa99"
              boxShadow="0 0 8px #00aa99"
              borderRadius="8px"
              color="#fff"
              fontWeight={600}
              p="8px 0"
            >
              共通点：{common}
            </Typography>
          </SCommon>

          <SSlideInTopBox>
            <Typography variant="h6" color="#fff" mb="16px">
              ここに解決案を入力して下さい
            </Typography>
          </SSlideInTopBox>
          <SFadeInBox>
            <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#ffa726", fontSize: "48px" }} />
          </SFadeInBox>

          <SForm onSubmit={handleSubmit}>
            <Box mr="16px" width="100%">
              <MuiTextField
                variant="standard"
                onChange={handleChange}
                value={answer}
                fullWidth
                autoComplete="off"
                autoFocus
              />
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

const slideInLeft = keyframes`
  0% {
    transform: translateX(-16px);
  }
  100% {
    opacity: 1;
  }
`;
const slideInTop = keyframes`
  0% {
    transform: translateY(-32px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const fadeIn = keyframes`
  100% {
    opacity:1
  }
`;

const SBox = styled.div`
  width: 900px;
  text-align: center;
`;
const SCommon = styled.div`
  animation: ${slideInLeft} 1s 1s ease-in-out forwards;
  color: #fff;
  margin-bottom: 64px;
  opacity: 0;
`;

const SForm = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 12px #fff;
  border-radius: 8px;
  padding: 16px 24px;
  animation: ${slideInTop} 1s 3s ease-in-out forwards;
  opacity: 0;
`;

const SSlideInTopBox = styled.div`
  animation: ${slideInTop} 1s 2s ease-in-out forwards;
  opacity: 0;
  margin-bottom: 24px;
`;

const SFadeInBox = styled.div`
  animation: ${fadeIn} 1s 4s ease-in-out forwards;
  opacity: 0;
`;
