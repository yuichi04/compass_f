import { FC, memo, useEffect } from "react";
// Modules
import styled from "styled-components";
import { Box } from "@mui/material";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initializeSlideListAction, slideListSelector } from "../../redux/features/slideListSlice";
import {
  initializeSceneAction,
  inductionSelector,
  setNextStaticSceneAction,
} from "../../redux/features/inductionSlice";
import { exerciseSelector } from "../../redux/features/exerciseSlice";
// Images
import { BackgroundImage } from "../../assets/images/background";
// Components
import { Narration, ScreenForBlackoutEvent } from "../molecules";
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
// Data
import { inductionSlideListItemsData, courseTitle } from "../../dataset/induction/SlideListItemsData";

type BgImgProps = {
  bgImg: number;
};

const Scene: FC = memo(() => {
  const dispatch = useAppDispatch();
  // induction slice
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const id = induction.sceneId;
  const isOpenUserAnswers = induction.isOpen.answers;
  const isOpenScreen = induction.isOpen.screenForAnswers;
  const isOpenNarration = induction.isOpen.narration;
  const phase = induction.scene.phase;
  const narration = induction.scene.narration;
  // exercise slice
  const exercise = useAppSelector(exerciseSelector);
  const allowStartingExercise = exercise.allowStartingExercise;
  // slidelist slice
  const slidelist = useAppSelector(slideListSelector);
  const isOpenSlideList = slidelist.isOpen;

  // シーンの切り替え処理
  //   useEffect(() => {
  //     // 最後のシーンだった場合は、一定時間経過後にResultを表示する
  //     if (isLastScene) {
  //       const timer = setTimeout(() => dispatch(setResultAction(true)), linesLength * delay * 2000);
  //       return () => clearTimeout(timer);
  //     }
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [linesLength]);

  // 初期化
  useEffect(() => {
    dispatch(initializeSceneAction());
    dispatch(initializeSlideListAction());
  }, [dispatch]);

  return (
    <>
      {/* 演習が開始されていない場合は、演習画面が見えないように黒い背景を前面に出す */}
      {/* {!allowStartingExercise ? (
        <Box zIndex={999} position="absolute" top="0" left="0" width="100vw" height="100vh" bgcolor="#2a2f36" />
      ) : null} */}

      {/* スライド */}
      <SlideList slideListItemsData={inductionSlideListItemsData} courseTitle={courseTitle} />

      {/* 回答画面 */}
      <ScreenForBlackoutEvent open={isOpenScreen} animationType="slide-in">
        {isOpenScreen && (
          <>
            {phase === "info" && <InductionSelectOptions />}
            {phase === "common" && <InductionAnswerCommon />}
            {phase === "conclusion" && <InductionAnswerConclusion />}
            {phase === "check" && <InductionAnswerCheck />}
          </>
        )}
      </ScreenForBlackoutEvent>

      {/* ナレーション画面 */}
      <Narration
        open={isOpenNarration}
        handleClose={() => dispatch(setNextStaticSceneAction(id))}
        text={narration ? narration : ""}
      />

      <SInduction className={!isOpenSlideList ? "path-center" : ""} bgImg={sectionId}>
        {/* <Box bgcolor="#2a2f36"> */}
        {/* 演習画面 */}
        {/* ツールバー */}
        <STooltipBar>
          <InductionTooltipBar />
        </STooltipBar>
        {/* 選択肢の表示 */}
        <InductionActionBox />
        {/* 回答 */}
        <SUserAnswers className={isOpenUserAnswers ? "slide-in-top" : "slide-out-top"}>
          <InductionUserAnswers />
        </SUserAnswers>
        {/* ボタンやツールバーを除く操作画面 */}
        <SContainer>
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
        {/* </Box> */}
      </SInduction>
    </>
  );
});

export default Scene;

const SInduction = styled.div<BgImgProps>`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 64px);

  // セクションに応じて背景を変更
  background: ${(props) =>
      props.bgImg === 1
        ? `url(${BackgroundImage.officeDay})`
        : props.bgImg === 2
        ? `url(${BackgroundImage.officeEvening})`
        : props.bgImg === 3 && `url(${BackgroundImage.officeNight})`}
    no-repeat center;
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
