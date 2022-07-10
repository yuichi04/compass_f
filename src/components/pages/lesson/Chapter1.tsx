import React, { useEffect } from "react";
import styled from "styled-components";
import { BackgroundImage } from "../../../assets/images/background";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { userSelector } from "../../../lib/redux/features/userSlice";
import {
  setSceneAction,
  chapter1Selector,
  initializeSceneAction,
  setResultAction,
  setActionBoxAction,
  setCharacterImageAction,
} from "../../../lib/redux/features/chapter1Slice";
import {
  TooltipBar,
  SlideList,
  Chapter1ActionBox,
  Chapter1Result,
  Chapter1Document,
  CharacterBalloon,
  Chapter1CharacterImage,
} from "../../organisms";

const Scene: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const chapter1 = useAppSelector(chapter1Selector);
  const delay = chapter1.lineDelayTime;
  const progress = chapter1.allowProgress;
  const sceneId = chapter1.id;
  const isStart = chapter1.isStart;
  const characterImage = chapter1.characterImage;
  const linesLength = chapter1.characterLines.join("").length;
  const isLastScene = chapter1.isLastScene;

  // シーンの切り替え処理
  useEffect(() => {
    // ボタンや入力欄を表示する
    dispatch(setActionBoxAction(true));
    // キャラクターを表示する
    dispatch(setCharacterImageAction(true));

    // 最後のシーンだった場合は、一定時間経過後にResultを表示する
    if (isLastScene) {
      const timer = setTimeout(() => dispatch(setResultAction(true)), linesLength * delay * 2000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [linesLength]);

  // シーンの初期値をセット
  useEffect(() => {
    dispatch(initializeSceneAction());
  }, [dispatch]);

  return (
    <>
      <SChapter1 className={isStart ? "expand_center" : ""}>
        {/* ツールバー */}
        <STooltipBar>
          <TooltipBar />
        </STooltipBar>
        {/* ボタン・入力欄 */}
        <SActionBox>
          <Chapter1ActionBox />
        </SActionBox>
        {/* キャラクター表示関連 */}
        <SContainer onClick={() => progress && dispatch(setSceneAction(sceneId))}>
          <SCharacter>
            <Chapter1CharacterImage />
          </SCharacter>
          <Chapter1Document />
          <Chapter1Result />
          <CharacterBalloon role={characterImage.role} username={user.name} />
        </SContainer>
      </SChapter1>
      {/* スライド */}
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
  bottom: 240px;
  transform: translateX(-50%);
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
  cursor: pointer;
`;
