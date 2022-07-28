import { FC, memo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { MuiTextField, PulseButton } from "../../atoms";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../lib/redux/features/inductionSlice";

type StyleType = {
  delay: number;
};

const InductionAnswerCommon: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const info = induction.userAnswers.info;
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
            選択した情報から共通点を見つけましょう
          </Typography>
          <Typography variant="h6" color="#fff" mb="16px">
            選択した情報
          </Typography>
          <Box component="ul" mb="64px">
            {info.map((data, index) => (
              <SInfo key={data.id} delay={index + 1}>
                <Typography variant="subtitle1" component="span">
                  {data.text}
                </Typography>
              </SInfo>
            ))}
          </Box>

          <Typography variant="h6" color="#fff" mb="16px">
            ここに共通点を入力して下さい
          </Typography>
          <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "primary.light", fontSize: "48px" }} />
          <SForm onSubmit={handleSubmit} delay={info.length + 1}>
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

export default InductionAnswerCommon;

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
    opacity: 1;
    transform: translateY(32px);
  }
`;

const SBox = styled.div`
  width: 900px;
  height: 80vh;
  text-align: center;
`;
const SInfo = styled.li<StyleType>`
  display: inline-block;
  background: #f9fbe7;
  border-radius: 8px;
  box-shadow: 0 0 4px #f9fbe7;
  animation: ${slideIn} 0.5s ${(props) => props.delay / 2}s ease-in-out forwards;
  padding: 8px 12px;
  margin-bottom: 16px;
  margin-right: 16px;
  opacity: 0;
`;

const SForm = styled.form<StyleType>`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 16px 24px;
  animation: ${fadeIn} 1s ${(props) => props.delay / 2}s ease-in-out forwards;
  opacity: 0;
`;
