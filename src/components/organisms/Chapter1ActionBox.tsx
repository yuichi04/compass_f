import React, { useState } from "react";
import { Box, IconButton, Paper } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import {
  chapter1Selector,
  setSceneAction,
  setCharacterLinesAction,
  setActionBoxAction,
} from "../../lib/redux/features/chapter1Slice";
// import { showLoadingAction, hideLoadingAction } from "../../lib/redux/features/lodingSlice";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { MuiButton } from "../atoms";
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
              }}
            >
              {action === "button" ? (
                <Box minWidth="240px" p="16px 24px" bgcolor="rgba(255,255,255,0.9)">
                  <MuiButton
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() =>
                      isProgressScene ? dispatch(setSceneAction(sceneId)) : dispatch(setCharacterLinesAction(""))
                    }
                  >
                    {actionValue}
                  </MuiButton>
                </Box>
              ) : (
                action === "textField" && (
                  <Box
                    component="form"
                    className="fade_in"
                    width="480px"
                    p="8px 16px"
                    bgcolor="rgba(255,255,255,0.9)"
                    borderRadius="8px"
                    onSubmit={handleSubmit}
                    display="flex"
                    alignItems="center"
                  >
                    <MuiTextFieldWithAdornment
                      icon={<CreateIcon />}
                      onChange={handleChange}
                      value={answer}
                      fullWidth
                      autoComplete="off"
                      margin="dense"
                      label={actionValue}
                      variant="standard"
                      autoFocus
                    />
                    <Paper elevation={4} sx={{ borderRadius: "100%", bgcolor: "primary.main" }}>
                      <IconButton type="submit">
                        <ArrowForwardSharpIcon sx={{ color: "#fff" }} />
                      </IconButton>
                    </Paper>
                  </Box>
                )
              )}
            </Box>
          )}
    </>
  );
});

export default Chapter1UserOperationBox;
