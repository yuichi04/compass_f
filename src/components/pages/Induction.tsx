import { FC, memo, useCallback, useEffect } from "react";
// Modules
import styled from "styled-components";
import { Box } from "@mui/material";
// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initializeSlideListAction } from "../../redux/features/slideListSlice";
import {
  initializeSceneAction,
  inductionSelector,
  setNextStaticSceneAction,
} from "../../redux/features/inductionSlice";
import {
  initializeLessonAction,
  lessonSelector,
  toggleShowAndHideInterfaceAction,
} from "../../redux/features/lessonSlice";
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
  InductionResults,
} from "../organisms";
// Data
import { inductionSlideListItemsData, courseTitle } from "../../dataset/induction/SlideListItemsData";

type BgImgProps = {
  bgImg: number;
};

const Scene: FC = memo(() => {
  const dispatch = useAppDispatch();
  // induction selector
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const sceneId = induction.sceneId;
  const phase = induction.scene.phase;
  const narration = induction.scene.narration;
  // lesson selector
  const lesson = useAppSelector(lessonSelector);
  const allowStartingExercise = lesson.allowStartingExercise;
  const isOpen = lesson.isOpen;

  // ナレーションを閉じて、次のシーンに進行させる処理
  const handleCloseNarration = useCallback(() => {
    dispatch(toggleShowAndHideInterfaceAction({ key: "narration", open: !isOpen.narration }));
    dispatch(setNextStaticSceneAction(sceneId));
  }, [dispatch, sceneId, isOpen]);

  // 初期化
  useEffect(() => {
    dispatch(initializeLessonAction());
    dispatch(initializeSceneAction());
    dispatch(initializeSlideListAction());
  }, [dispatch]);

  return (
    <>
      {/* 演習が開始されていない場合は、演習画面が見えないように黒い背景を前面に出す */}
      {!allowStartingExercise ? (
        <Box zIndex={999} position="absolute" top="0" left="0" width="100vw" height="100vh" bgcolor="#2a2f36" />
      ) : null}

      {/* スライド */}
      <SlideList slideListItemsData={inductionSlideListItemsData} courseTitle={courseTitle} />

      {/* 回答画面 */}
      <ScreenForBlackoutEvent open={isOpen.screenForAnswers} animationType="slide-in">
        {isOpen.screenForAnswers && (
          <>
            {phase === "info" && <InductionSelectOptions />}
            {phase === "common" && <InductionAnswerCommon />}
            {phase === "conclusion" && <InductionAnswerConclusion />}
            {phase === "check" && <InductionAnswerCheck />}
          </>
        )}
      </ScreenForBlackoutEvent>

      {/* ナレーション */}
      <Narration open={isOpen.narration} handleClose={handleCloseNarration} text={narration ? narration : ""} />

      {/* リザルト画面 */}
      <InductionResults />

      {/* メイン画面 */}
      <Box bgcolor="#2a2f36">
        <SInduction className={isOpen.slideList ? "" : "path-center"} bgImg={sectionId}>
          {/* ツールバー */}
          <STooltipBar>
            <InductionTooltipBar />
          </STooltipBar>
          {/* 選択肢の表示 */}
          <InductionActionBox />
          {/* 回答 */}
          <SUserAnswers className={isOpen.answers ? "slide-in-top" : "slide-out-top"}>
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
        </SInduction>
      </Box>
    </>
  );
});

export default Scene;

const SInduction = styled.div<BgImgProps>`
  position: relative;
  overflow: hidden;
  height: calc(100vh - 64px);
  background: ${(props) =>
      props.bgImg === 1 || props.bgImg === 2
        ? `url(${BackgroundImage.officeDay})`
        : props.bgImg === 3 && `url(${BackgroundImage.officeEvening})`}
    no-repeat center;
  background-size: cover;
`;
const STooltipBar = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;
const SUserAnswers = styled.div`
  z-index: 997;
  position: relative;
  width: 900px;
  margin: 0 auto;
`;
const SCharacter = styled.div`
  position: absolute;
  bottom: -55%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
`;
const SContainer = styled.div`
  z-index: 996;
  width: 100%;
  height: 100%;
`;
