import React, { FC, memo, useEffect, useState } from "react";
// Modules
import styled, { keyframes } from "styled-components";
import { Typography, Box, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
// Redux
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { lessonSelector, toggleShowAndHideInterfaceAction } from "../../../redux/features/lessonSlice";
import {
  changeEditAttributeAction,
  inductionSelector,
  setNextStaticSceneAction,
} from "../../../redux/features/inductionSlice";
// Components
import { PrimaryButton, PulseButton } from "../../atoms";
import { TitleWithTriangleIcon, ScreenForBlackoutEvent, SlideInBox } from "../../molecules";
import InductionSelectOptions from "./InductionSelectOptions";
import InductionAnswerConclusion from "./InductionAnswerConclusion";
import InductionAnswerCommon from "./InductionAnswerCommon";

type LabelType = {
  delay: number;
  isCheckedCommon?: boolean;
  isCheckedInfo?: boolean;
  fontSize?: string;
};

type CheckboxType = {
  fontSize?: string;
  position?: string;
};

const InductionAnswerCheck: FC = memo(() => {
  const dispatch = useAppDispatch();
  // lesson selector
  const lesson = useAppSelector(lessonSelector);
  const isOpen = lesson.isOpen;
  // induction selector
  const induction = useAppSelector(inductionSelector);
  const sceneId = induction.sceneId;
  const answers = induction.userAnswers;
  const isEditFromCheckPhase = induction.isEditUserAnswersFromCheckPhase;
  // 共通点がOKかどうか
  const [isCheckedCommon, setIsCheckedCommon] = useState(false);
  // 情報がOKかどうか
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);
  // チェックした情報を管理する
  const [info, setInfo] = useState<string[]>([]);
  // 確認画面の表示/非表示
  const [isOpenFinalCheck, setIsOpenFinalCheck] = useState(false);

  // 選んだ情報をOKまたはNGに変更する
  const handleChangeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedInfo = e.target.value;
    const exists = info.includes(selectedInfo);
    if (exists) {
      const newInfo = info.filter((data) => data !== selectedInfo);
      setInfo(newInfo);
    } else {
      setInfo([...info, selectedInfo]);
    }
  };

  // ユーザーの回答をstoreに保存
  const handleSubmit = () => {
    // 回答画面を非表示
    dispatch(toggleShowAndHideInterfaceAction({ key: "screenForAnswers", open: !isOpen.screenForAnswers }));
    // セリフを生成し表示する処理
    dispatch(setNextStaticSceneAction(sceneId));
    // ユーザーの回答を初期化
    setIsCheckedCommon(false);
    setIsCheckedInfo(false);
  };

  // 全ての情報がOKになっているか確認
  useEffect(() => {
    if (info.length === answers.info.length) {
      setIsCheckedInfo(true);
    } else {
      setIsCheckedInfo(false);
    }
  }, [info, answers.info.length]);

  // 共通点と選んだ情報が全てOKになっているか確認し、OKなら確認画面を表示
  useEffect(() => {
    if (isCheckedCommon && isCheckedInfo) {
      setIsOpenFinalCheck(true);
    }
    // 共通点がOKではない場合は、情報のフラグを初期化する
    if (!isCheckedCommon) {
      setInfo([]);
      setIsCheckedInfo(false);
    }
  }, [isCheckedCommon, isCheckedInfo, dispatch]);

  // 元々の選んだ情報を初期化し、編集状態にする処理
  const handleEditInfo = () => {
    setInfo([]);
    dispatch(changeEditAttributeAction({ key: "info", value: !isEditFromCheckPhase.info }));
  };

  return (
    <>
      <Box position="absolute" bottom="32px" right="-4px" display="flex" flexDirection="column">
        <SlideInBox direction="right" distance={32} delay={1.5}>
          <PrimaryButton
            variant="contained"
            color="primary"
            onClick={() =>
              dispatch(changeEditAttributeAction({ key: "conclusion", value: !isEditFromCheckPhase.conclusion }))
            }
            disabled={isCheckedCommon || isCheckedInfo}
            fullWidth
          >
            <Box display="flex" alignItems="center" width="100%">
              <ChangeCircleIcon sx={{ mr: "4px" }} />
              結論を変更する
            </Box>
          </PrimaryButton>
        </SlideInBox>
        <Box height="8px" />
        <SlideInBox direction="right" distance={32} delay={2}>
          <PrimaryButton
            variant="contained"
            color="info"
            onClick={() => dispatch(changeEditAttributeAction({ key: "common", value: !isEditFromCheckPhase.common }))}
            disabled={isCheckedCommon || isCheckedInfo}
            fullWidth
          >
            <Box display="flex" alignItems="center" width="100%">
              <ChangeCircleIcon sx={{ mr: "4px" }} />
              共通点を変更する
            </Box>
          </PrimaryButton>
        </SlideInBox>
        <Box height="8px" />
        <SlideInBox direction="right" distance={32} delay={2.5}>
          <PrimaryButton
            variant="contained"
            color="success"
            onClick={handleEditInfo}
            disabled={isCheckedInfo && isCheckedCommon}
            fullWidth
          >
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              color={isCheckedInfo && isCheckedCommon ? "#ccc" : "typography.white"}
            >
              <ChangeCircleIcon sx={{ mr: "4px" }} />
              情報を選択しなおす
            </Box>
          </PrimaryButton>
        </SlideInBox>
      </Box>
      <SBox>
        <TitleWithTriangleIcon variant="h4" color="#fff" fontWeight={600} mb="8px">
          論理が飛躍していないか確認しましょう
        </TitleWithTriangleIcon>
        <Typography variant="h6" color="typography.white" mb="16px">
          【1.結論+共通点】【2.共通点+各情報】はそれぞれ【主張+根拠】という構成になっていますか？
          <br />
          問題がなければ根拠のほうをクリックしてください。
        </Typography>
        {/* 結論 */}
        {!isEditFromCheckPhase.conclusion && (
          <SlideInBox direction="left" distance={32}>
            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              mb="16px"
              bgcolor={isCheckedCommon ? "action.disabled" : "info.light"}
              borderRadius="8px"
              boxShadow={isCheckedCommon ? "0 0 4px #fff" : "0 0 20px #097fa1"}
              p="4px 32px"
            >
              <Typography
                variant="h6"
                component="div"
                color={isCheckedCommon ? "#555" : "#fff"}
                fontWeight={600}
                width="100%"
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  結論
                </Typography>
                {answers.conclusion}
              </Typography>
            </Box>
          </SlideInBox>
        )}

        <Box position="relative" m="0 auto 16px" width="160px" className={isCheckedCommon ? "" : "up-down"}>
          <KeyboardDoubleArrowDownIcon
            sx={{ color: isCheckedCommon ? "rgba(255,255,255,0.1)" : "#ffa726", fontSize: "48px" }}
          />
          <Typography
            position="absolute"
            right="0"
            top="50%"
            variant="subtitle2"
            color="#ffa726"
            display={isCheckedCommon ? "none" : "block"}
            sx={{ transform: "translateY(-50%)" }}
          >
            クリック
          </Typography>
        </Box>

        {/* 共通点 */}
        {!isEditFromCheckPhase.common && (
          <Box display="flex" alignItems="center" mb="16px" width="100%">
            <SCheckbox
              type="checkbox"
              id="common-item"
              position="32px"
              fontSize="48px"
              onChange={() => setIsCheckedCommon(!isCheckedCommon)}
            />
            <SLabel htmlFor="common-item" delay={0.5} isCheckedCommon={isCheckedCommon}>
              <Typography
                variant="h6"
                component="div"
                fontWeight={600}
                width="calc(100% - 104px)"
                m="0 auto"
                p="0 48px"
              >
                <Typography variant="subtitle1" fontWeight={600}>
                  共通点
                </Typography>
                <>{answers.common}</>
              </Typography>
            </SLabel>
          </Box>
        )}

        {isCheckedCommon && !isEditFromCheckPhase.info && (
          <Box position="relative" m="0 auto 16px" width="160px" className={!isCheckedCommon ? "" : "up-down"}>
            <KeyboardDoubleArrowDownIcon
              sx={{ color: !isCheckedCommon ? "rgba(255,255,255,0.1)" : "#ffa726", fontSize: "48px" }}
            />
            <Typography
              position="absolute"
              right="0"
              top="50%"
              variant="subtitle2"
              color="#ffa726"
              display={!isCheckedCommon ? "none" : "block"}
              sx={{ transform: "translateY(-50%)" }}
            >
              クリック
            </Typography>
          </Box>
        )}

        {/* 情報 */}
        {isCheckedCommon && !isEditFromCheckPhase.info && (
          <Grid container display="flex" justifyContent="center">
            {answers.info.map((data, index) => (
              <Grid item xs={4} display="flex" key={index} p="0 8px 16px">
                <SCheckbox
                  type="checkbox"
                  id={"info" + index}
                  fontSize="40px"
                  position="50%"
                  value={data.id}
                  onChange={(e) => handleChangeInfo(e)}
                />
                <SLabel htmlFor={"info" + index} delay={index / 2} fontSize="16px">
                  <Typography variant="subtitle1" fontWeight={600}>
                    {data.text}
                  </Typography>
                </SLabel>
              </Grid>
            ))}
          </Grid>
        )}
      </SBox>
      {isOpenFinalCheck && (
        <ScreenForBlackoutEvent open={isOpenFinalCheck} delay={0.1}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box textAlign="center">
              <Box sx={{ transform: "translateX(24px)" }}>
                <TitleWithTriangleIcon variant="h3" color="#fff" fontWeight={600} mb="64px">
                  論理に飛躍はありませんか？
                </TitleWithTriangleIcon>
              </Box>
              <KeyboardDoubleArrowDownIcon
                className="up-down"
                sx={{
                  color: "#ffa726",
                  fontSize: "64px",
                  mb: "48px",
                }}
              />
              <Box display="flex" alignItems="center" justifyContent="space-between" width="480px" m="0 auto">
                <PulseButton bgcolor="#097fa1" size="160px" onClick={handleSubmit}>
                  <Typography variant="h6" color="#fff" fontWeight={600}>
                    大丈夫
                  </Typography>
                </PulseButton>
                <PulseButton bgcolor="#bbb" size="160px" onClick={() => setIsOpenFinalCheck(false)}>
                  <Typography variant="h6" color="#fff" fontWeight={600}>
                    やり直す
                  </Typography>
                </PulseButton>
              </Box>
            </Box>
          </Box>
        </ScreenForBlackoutEvent>
      )}
      {isEditFromCheckPhase.conclusion && (
        <ScreenForBlackoutEvent open={isEditFromCheckPhase.conclusion} delay={0.1}>
          <InductionAnswerConclusion />
        </ScreenForBlackoutEvent>
      )}
      {isEditFromCheckPhase.common && (
        <ScreenForBlackoutEvent open={isEditFromCheckPhase.common} delay={0.1}>
          <InductionAnswerCommon />
        </ScreenForBlackoutEvent>
      )}
      {isEditFromCheckPhase.info && (
        <ScreenForBlackoutEvent open={isEditFromCheckPhase.info} delay={0.1}>
          <InductionSelectOptions />
        </ScreenForBlackoutEvent>
      )}
    </>
  );
});

