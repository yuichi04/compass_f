import React, { useEffect } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { BackgroundImage } from "../../assets/images/background";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import {
  setNextStaticSceneAction,
  initializeSceneAction,
  inductionSelector,
} from "../../lib/redux/features/inductionSlice";
import {
  InductionTooltipBar,
  SlideList,
  InductionActionBox,
  InductionCharacterBalloon,
  InductionCharacterImage,
  InductionUserAnswers,
  InductionSelectOptions,
} from "../organisms";

const Scene: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const id = induction.sceneId;
  const isOpenSlide = induction.isOpenSlide;
  const isOpenUserAnswers = induction.scene.isOpenAnswers;
  const allowStartingExercise = induction.allowStartingExercise;
  const allowProgressScene = induction.allowProgressScene;

  // シーンの切り替え処理
  //   useEffect(() => {
  //     // 最後のシーンだった場合は、一定時間経過後にResultを表示する
  //     if (isLastScene) {
  //       const timer = setTimeout(() => dispatch(setResultAction(true)), linesLength * delay * 2000);
  //       return () => clearTimeout(timer);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [linesLength]);

  // シーンの初期値をセット
  useEffect(() => {
    dispatch(initializeSceneAction());
  }, [dispatch]);

  return (
    <>
      {/* 演習が開始されていない場合は、演習画面が見えないように黒い背景を全面に出す */}
      {!allowStartingExercise ? (
        <Box zIndex={999} position="absolute" top="0" left="0" width="100vw" height="100vh" bgcolor="#2a2f36" />
      ) : null}

      {/* 情報選択画面 */}
      <InductionSelectOptions />

      <Box bgcolor="#2a2f36">
        {/* スライド */}
        <SlideList />
        {/* 演習画面 */}
        <SChapter1 className={!isOpenSlide ? "expand-center" : ""}>
          {/* ツールバー */}
          <STooltipBar>
            <InductionTooltipBar />
          </STooltipBar>
          {/* ボタン・入力欄 */}
          <InductionActionBox />
          {/* 回答 */}
          <SUserAnswers className={isOpenUserAnswers ? "slide-in-top" : "slide-out-top"}>
            <InductionUserAnswers />
          </SUserAnswers>
          {/* ボタンやツールバーを除く操作画面 */}
          <SContainer onClick={() => allowProgressScene && dispatch(setNextStaticSceneAction(id))}>
            {/* キャラクター表示関連 */}
            <SCharacter>
              <InductionCharacterImage />
            </SCharacter>
            <InductionCharacterBalloon />
            {/* 資料 */}
            {/* <Chapter1Document /> */}
            {/* 演習結果 */}
            {/* <Chapter1Result /> */}
          </SContainer>
        </SChapter1>
      </Box>
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
const SUserAnswers = styled.div`
  z-index: 998;
  position: relative;
  width: 900px;
  margin: 0 auto;
`;
const SCharacter = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;
const SContainer = styled.div`
  width: 100%;
  height: 100%;
`;
