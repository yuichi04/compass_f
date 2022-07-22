import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  chapter1Selector,
  setSceneAction,
  setCharacterLinesAction,
  setActionBoxAction,
} from "../../lib/redux/features/chapter1Slice";
// import { showLoadingAction, hideLoadingAction } from "../../lib/redux/features/lodingSlice";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { MuiTextFieldWithAdornment } from "../molecules";

const Chapter1UserOperationBox: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const chapter1 = useAppSelector(chapter1Selector);
  const sceneId = chapter1.id;
  const action = chapter1.action;
  const actionValue = chapter1.actionValue;
  const delay = chapter1.lineDelayTime;
  const isOpenActionBox = chapter1.isOpenActionBox;
  const linesLength = chapter1.characterLines.join("").length;
  const isProgressScene = chapter1.isProgressScene;

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
    /**
     * TODO:
     * ユーザーの回答をサーバーに送信する
     * サーバーからレスポンスが返ってくるまでローディングを表示する
     * */
    dispatch(setActionBoxAction(false));
    dispatch(setCharacterLinesAction(answer));
  };

  return (
    <>
      {action === ""
        ? null
        : isOpenActionBox && (
            <Box
              className="fade_in"
              sx={{
                display: "flex",
                flexDirection: "column",
                animationDelay: `${linesLength * delay + 0.2}s`, // セリフが全部表示されてから表示する
                opacity: 0,
                minWidth: "240px",
              }}
            >
              {action === "button" ? (
                <SOptionBox>
                  <SOptionInner
                    onClick={() =>
                      isProgressScene ? dispatch(setSceneAction(sceneId)) : dispatch(setCharacterLinesAction(""))
                    }
                  >
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
                      {actionValue}
                    </Typography>
                  </SOptionInner>
                </SOptionBox>
              ) : (
                action === "textField" && (
                  <SInputBox onSubmit={handleSubmit}>
                    <MuiTextFieldWithAdornment
                      icon={<CreateIcon />}
                      onChange={handleChange}
                      value={answer}
                      fullWidth
                      autoComplete="off"
                      label={actionValue}
                      variant="standard"
                      size="small"
                      autoFocus
                      multiline
                      rows={2}
                    />
                    <Paper elevation={4} sx={{ borderRadius: "100%", bgcolor: "primary.main", ml: "8px" }}>
                      <IconButton type="submit">
                        <ArrowForwardSharpIcon sx={{ color: "#fff" }} />
                      </IconButton>
                    </Paper>
                  </SInputBox>
                )
              )}
            </Box>
          )}
    </>
  );
});

export default Chapter1UserOperationBox;

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

  &:hover {
    box-shadow: 0 0 4px 2px #fff;
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 16px solid #fff;
    animation-name: ${moveLeftAndRight};
    animation-duration: 1s;
    animation-iteration-count: infinite;
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
  width: 480px;
  background: rgba(255, 255, 255, 0.9);
  border: double 3px rgba(55, 55, 55, 0.4);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;

  &::before {
    content: "";
    position: absolute;
    left: -32px;
    top: 50%;
    transform: translateY(-50%);
    border-top: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-left: 16px solid #fff;
    animation-name: ${moveLeftAndRight};
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
`;
