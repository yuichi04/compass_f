import { FC, memo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Box, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";

import {
  inductionSelector,
  setNextDynamicSceneAction,
  setNextStaticSceneAction,
} from "../../../lib/redux/features/inductionSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { MuiTextFieldWithAdornment } from "../../molecules";
import { PulseButton } from "../../atoms";

const InductionActionBox: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const id = induction.sceneId;
  const lines = induction.scene.lines;
  const linesLength = lines.join("").length;
  const action = induction.scene.action;
  const displaySpeed = induction.displaySpeedOfLines;

  // ユーザーの回答を管理
  const [answer, setAnswer] = useState("");

  // 回答を入力
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
      {/* 選択肢の表示 */}
      {action?.type === "button" && (
        <Box
          className="fade-in"
          position="absolute"
          right="0"
          bottom="232px"
          sx={{
            display: "flex",
            flexDirection: "column",
            animationDelay: `${linesLength * displaySpeed + 0.2}s`, // セリフが全部表示されてから0.2秒後に表示する
            opacity: 0,
          }}
          onClick={() => dispatch(setNextStaticSceneAction(id))}
        >
          <SOptionBox>
            <SOptionInner>
              <MoreHorizIcon
                fontSize="large"
                sx={{ bgcolor: "#ececec", borderRadius: "100%", color: "#555", p: "4px", mr: "8px" }}
              />
              <Typography
                variant="h6"
                color="#ececec"
                fontWeight={600}
                fontFamily={"'Noto Sans JP', sans-serif"}
                letterSpacing={1.5}
                p="4px 16px 8px 0"
                sx={{ textShadow: "0 0 4px #333" }}
              >
                {action.label}
              </Typography>
            </SOptionInner>
          </SOptionBox>
        </Box>
      )}

      {/* 入力欄の表示 */}
      {action?.type === "textField" && (
        <Box
          position="absolute"
          left="50%"
          bottom="280px"
          boxShadow="0 0 70px rgba(255,255,255,0.9)"
          className="fade-in"
          sx={{
            display: "flex",
            flexDirection: "column",
            animationDelay: `${linesLength * displaySpeed + 0.2}s`, // セリフが全部表示されてから0.2秒後に表示する
            opacity: 0,
            transform: "translateX(-50%)",
          }}
        >
          <SInputBox onSubmit={handleSubmit}>
            <MuiTextFieldWithAdornment
              icon={<CreateIcon />}
              onChange={handleChange}
              value={answer}
              fullWidth
              autoComplete="off"
              label={action.label}
              variant="standard"
              autoFocus
              multiline
              rows={2}
            />
            <PulseButton size="50px" color="#00aa99">
              <SendIcon sx={{ color: "#fff", fontSize: "20px" }} />
            </PulseButton>
          </SInputBox>
        </Box>
      )}
    </>
  );
});

export default InductionActionBox;

const moveLeftAndRight = keyframes`
0% {
  transform: translate(0, -50%);
}
50% {
  transform: translate(-8px, -50%);
}
100% {
  transform: translate(0, -50%);
}
`;

const SOptionBox = styled.div`
  position: relative;
  background: linear-gradient(90deg, rgba(38, 50, 56, 0.8), rgba(38, 50, 56, 0.6) 75%, rgba(38, 50, 56, 0.4));
  box-shadow: 0 0 4px 2px #ccc;
  border-top-left-radius: 64px;
  border-bottom-left-radius: 64px;
  padding: 2px;
  padding-left: 8px;
  transform: translateX(10px);
  transition: all 0.2s;
  min-width: 280px;

  &:hover {
    box-shadow: 0 0 4px 2px #fff;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      border-top: 14px solid transparent;
      border-right: 14px solid transparent;
      border-bottom: 14px solid transparent;
      border-left: 14px solid #fff;
      animation-name: ${moveLeftAndRight};
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
`;

const SOptionInner = styled.div`
  display: flex;
  align-items: center;
`;

const SInputBox = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 520px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 120px #fff;
  border: double 3px #ccc;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 24px;
  padding: 24px;
`;
