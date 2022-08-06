import { FC, memo, useEffect } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { BackgroundImage } from "../../assets/images/background";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  initializeSceneAction,
  inductionSelector,
  showUtilsAction,
  setNextStaticSceneAction,
} from "../../redux/features/inductionSlice";
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
import { FadeInOutBox, Narration, ScreenForBlackoutEvent } from "../molecules";

type BgImgProps = {
  bgImg: number;
};

const Scene: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const sectionId = induction.sectionId;
  const id = induction.sceneId;
  const isOpenSlide = induction.isOpen.slide;
  const isOpenUserAnswers = induction.isOpen.answers;
  const isOpenScreen = induction.isOpen.screenForAnswers;
  const isOpenNarration = induction.isOpen.narration;
  const allowStartingExercise = induction.allowStartingExercise;
  const phase = induction.scene.phase;
  const narration = induction.scene.narration;

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
      <Narration open={isOpenNarration} handleClose={() => dispatch(setNextStaticSceneAction(id))}>
        <FadeInOutBox duration={1} delay={0.4} fadeIn>
          {narration}
        </FadeInOutBox>
      </Narration>

      <Box bgcolor="#2a2f36">
        {/* スライド */}
        <SlideList />
        {/* 演習画面 */}
        <SInduction className={!isOpenSlide ? "expand-center" : ""} bgImg={sectionId}>
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
