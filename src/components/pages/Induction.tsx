import { FC, memo, useEffect } from "react";
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
  InductionAnswerCommon,
  InductionAnswerConclusion,
  InductionAnswerCheck,
} from "../organisms";

type BgImageProps = {
  bgImage: number;
};

const Scene: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const id = induction.sceneId;
  const isOpenSlide = induction.isOpenSlide;
  const isOpenUserAnswers = induction.isOpenAnswers;
  const isOpenScreen = induction.isOpenScreenForAnswers;
  const allowStartingExercise = induction.allowStartingExercise;
  const allowProgressScene = induction.allowProgressScene;
  const phase = induction.scene.phase;

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
      {/* 演習が開始されていない場合は、演習画面が見えないように黒い背景を前面に出す */}
      {!allowStartingExercise ? (
        <Box zIndex={999} position="absolute" top="0" left="0" width="100vw" height="100vh" bgcolor="#2a2f36" />
      ) : null}

      {/* 情報選択画面 */}
      <SScreenForAnswers className={isOpenScreen ? "fade-in-screen" : "fade-out-screen"}>
        {phase === "info" && <InductionSelectOptions />}
        {phase === "common" && <InductionAnswerCommon />}
        {phase === "conclusion" && <InductionAnswerConclusion />}
        {phase === "check" && <InductionAnswerCheck />}
      </SScreenForAnswers>

      <Box bgcolor="#2a2f36">
        {/* スライド */}
        <SlideList />
        {/* 演習画面 */}
        <SInduction className={!isOpenSlide ? "expand-center" : ""} bgImage={sectionId}>
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
        </SInduction>
      </Box>
    </>
  );
});

export default Scene;

const SScreenForAnswers = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle, rgba(33, 33, 33, 0.9) 25%, rgba(55, 55, 55, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SInduction = styled.div<BgImageProps>`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 64px);
  background: ${(props) =>
      props.bgImage === 1
        ? `url(${BackgroundImage.officeDay})`
        : props.bgImage === 2
        ? `url(${BackgroundImage.officeEvening})`
        : props.bgImage === 3 && `url(${BackgroundImage.officeNight})`}
    no-repeat center;
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
