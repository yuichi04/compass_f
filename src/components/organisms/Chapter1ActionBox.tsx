import React, { useState } from "react";
import { Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import {
  chapter1Selector,
  setSceneAction,
  setBalloonAction,
  setCharacterLinesAction,
  setActionBoxAction,
} from "../../lib/redux/features/chapter1Slice";
// import { showLoadingAction, hideLoadingAction } from "../../lib/redux/features/lodingSlice";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { MuiTextFieldWithAdornment, MuiButton } from "../atoms";

const Chapter1UserOperationBox: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const chapter1 = useAppSelector(chapter1Selector);
  const sceneId = chapter1.id;
  const action = chapter1.action;
  const actionValue = chapter1.actionValue;
  const isOpenActionBox = chapter1.isOpenActionBox;
  const isProgressScene = chapter1.isProgressScene;
  const characterLinesCount = chapter1.characterLines.length;

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
    dispatch(setBalloonAction(false));
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
                padding: "16px 32px",
                bgcolor: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(10px)",
                borderRadius: "8px",
                animationDelay: `${characterLinesCount / 2 + characterLinesCount + 1}s`, // キャラクターがセリフを言い終わってから1秒遅延させる
                opacity: 0,
              }}
            >
              {action === "button" ? (
                <MuiButton
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    isProgressScene ? dispatch(setSceneAction(sceneId)) : dispatch(setCharacterLinesAction(""))
                  }
                >
                  {actionValue}
                </MuiButton>
              ) : (
                action === "textField" && (
                  <form onSubmit={handleSubmit} className="fade_in">
                    <MuiTextFieldWithAdornment
                      icon={<CreateIcon />}
                      onChange={handleChange}
                      value={answer}
                      fullWidth
                      autoComplete="off"
                      margin="none"
                      label={actionValue}
                      variant="standard"
                      autoFocus
                    />
                    <div className="module-spacer-sm" />
                    <MuiButton variant="contained" color="primary" fullWidth type="submit">
                      決定
                    </MuiButton>
                  </form>
                )
              )}
            </Box>
          )}
    </>
  );
});

export default Chapter1UserOperationBox;
