import React, { useEffect } from "react";
import { Grid, Box } from "@mui/material";
import { BackgroundImage } from "../../../assets/images/background";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import {
  setSceneAction,
  chapter1Selector,
  initializeSceneAction,
  setBalloonAction,
  setResultAction,
  setActionBoxAction,
} from "../../../lib/redux/features/chapter1Slice";
import { Balloon, FadeInTypography } from "../../atoms";
import { TooltipBar, SlideList, Chapter1ActionBox, Chapter1Result } from "../../organisms";

const styles = {
  character: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  container: {
    height: "100%",
    background: `url(${BackgroundImage.dayoffice}) no-repeat center`,
    backgroundSize: "cover",
  },
};

const Scene: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(chapter1Selector);
  const sceneId = selector.id;
  const characterImage = selector.characterImage;
  const characterLines = selector.characterLines;
  const auto = selector.auto;
  const isOpenBalloon = selector.isOpenBalloon;
  const lastSceneId = selector.sceneCount;

  // シーンの切り替わりを検知
  useEffect(() => {
    // 吹き出しを表示する
    dispatch(setBalloonAction(true));

    // 操作パネルを表示する
    dispatch(setActionBoxAction(true));

    // 自動進行シーンの切り替え処理
    if (auto) {
      // 切り替わったシーンが自動進行のシーンだった場合は、一定時間表示した後にシーンを切り替える
      if (auto.progress) {
        const display = setTimeout(() => dispatch(setSceneAction(sceneId)), auto.displayTime * 1000);

        // 最後のシーンだった場合は、一定時間後に回答一覧を表示する
        if (sceneId === lastSceneId) {
          const timer = setTimeout(() => dispatch(setResultAction(true)), auto.displayTime * 1000);
          return () => clearTimeout(timer);
        }

        // タイマーをリセット
        return () => clearTimeout(display);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterLines]);

  // シーンの初期値をセット
  useEffect(() => {
    dispatch(initializeSceneAction());
  }, [dispatch]);

  return (
    <>
      <Box
        className="expand_center"
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "calc(100vh - 64px)",
        }}
      >
        <Grid container sx={styles.container}>
          <Grid item xs={3} sx={{ position: "relative" }}>
            <TooltipBar />
          </Grid>
          <Grid item xs={6} sx={{ zIndex: 1, position: "relative" }}>
            <Chapter1ActionBox />
          </Grid>
          <Grid item xs={3} sx={{ zIndex: 1, position: "relative" }}>
            <Box sx={{ position: "absolute", left: "-50%", top: "32px", pr: "32px" }}>
              {isOpenBalloon && (
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
        <Chapter1Result />
      </Box>
      <SlideList />
    </>
  );
});

export default Scene;
