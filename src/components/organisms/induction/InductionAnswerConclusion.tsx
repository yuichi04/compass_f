import { FC, memo, useState } from "react";
// Modules
import styled from "styled-components";
import { TextField, Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SendIcon from "@mui/icons-material/Send";
// Redux
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  changeEditAttributeAction,
  inductionSelector,
  setEditedAnswerAction,
  setNextDynamicSceneAction,
} from "../../../redux/features/inductionSlice";
import { lessonSelector, toggleShowAndHideInterfaceAction } from "../../../redux/features/lessonSlice";
// Components
import { PulseButton } from "../../atoms";
import { SlideInBox, TitleWithTriangleIcon } from "../../molecules";

const InductionAnswerConclusion: FC = memo(() => {
  const dispatch = useAppDispatch();
  // lesson selector
  const lesson = useAppSelector(lessonSelector);
  const isOpen = lesson.isOpen;
  // induction selector
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const common = induction.userAnswers.common;
  const isEditFromCheckPhase = induction.isEditUserAnswersFromCheckPhase;

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

    // 新規回答なら次のシーンに進行させる
    // チェックフェーズから呼び出されている場合は、シーンは進行させずに編集フラグをオフにする
    if (isEditFromCheckPhase.conclusion) {
      // 編集内容をstoreに保存
      dispatch(setEditedAnswerAction({ key: "conclusion", value: answer }));
      // 編集フラグをオフに
      dispatch(changeEditAttributeAction({ key: "conclusion", value: false }));
    } else {
      // 回答画面を非表示にする
      dispatch(toggleShowAndHideInterfaceAction({ key: "screenForAnswers", open: !isOpen.screenForAnswers }));
      // セリフを生成し表示する処理。表示を0.1秒遅延させる
      setTimeout(() => dispatch(setNextDynamicSceneAction(answer)), 100);
    }
    // ユーザーの回答を初期化
    setAnswer("");
  };

  return (
    <SBox>
      <TitleWithTriangleIcon variant="h4" color="#fff" mb="16px">
        共通点から具体的な解決案を考えましょう
      </TitleWithTriangleIcon>
      <Typography variant="h6" color="#fff" mb="32px">
        {sectionId === 1 && "英語が話せるようになるにはどうしたら良いでしょうか？"}
        {sectionId === 2 && "脱入門レベルになるにはどのような方法が良いでしょうか？"}
      </Typography>

      <SlideInBox direction="top" distance={32} duration={1.6} delay={0.8} mb="64px">
        <Typography
          variant="h5"
          bgcolor="info.light"
          boxShadow="0 0 8px #097fa1"
          borderRadius="8px"
          color="typography.white"
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
          <PulseButton autoEffect size="50px" bgcolor="#097fa1" color="#fff" disabled={answer === ""}>
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
  background: ${(props) => props.theme.palette.background.default};
  box-shadow: 0 0 12px ${(props) => props.theme.palette.background.default};
  border-radius: 8px;
  padding: 16px 24px;
`;
