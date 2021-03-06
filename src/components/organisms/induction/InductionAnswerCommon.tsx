import { FC, memo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { MuiTextField, PulseButton } from "../../atoms";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../lib/redux/features/inductionSlice";
import { TitleWithTriangle } from "../../molecules";

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
          <TitleWithTriangle variant="h4" color="#fff" triangleColor="#00aa99" fontWeight={600} mb="32px">
            選んだ情報から共通点を見つけましょう
          </TitleWithTriangle>
          <Typography variant="h6" color="#fff" mb="16px">
            選んだ情報
          </Typography>
          <Box component="ul" mb="32px">
            {info.map((data, index) => (
              <SInfo key={data.id} delay={index + 1}>
                <Typography variant="subtitle1" component="span" sx={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                  {data.text}
                </Typography>
              </SInfo>
            ))}
          </Box>

          <SSlideInTopBox delay={info.length + 1}>
            <Typography variant="h6" color="#fff" mb="16px">
              ここに共通点を入力して下さい
            </Typography>
          </SSlideInTopBox>
          <SFadeInBox delay={info.length + 5}>
            <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#ffa726", fontSize: "48px" }} />
          </SFadeInBox>

          <SForm onSubmit={handleSubmit} delay={info.length + 3}>
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

export default InductionAnswerCommon;

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
    opacity: 1;
    transform: translateY(0);
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
const SInfo = styled.li<StyleType>`
  display: inline-block;
  box-shadow: 0 0 16px #33bbad;
  background: #33bbad;
  border-radius: 8px;
  color: #fff;
  animation: ${slideInLeft} 0.5s ${(props) => props.delay / 2}s ease-in-out forwards;
  padding: 8px 12px;
  margin-bottom: 16px;
  margin-right: 16px;
  opacity: 0;
`;

const SSlideInTopBox = styled.div<StyleType>`
  animation: ${slideInTop} 1s ${(props) => props.delay / 2}s ease-in-out forwards;
  opacity: 0;
  margin-bottom: 24px;
`;

const SFadeInBox = styled.div<StyleType>`
  animation: ${fadeIn} 1s ${(props) => props.delay / 2}s ease-in-out forwards;
  opacity: 0;
`;

const SForm = styled.form<StyleType>`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 12px #fff;
  border-radius: 8px;
  padding: 16px 24px;
  animation: ${slideInTop} 1s ${(props) => props.delay / 2}s ease-in-out forwards;
  opacity: 0;
`;
