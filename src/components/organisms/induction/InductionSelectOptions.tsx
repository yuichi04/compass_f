import { FC, memo, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { PulseButton } from "../../atoms";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import {
  inductionSelector,
  getInfoPhaseOptionsAction,
  setNextDynamicSceneAction,
} from "../../../lib/redux/features/inductionSlice";
import { TitleWithTriangle } from "../../molecules";

type StyleType = {
  delay: number;
};

const InductionSelectOptions: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const options = induction.selectableInfo;
  const phase = induction.scene.phase;
  const isOpenScreen = induction.isOpenScreenForAnswers;
  // 選択された情報を管理
  const [values, setValues] = useState<number[]>([]);
  const [disabled, setDisabled] = useState(true);

  // 選択された情報を保存or削除する処理
  const handleChange = (id: number) => {
    // stateに同じidが存在するか検証
    const exists = values.includes(id);
    // あれば削除、なければ追加する
    if (exists) {
      const newValues = values.filter((values) => values !== id);
      setValues(newValues);
    } else {
      setValues([...values, id]);
    }
  };

  // 選択された情報をstoreに保存する処理
  const handleSubmit = () => {
    if (values.length < 3) return;
    dispatch(setNextDynamicSceneAction(values));
    setValues([]);
  };

  // 3つ以上選択されているか
  useEffect(() => {
    if (values.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [values]);

  // 選択肢を取得
  useEffect(() => {
    dispatch(getInfoPhaseOptionsAction());
  }, [phase, dispatch]);

  return (
    <>
      {isOpenScreen && (
        <SBox>
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb="32px">
            <TitleWithTriangle variant="h4" color="#fff" triangleColor="#00aa99" fontWeight={600} mb="8px">
              解決案を考えるための情報を3つ以上選択しましょう
            </TitleWithTriangle>
            <Typography variant="h6" color="#fff" mb="8px">
              選択数が多いと結論を導くのが難しくなりますが、その分、確実性の高い結論を導けます。
            </Typography>
            <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#ffa726", fontSize: "48px" }} />
          </Box>
          <Box component="ul" mb="64px">
            {options.map((option, index) => (
              <Box component="li" display="inline-block" key={index}>
                <SCheckBox type="checkbox" id={index + "item"} onChange={() => handleChange(option.id)} />
                <SLabel htmlFor={index + "item"} delay={(index + 1) / 2}>
                  <Typography variant="h6" component="span">
                    {option.text}
                  </Typography>
                </SLabel>
              </Box>
            ))}
          </Box>
          <Box className="fade-in" display="flex" alignItems="center" justifyContent="center">
            <PulseButton size="100px" bgcolor="#33bbad" color="#fff" disabled={disabled} onClick={handleSubmit}>
              <Typography fontWeight={600} sx={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                決定
              </Typography>
            </PulseButton>
          </Box>
        </SBox>
      )}
    </>
  );
});

export default InductionSelectOptions;

const fadeIn = keyframes`
  0% {
      transform: translateX(-16px);
  }
  100% {
      opacity: 1;
  }
`;

const SBox = styled.div`
  width: 1200px;
  text-align: center;
`;
const SLabel = styled.label<StyleType>`
  display: block;
  background: #f9fbe7;
  border-radius: 8px;
  box-shadow: 0 0 8px #f9fbe7;
  cursor: pointer;
  padding: 8px 12px;
  margin-right: 32px;
  margin-bottom: 32px;
  opacity: 0;
  animation: ${fadeIn} 0.5s ${(props) => props.delay}s ease-in-out forwards;
  transition: all 0.3s;
`;
const SCheckBox = styled.input`
  display: none;
  &:checked + label {
    background: #33bbad;
    box-shadow: 0 2px 16px #33bbad;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }
`;
