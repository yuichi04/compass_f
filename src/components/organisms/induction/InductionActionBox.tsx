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

const InductionActionBox: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const id = induction.sceneId;
  const lines = induction.scene.lines;
  const linesLength = lines.join("").length;
  const options = induction.scene.options;
  const displaySpeed = induction.displaySpeedOfLines;
  const phase = induction.scene.phase;

  return (
    <>
      {/* 選択肢の表示 */}
      {options?.map((option, index) => (
        <Box
          key={index}
          className="slide-in-right"
          position="absolute"
          right="0"
          bottom={`${240 + (options.length - 1) * 64 - index * 64}px`}
          sx={{
            display: "flex",
            flexDirection: "column",
            // セリフが全部表示されてから0.2秒後に表示する
            animationDelay: `${linesLength * displaySpeed + 0.2 + index / 2}s`,
            opacity: 0,
          }}
          // シーンを進行するか、回答画面を表示するかを分岐
          onClick={() =>
            option.progress
              ? phase === "info" || phase === "common" || phase === "conclusion" || phase === "check"
                ? dispatch(showUtilsAction({ key: "screenForAnswers", value: true }))
                : dispatch(setNextStaticSceneAction(id))
              : dispatch(returnToPreviousPhaseAction())
          }
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
    cursor: pointer;

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
