import React, { useCallback, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { BackgroundImage } from "../../../assets/images/background";
import { Balloon, FadeInTypography, MuiButton, MuiTextField } from "../../atoms";
import { TooltipBar } from "../../organisms/index";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import {
  setSceneAction,
  sceneSelector,
  initializeSceneAction,
  setAnswerAction,
  setBalloonAction,
} from "../../../lib/redux/features/chapter1Slice";

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

// type Props = {
//   setClose: (close: boolean) => void;
// };

const Scene: React.FC = React.memo(() => {
  // const { setClose } = props;
  const dispatch = useAppDispatch();
  const scene = useAppSelector(sceneSelector);
  const characterImage = scene.characterImage;
  const characterLines = scene.characterLines;
  const action = scene.action;
  const actionValue = scene.actionValue;
  const balloon = scene.balloon;

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
    dispatch(setBalloonAction(false));
    dispatch(setAnswerAction(answer));
  };

  // 次のシーンに切り替える
  const handleClickNextScene = useCallback(() => {
    dispatch(setBalloonAction(false));
    dispatch(setSceneAction(1));
  }, [dispatch]);

  // シーンが切り替わったら吹き出しを表示
  useEffect(() => {
    dispatch(setBalloonAction(true));
  }, [characterLines, dispatch]);

  // シーンの初期値をセット
  useEffect(() => {
    dispatch(initializeSceneAction());
    dispatch(setSceneAction(1));
    dispatch(setBalloonAction(true));
  }, [dispatch]);

  return (
    <Box>
      <Grid container sx={styles.container}>
        <Grid item xs={3} sx={{ position: "relative" }}>
          <TooltipBar />
        </Grid>
        <Grid item xs={6} sx={{ zIndex: 1, position: "relative" }}>
          {action === "" ? null : (
            <Box
              sx={{
                position: "absolute",
                bottom: "64px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#e0f2f1",
                borderRadius: "8px",
                padding: "16px 32px",
              }}
            >
              {action === "button" ? (
                <MuiButton variant="contained" color="primary" onClick={handleClickNextScene}>
                  {actionValue}
                </MuiButton>
              ) : (
                action === "textField" && (
                  <form onSubmit={handleSubmit} className="fade_in">
                    <MuiTextField
                      label={actionValue}
                      onChange={handleChange}
                      value={answer}
                      fullWidth
                      autoComplete="off"
                      margin="none"
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
          <Box sx={{ position: "absolute", left: "-50%", padding: "16px 16px 0 0" }}>
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