export default InductionAnswerCheck;

const slideIn = keyframes`
  0% {
    transform: translateX(-16px);
  }
  100% {
    opacity: 1;
  }
`;
const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1.2) rotate(-3deg);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1) rotate(-9deg);
    opacity: 1;
  }
`;

const SBox = styled.div`
  position: relative;
  width: 900px;
  text-align: center;
`;

const SCheckbox = styled.input<CheckboxType>`
  display: none;
  &:checked + label {
    background: ${(props) => props.theme.palette.info.light};
    box-shadow: 0 0 4px ${(props) => props.theme.palette.info.light};
    color: #fff;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 8px 2px ${(props) => props.theme.palette.info.light};
    }

    &::after {
      content: "OK!";
      position: absolute;
      top: 50%;
      left: ${(props) => props.position && props.position};
      ${(props) => props.position === "50%" && "transform: translateX(-50%)"};
      animation: ${rotate} 0.3s ease-in-out forwards;
      background: #fff;
      border-radius: 16px;
      box-shadow: 1px 1px 6px ${(props) => props.theme.palette.info.light};
      color: ${(props) => props.theme.palette.info.light};
      font-size: ${(props) => (props.fontSize ? props.fontSize : "40px")};
      font-weight: 600;
      filter: drop-shadow(0 0 6px ${(props) => props.theme.palette.info.light});
      padding: 0 16px;
      text-shadow: 1px 1px 4px ${(props) => props.theme.palette.info.light};
    }
  }
`;

const SLabel = styled.label<LabelType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.palette.background.default};
  box-shadow: 0 0 8px ${(props) => props.theme.palette.background.default};
  border-radius: 8px;
  color: ${(props) => props.theme.palette.typography.gray};
  cursor: pointer;
  padding: 4px 8px;
  width: 100%;
  animation: ${slideIn} 0.6s ${(props) => props.delay}s ease-in-out forwards;
  opacity: 0;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 16px ${(props) => props.theme.palette.background.default};
  }
`;
