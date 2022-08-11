import { FC, memo, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  inductionSelector,
  setNextDynamicSceneAction,
  setNextStaticSceneAction,
} from "../../../redux/features/inductionSlice";
import { TitleWithTriangleIcon } from "../../molecules";
import { PulseButton } from "../../atoms";
import { ScreenForBlackoutEvent } from "../../molecules";
import { lessonSelector, toggleShowAndHideInterfaceAction } from "../../../redux/features/lessonSlice";

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
  const infoLength = answers.info.length;
  // 共通点がOKかどうか
  const [isCheckedCommon, setIsCheckedCommon] = useState(false);
  // 情報がOKかどうか
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);
  // チェックした情報を管理する
  const [info, setInfo] = useState<string[]>([]);
  // 確認画面の表示・非表示
  const [isOpenFinalCheck, setIsOpenFinalCheck] = useState(false);

  // 各情報をOKまたはNGに変更する処理
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

  // 選択した全ての情報がOKになっているか確認
  useEffect(() => {
    if (info.length === infoLength) {
      setIsCheckedInfo(true);
    } else {
      setIsCheckedInfo(false);
    }
  }, [info, infoLength]);

  // 全ての項目がOKになっているか確認し、OKなら確認画面を表示
  useEffect(() => {
    if (isCheckedCommon && isCheckedInfo) {
      setIsOpenFinalCheck(true);
    }
    // 共通点がOKではない場合は、情報のフラグを初期化する
    if (!isCheckedCommon) setInfo([]);
  }, [isCheckedCommon, isCheckedInfo, dispatch]);

  return (
    <>
      <SBox>
        <TitleWithTriangleIcon variant="h4" color="#fff" fontWeight={600} mb="8px">
          論理が飛躍していないか確認しましょう
        </TitleWithTriangleIcon>
        <Typography variant="h6" color="typography.white" mb="32px" sx={{ textDecoration: "underline solid #fff" }}>
          【1.結論→共通点】【2.共通点→各情報】はそれぞれ【主張→根拠】という構成になっていますか？問題がなければクリックしてください。
        </Typography>
        {/* 結論 */}
        <Box
          display="flex"
          justifyContent="center"
          mb="16px"
          bgcolor={isCheckedCommon ? "action.disabled" : "info.light"}
          borderRadius="8px"
          boxShadow={isCheckedCommon ? "0 0 4px #fff" : "0 0 20px #097fa1"}
          p="4px 32px"
        >
          <Typography variant="h5" component="div" color={isCheckedCommon ? "#555" : "#fff"} fontWeight={600}>
            <Typography variant="subtitle1" fontWeight={600}>
              結論
            </Typography>
            {answers.conclusion}
          </Typography>
        </Box>
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
        <Box display="flex" alignItems="center" mb="16px">
          <SCheckbox
            type="checkbox"
            id="common-item"
            position="32px"
            fontSize="48px"
            onChange={() => setIsCheckedCommon(!isCheckedCommon)}
          />
          <SLabel htmlFor="common-item" delay={1} isCheckedCommon={isCheckedCommon}>
            <Typography variant="h6" component="div" fontWeight={600} width="calc(100% - 104px)" m="0 auto" p="0 48px">
              <Typography variant="subtitle1" fontWeight={600}>
                共通点
              </Typography>
              {answers.common}
            </Typography>
          </SLabel>
        </Box>
        {/* 情報 */}
        {isCheckedCommon && (
          <>
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
                  <SLabel htmlFor={"info" + index} delay={index + 0.5} isCheckedInfo={isCheckedInfo} fontSize="16px">
                    <Typography variant="subtitle1" fontWeight={600}>
                      {data.text}
                    </Typography>
                  </SLabel>
                </Grid>
              ))}
            </Grid>
          </>
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
  animation: ${slideIn} 1s ${(props) => props.delay}s ease-in-out forwards;
  opacity: 0;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 16px ${(props) => props.theme.palette.background.default};
  }
`;
