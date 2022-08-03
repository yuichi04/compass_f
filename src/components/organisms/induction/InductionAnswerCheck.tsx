import { FC, memo, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box, Grid } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setNextDynamicSceneAction } from "../../../lib/redux/features/inductionSlice";
import { TitleWithTriangle } from "../../molecules";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { MuiButton, PulseButton } from "../../atoms";

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
  const induction = useAppSelector(inductionSelector);
  const answers = induction.userAnswers;
  const infoLength = answers.info.length;
  const isOpenScreen = induction.isOpenScreenForAnswers;

  // 共通点がOKかどうか
  const [isCheckedCommon, setIsCheckedCommon] = useState(false);
  // 情報がOKかどうか
  const [isCheckedInfo, setIsCheckedInfo] = useState(false);
  // チェックした情報を管理する
  const [info, setInfo] = useState<string[]>([]);
  // 確認画面の表示・非表示
  const [isOpen, setIsOpen] = useState(false);

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

  const handleClickNextScene = () => {
    dispatch(setNextDynamicSceneAction(true));
  };

  // 選んだ情報とOKにした情報の数が一致しているか確認
  useEffect(() => {
    if (info.length === infoLength) {
      setIsCheckedInfo(true);
    } else {
      setIsCheckedInfo(false);
    }
  }, [info, infoLength]);

  // 全ての項目がOKになっているか確認し、OKなら確認画面を表示する
  useEffect(() => {
    if (isCheckedCommon && isCheckedInfo) {
      setIsOpen(true);
    }
    // 共通点がOKではない場合は、情報数を一致させるために情報を初期化する
    if (!isCheckedCommon) setInfo([]);
  }, [isCheckedCommon, isCheckedInfo, dispatch]);

  return (
    <>
      {isOpenScreen && (
        <SBox>
          <TitleWithTriangle variant="h4" color="#fff" triangleColor="#00aa99" fontWeight={600} mb="8px">
            論理が飛躍していないか確認しましょう
          </TitleWithTriangle>
          <Typography variant="subtitle1" color="#fff" mb="16px">
            【1.結論→共通点】【2.共通点→各情報】はそれぞれ【主張→根拠】という構成になっていますか？
            <br />
            問題がなければその項目をクリックしてください
          </Typography>
          {/* 結論 */}
          <Box
            display="flex"
            justifyContent="center"
            mb="16px"
            bgcolor={isCheckedCommon ? "#d8dadf" : "primary.main"}
            borderRadius="8px"
            boxShadow={isCheckedCommon ? "0 0 4px #fff" : "0 0 20px #00aa99"}
            p="4px 32px"
          >
            <Typography variant="h6" component="div" color={isCheckedCommon ? "#555" : "#fff"} fontWeight={600}>
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
          {isOpen && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              width="100vw"
              height="100vh"
              bgcolor="rgba(255,255,255,0.3)"
              sx={{ transform: "translate(-50%, -50%)" }}
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                width="300px"
                height="200px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="#fff"
                borderRadius="8px"
                boxShadow="0 0 20px #fff"
                sx={{ transform: "translate(-50%, -50%)" }}
              >
                <Box>
                  <Typography mb="32px">論理に飛躍はありませんか？</Typography>
                  <Box display="flex" alignItems="center" justifyContent="center">
                    <MuiButton color="primary" variant="contained" onClick={handleClickNextScene} fullWidth>
                      はい
                    </MuiButton>
                    <Box width="64px" />
                    <MuiButton color="secondary" variant="contained" onClick={() => setIsOpen(false)} fullWidth>
                      やり直す
                    </MuiButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </SBox>
      )}
    </>
  );
});

export default InductionAnswerCheck;

const SBox = styled.div`
  position: relative;
  width: 900px;
  text-align: center;
`;

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

const SCheckbox = styled.input<CheckboxType>`
  display: none;

  &:checked + label {
    background: #00aa99;
    box-shadow: 0 0 4px #00aa99;
    color: #fff;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 8px 2px #00aa99;
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
      box-shadow: 1px 1px 6px #00aa99;
      color: #00aa99;
      font-size: ${(props) => (props.fontSize ? props.fontSize : "40px")};
      font-weight: 600;
      filter: drop-shadow(0 0 6px #00aa99);
      padding: 0 16px;
      text-shadow: 1px 1px 4px #00aa99;
    }
  }
`;

const SLabel = styled.label<LabelType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  box-shadow: 0 0 8px #fff;
  border-radius: 8px;
  color: #555;
  cursor: pointer;
  padding: 4px 8px;
  width: 100%;
  animation: ${slideIn} 1s ${(props) => props.delay}s ease-in-out forwards;
  opacity: 0;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 16px #fff;
  }
`;
