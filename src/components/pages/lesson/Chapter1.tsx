import React, { useEffect } from "react";
import { Grid, Box, Modal } from "@mui/material";
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
import { Balloon, FadeInTypography, LinkTo, MuiButton } from "../../atoms";
import { TooltipBar, SlideList, Chapter1UserOperationBox } from "../../organisms";

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
  const isOpenResult = selector.isOpenResult;
  const userAnswerList = selector.userAnswerList;
  const sceneCount = selector.sceneCount;

  // シーンの切り替わりを検知
  useEffect(() => {
    // 吹き出しを表示する
    dispatch(setBalloonAction(true));

    // 操作パネルを表示する
    dispatch(setActionBoxAction(true));

    // 切り替わったシーンが自動進行のシーンだった場合は、一定時間表示した後にシーンを切り替える
    if (auto?.progress) {
      setTimeout(() => dispatch(setSceneAction(sceneId)), auto.displayTime * 1000);

      // 最後のシーンだった場合は、一定時間後にリザルトを表示する
      if (sceneId === sceneCount) {
        setTimeout(() => dispatch(setResultAction(true)), auto.displayTime * 1000);
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
            <Chapter1UserOperationBox />
          </Grid>
          <Grid item xs={3} sx={{ position: "relative", zIndex: 999 }}>
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
        <Modal open={isOpenResult}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "90vh",
              bgcolor: "background.paper",
              boxShadow: 12,
              p: 4,
              overflow: "scroll",
            }}
          >
            <ul>
              {userAnswerList.map((answer) => (
                <li key={answer.id}>{answer.answer}</li>
              ))}
            </ul>
            <LinkTo to="/">
              <MuiButton variant="contained" color="primary">
                終了する
              </MuiButton>
            </LinkTo>
          </Box>
        </Modal>
      </Box>
      <SlideList />
    </>
  );
});

export default Scene;
