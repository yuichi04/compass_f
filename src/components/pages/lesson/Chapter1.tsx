import React, { useCallback, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import { BackgroundImage } from "../../../assets/images/background";
import { Balloon, FadeInTypography, MuiButton, MuiTextFieldWithAdornment } from "../../atoms";
import { TooltipBar } from "../../organisms/index";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import {
  setSceneAction,
  sceneSelector,
  initializeSceneAction,
  setAnswerAction,
  setBalloonAction,
} from "../../../lib/redux/features/chapter1Slice";
import { showLoadingAction, hideLoadingAction } from "../../../lib/redux/features/lodingSlice";

const styles = {
  character: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  container: {
    height: "calc(100vh - 64px)",
    position: "relative",
    background: `url(${BackgroundImage.dayoffice}) no-repeat center`,
    backgroundSize: "cover",
  },
};

const Scene: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const scene = useAppSelector(sceneSelector);
  const characterImage = scene.characterImage;
  const characterLines = scene.characterLines;
  const action = scene.action;
  const actionValue = scene.actionValue;
  const balloon = scene.balloon;
  const auto = scene.auto;
  const elementCount = characterLines.length;

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
    // TODO:ユーザーの回答をサーバーに送信する
    // サーバーからレスポンスが返ってくるまでローディングを表示する
    // 下のコードはテスト用
    const loading = () => {
      dispatch(hideLoadingAction());
      dispatch(setBalloonAction(false));
      dispatch(setAnswerAction(answer));
    };
    dispatch(showLoadingAction("回答確認中..."));
    setTimeout(() => loading(), 500);
  };

  // 次のシーンに切り替える
  const changeNextScene = useCallback(() => {
    dispatch(setBalloonAction(false));
    dispatch(setSceneAction(1));
  }, [dispatch]);

  // シーンの切り替わりを検知
  useEffect(() => {
    // 吹き出しを表示する
    dispatch(setBalloonAction(true));
    // 切り替わったシーンが自動進行のシーンだった場合は、一定時間表示した後にシーンを切り替える
    if (auto?.progress) {
      setTimeout(() => changeNextScene(), auto.displayTime * 1000);
    }
  }, [characterLines, dispatch, auto?.displayTime, auto?.progress, changeNextScene]);

  // シーンの初期値をセット
  useEffect(() => {
    dispatch(initializeSceneAction());
    dispatch(setSceneAction(1));
    dispatch(setBalloonAction(true));
  }, [dispatch]);

  return (
    <Box
      className="expand_center"
      sx={{
        display: "flex",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        height: "100%",
        width: "100%",
      }}
    >
      <Grid container sx={styles.container}>
        <Grid item xs={3} sx={{ position: "relative" }}>
          <TooltipBar />
        </Grid>
        <Grid item xs={6} sx={{ zIndex: 1, position: "relative" }}>
          {action === "" ? null : (
            <Box
              className="fade_in"
              sx={{
                position: "absolute",
                bottom: "32px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                display: "flex",
                flexDirection: "column",
                padding: "16px 32px",
                bgcolor: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(3px)",
                boxShadow: "0 0 6px rgba(255,255,255,0.8)",
                borderRadius: "8px",
                animationDelay: `${elementCount + 1}s`,
                opacity: 0,
              }}
            >
              {action === "button" ? (
                <MuiButton variant="contained" color="primary" onClick={changeNextScene}>
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
        </Grid>
        <Grid item xs={3} sx={{ position: "relative", zIndex: 999 }}>
          <Box sx={{ position: "absolute", left: "-50%", top: "32px", pr: "32px" }}>
            {balloon && (
              <Balloon>
                {characterLines.map((line, index) => (
                  <FadeInTypography delay={index} key={index}>
                    {line}
                  </FadeInTypography>
                ))}
              </Balloon>
            )}
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.character}>
        {characterImage && (
          <img src={require(`../../../assets/images/characters/guide/${characterImage}`)} alt="character" />
        )}
      </Box>
    </Box>
  );
});

export default Scene;
