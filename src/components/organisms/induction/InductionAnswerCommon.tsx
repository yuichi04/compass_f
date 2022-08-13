import { FC, memo, useState } from "react";
import styled from "styled-components";
import { TextField, Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../redux/features/inductionSlice";
import { PulseButton } from "../../atoms";
import { SlideInBox, TitleWithTriangleIcon } from "../../molecules";
import { lessonSelector, toggleShowAndHideInterfaceAction } from "../../../redux/features/lessonSlice";

const InductionAnswerCommon: FC = memo(() => {
  const dispatch = useAppDispatch();
  // lesson selector
  const lesson = useAppSelector(lessonSelector);
  const isOpen = lesson.isOpen;
  // induction selector
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const info = induction.userAnswers.info;
  const commonSubject = induction.commonSubject;

  // ユーザーの回答を管理
  const [answer, setAnswer] = useState("");

  // 回答の入力
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  // ユーザーの回答をstoreに保存
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validations
    if (answer === "") return false;
    // 回答画面を非表示にする
    dispatch(toggleShowAndHideInterfaceAction({ key: "screenForAnswers", open: !isOpen.screenForAnswers }));
    // セリフを生成し表示する処理
    setTimeout(() => dispatch(setNextDynamicSceneAction(answer)), 100); // 表示を0.1秒遅延させる
    // ユーザーの回答を初期化
    setAnswer("");
  };

  return (
    <SBox>
      <TitleWithTriangleIcon variant="h4" color="typography.white" fontWeight={600} mb="8px">
        選んだ情報から共通点を見つけましょう
      </TitleWithTriangleIcon>
      <Typography variant="h5" color="typography.white" mb="32px">
        同じ特徴や性質は何でしょうか？
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
          主語に続けて共通点を入力して下さい
        </Typography>
        <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#ffa726", fontSize: "48px" }} />
      </SlideInBox>

      <SlideInBox direction="top" distance={32} duration={1.6} delay={info.length / 2 + 1.6}>
        <SForm onSubmit={handleSubmit}>
          <Box mr="24px" width="100%" display="flex" alignItems="center" justifyContent="center">
            <Typography width="192px">{commonSubject[sectionId - 1]}</Typography>
            <TextField
              variant="standard"
              onChange={handleChange}
              value={answer}
              fullWidth
              autoComplete="off"
              autoFocus
            />
          </Box>
          <PulseButton autoEffect size="50px" bgcolor="#097fa1" color="#fff" disabled={answer === ""}>
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
  box-shadow: 0 0 16px ${(props) => props.theme.palette.info.light};
  background: ${(props) => props.theme.palette.info.light};
  border-radius: 8px;
  color: #fff;
  padding: 8px 12px;
`;

const SForm = styled.form`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.palette.background.default};
  box-shadow: 0 0 8px ${(props) => props.theme.palette.background.default};
  border-radius: 8px;
  padding: 16px 24px;
`;
