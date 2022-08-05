import { FC, memo, useState } from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { MuiTextField, PulseButton } from "../../atoms";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../lib/redux/features/inductionSlice";
import { TitleWithTriangle } from "../../molecules";
import { SlideInBox } from "../../molecules";

const InductionAnswerCommon: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const info = induction.userAnswers.info;

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
    <SBox>
      <TitleWithTriangle variant="h4" color="#fff" triangleColor="#00aa99" fontWeight={600} mb="8px">
        選んだ情報から共通点を見つけましょう
      </TitleWithTriangle>
      <Typography variant="h6" color="#fff" mb="32px">
        {sectionId === 1 && "同じ特徴や性質は何でしょうか？"}
      </Typography>
      <Typography variant="h6" color="#fff" mb="16px">
        選んだ情報
      </Typography>
      <Box mb="32px">
        {info.map((data, index) => (
          <SlideInBox
            key={index}
            display="inline-block"
            direction="left"
            distance={32}
            duration={1}
            delay={index / 2 + 0.8}
            mb="16px"
            mr="16px"
          >
            <SInfo>
              <Typography variant="subtitle1" component="span" sx={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                {data.text}
              </Typography>
            </SInfo>
          </SlideInBox>
        ))}
      </Box>

      <SlideInBox direction="top" distance={32} duration={1.6} delay={info.length / 2 + 0.8}>
        <Typography variant="h6" color="#fff" mb="16px">
          ここに共通点を入力して下さい
        </Typography>
        <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#ffa726", fontSize: "48px" }} />
      </SlideInBox>

      <SlideInBox direction="top" distance={32} duration={1.6} delay={info.length / 2 + 1.6}>
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
      </SlideInBox>
    </SBox>
  );
});

export default InductionAnswerCommon;

const SBox = styled.div`
  width: 900px;
  text-align: center;
`;
const SInfo = styled.div`
  box-shadow: 0 0 16px #33bbad;
  background: #33bbad;
  border-radius: 8px;
  color: #fff;
  padding: 8px 12px;
`;

const SForm = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 12px #fff;
  border-radius: 8px;
  padding: 16px 24px;
`;
