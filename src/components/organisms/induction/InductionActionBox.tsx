import { FC, memo } from "react";
import styled, { keyframes } from "styled-components";
import { Box, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import {
  inductionSelector,
  returnToPreviousPhaseAction,
  setNextStaticSceneAction,
  showUtilsAction,
} from "../../../lib/redux/features/inductionSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { SlideInBox } from "../../molecules";

const InductionActionBox: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const id = induction.sceneId;
  const lines = induction.scene.lines;
  const linesLength = lines.join("").length;
  const options = induction.scene.options;
  const displaySpeed = induction.displaySpeedOfLines;
  const phase = induction.scene.phase;

  // 選択肢の属性を設定する処理
  const handleClickNextScene = (optionProgressAttribute: boolean, id: number) => {
    if (optionProgressAttribute) {
      switch (phase) {
        case "info":
        case "common":
        case "conclusion":
        case "check":
          // 回答画面を表示
          dispatch(showUtilsAction({ key: "screenForAnswers", value: true }));
          break;
        default:
          // 次のシーンに進行
          dispatch(setNextStaticSceneAction(id));
      }
    } else {
      // 1つ前のシーンに戻る
      dispatch(returnToPreviousPhaseAction());
    }
  };

  return (
    <>
      {/* 選択肢の表示 */}
      {options?.map((option, index) => (
        <SlideInBox
          key={index}
          position="absolute"
          direction="right"
          duration={0.3}
          distance={64}
          delay={linesLength * displaySpeed + 0.2 + index / 2}
          b={`${240 + (options.length - 1) * 64 - index * 64}px`}
          r="0"
        >
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => handleClickNextScene(option.progress, id)}
          >
            <SOptionBox>
              <SOptionInner>
                <MoreHorizIcon
                  fontSize="large"
                  sx={{ bgcolor: "#ececec", borderRadius: "100%", color: "#555", p: "4px", mr: "8px" }}
                />
                <Typography
                  variant="h6"
                  color="#ececec"
                  fontWeight={600}
                  fontFamily={"'Noto Sans JP', sans-serif"}
                  letterSpacing={1.5}
                  p="4px 16px 8px 0"
                  sx={{ textShadow: "0 0 4px #333" }}
                >
                  {option.label}
                </Typography>
              </SOptionInner>
            </SOptionBox>
          </Box>
        </SlideInBox>
      ))}
    </>
  );
});

export default InductionActionBox;

const moveLeftAndRight = keyframes`
0% {
  transform: translate(0, -50%);
}
50% {
  transform: translate(-8px, -50%);
}
100% {
  transform: translate(0, -50%);
}
`;

const SOptionBox = styled.div`
  position: relative;
  background: linear-gradient(90deg, rgba(38, 50, 56, 0.8), rgba(38, 50, 56, 0.6) 75%, rgba(38, 50, 56, 0.4));
  box-shadow: 0 0 4px 2px #ccc;
  border-top-left-radius: 64px;
  border-bottom-left-radius: 64px;
  padding: 2px;
  padding-left: 8px;
  transform: translateX(10px);
  transition: all 0.2s;
  min-width: 280px;

  &:hover {
    box-shadow: 0 0 12px #fff;

    &::before {
      content: "";
      position: absolute;
      left: -32px;
      top: 50%;
      height: 24px;
      width: 24px;
      background: #fff;
      clip-path: polygon(0 0, 0% 100%, 100% 50%);
      transform: translateY(-50%);
      animation-name: ${moveLeftAndRight};
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
`;

const SOptionInner = styled.div`
  display: flex;
  align-items: center;
`;
