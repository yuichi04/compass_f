import { FC, memo, useState } from "react";
import styled from "styled-components";
import { TextField, Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../redux/features/inductionSlice";
import { PulseButton } from "../../atoms";
import { SlideInBox, TitleWithTriangleIcon } from "../../molecules";

const InductionAnswerConclusion: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const common = induction.userAnswers.common;

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
      <TitleWithTriangleIcon variant="h4" color="#fff" triangleColor="#00aa99" fontWeight={600} mb="8px">
        共通点から具体的な解決案を考えましょう
      </TitleWithTriangleIcon>
      <Typography variant="h6" color="#fff" mb="32px">
        {sectionId === 1 && "お客様の英語が上達するにはどうしたら良いでしょうか？"}
      </Typography>

      <SlideInBox direction="top" distance={32} duration={1.6} delay={0.8} mb="64px">
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
      </SlideInBox>

      <SlideInBox direction="top" distance={32} duration={1.6} delay={1.6}>
        <Typography variant="h6" color="#fff" mb="16px">
          ここに解決案を入力して下さい
        </Typography>
        <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#ffa726", fontSize: "48px" }} />
      </SlideInBox>

      <SlideInBox direction="top" distance={32} duration={1.6} delay={2.4}>
        <SForm onSubmit={handleSubmit}>
          <Box mr="16px" width="100%">
            <TextField
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

export default InductionAnswerConclusion;

const SBox = styled.div`
  width: 900px;
  text-align: center;
`;

const SForm = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 12px #fff;
  border-radius: 8px;
  padding: 16px 24px;
`;
