import React, { useEffect } from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { BackgroundImage } from "../../../assets/images/background";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import {
  setSceneAction,
  chapter1Selector,
  initializeSceneAction,
  setBalloonAction,
  setResultAction,
  setActionBoxAction,
  setCharacterImageAction,
} from "../../../lib/redux/features/chapter1Slice";
import { Balloon, FadeInTypography } from "../../atoms";
import { TooltipBar, SlideList, Chapter1ActionBox, Chapter1Result, Chapter1Document } from "../../organisms";

const Scene: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const chapter1 = useAppSelector(chapter1Selector);
  const sceneId = chapter1.id;
  const isStart = chapter1.isStart;
  const characterImage = chapter1.characterImage;
  const characterLines = chapter1.characterLines;
  const auto = chapter1.auto;
  const isOpenBalloon = chapter1.isOpenBalloon;
  const isShowCharacter = chapter1.isShowCharacter;
  const allowProgress = chapter1.allowProgress;
  const lastSceneId = chapter1.lastSceneId;
  const characterLinesCount = chapter1.characterLines.length;

  // シーンの切り替わりを検知
  useEffect(() => {
    // 吹き出しを表示する
    dispatch(setBalloonAction(true));
    // 操作パネルを表示する
    dispatch(setActionBoxAction(true));
    // キャラクターを表示する
    dispatch(setCharacterImageAction(true));
    // 自動進行シーンの切り替え処理
    if (auto) {
      // 切り替わったシーンが自動進行のシーンだった場合は、一定時間表示した後にシーンを切り替える
      if (auto.progress) {
        const display = setTimeout(() => dispatch(setSceneAction(sceneId)), auto.displayTime * 1000);

        // 最後のシーンだった場合は、一定時間後にResultを表示する
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
      <SChapter1 className={isStart ? "expand_center" : ""}>
        <STooltipBar>
          <TooltipBar />
        </STooltipBar>
        <SActionBox>
          <Chapter1ActionBox />
        </SActionBox>
        <Box
          width="100%"
          height="100%"
          sx={{ cursor: "pointer" }}
          onClick={() => allowProgress && dispatch(setSceneAction(sceneId))}
        >
          <SCharacter>
            <SCharacterImage>
              {isShowCharacter &&
                (characterImage.role === "user" ? (
                  <Box className="fade_in" width="700px" textAlign="center" pt="30%" sx={{ opacity: 0 }}>
                    <img
                      className="scale_up-down"
                      style={{
                        width: "240px",
                        background: "#fff",
                        borderRadius: "100%",
                        padding: "32px",
                      }}
                      src={require(`../../../assets/images/characters/${characterImage.src}`)}
                      alt="user"
                    />
                  </Box>
                ) : (
                  <img
                    className="fade_in"
                    style={{ minHeight: "200%", opacity: 0 }}
                    src={require(`../../../assets/images/characters/${characterImage.src}`)}
                    alt="guide"
                  />
                ))}
              <SBalloon>
                {isOpenBalloon && (
                  <Balloon>
                    {characterLines.map((line, index) => (
                      <FadeInTypography delay={index} key={index}>
                        {line}
                      </FadeInTypography>
                    ))}
                    {allowProgress && (
                      <FadeInTypography delay={characterLinesCount / 2 + characterLinesCount - 1}>
                        <Box className="up_down" display="flex" alignItems="center" justifyContent="flex-end">
                          <Typography className="fade_in" variant="body2" fontWeight={600} color="primary.light">
                            次へ
                          </Typography>
                          <ArrowRightIcon color="primary" />
                        </Box>
                      </FadeInTypography>
                    )}
                  </Balloon>
                )}
              </SBalloon>
            </SCharacterImage>
          </SCharacter>
        </Box>
        <Chapter1Document />
        <Chapter1Result />
      </SChapter1>
      <SlideList />
    </>
  );
});

export default Scene;

const SChapter1 = styled.div`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 64px);
  background: url(${BackgroundImage.dayoffice}) no-repeat center;
  background-size: cover;
`;
const STooltipBar = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;
const SActionBox = styled.div`
  z-index: 999;
  position: absolute;
  left: 50%;
  bottom: 15%;
  transform: translateX(-50%);
  min-width: 600px;
`;
const SCharacter = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  display: flex;
`;
const SCharacterImage = styled.div`
  position: relative;
  height: 100%;
`;
const SBalloon = styled.div`
  position: absolute;
  right: 25%;
  top: 3%;
  transform: translateX(100%);
  max-width: 400px;
`;
