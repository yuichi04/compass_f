import React, { useState } from "react";
import { Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import {
  chapter1Selector,
  setSceneAction,
  setBalloonAction,
  setAnswerAction,
  setActionBoxAction,
} from "../../lib/redux/features/chapter1Slice";
import { showLoadingAction, hideLoadingAction } from "../../lib/redux/features/lodingSlice";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { MuiTextFieldWithAdornment, MuiButton } from "../atoms";

const Chapter1UserOperationBox: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(chapter1Selector);
  const sceneId = selector.id;
  const action = selector.action;
  const actionValue = selector.actionValue;
  const isOpenActionBox = selector.isOpenActionBox;
  const characterLinesCount = selector.characterLines.length;

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
    // TODO:ユーザーの回答をサーバーに送信する
    // dispatch(setBalloonAction(false));
    // dispatch(setActionBoxAction(false));
    // dispatch(setAnswerAction(answer));
    // dispatch(hideLoadingAction());
    // サーバーからレスポンスが返ってくるまでローディングを表示する
    // 下のコードはテスト用
    const loading = () => {
      dispatch(setBalloonAction(false));
      dispatch(setActionBoxAction(false));
      dispatch(setAnswerAction(answer));
      dispatch(hideLoadingAction());
    };
    dispatch(showLoadingAction("回答確認中..."));
    setTimeout(() => loading(), 500);
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
                bgcolor: "#e0f2f1",
                borderRadius: "8px",
                animationDelay: `${characterLinesCount + 1}s`, // キャラクターがセリフを言い終わってから1秒遅延させる
                opacity: 0,
              }}
            >
              {action === "button" ? (
                <MuiButton variant="contained" color="primary" onClick={() => dispatch(setSceneAction(sceneId))}>
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
                      回答する
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
