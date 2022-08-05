import { FC, memo, useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import {
  inductionSelector,
  getInfoPhaseOptionsAction,
  setNextDynamicSceneAction,
} from "../../../lib/redux/features/inductionSlice";
import { PulseButton } from "../../atoms";
import { FadeInOutBox, TitleWithTriangleIcon, SlideInBox } from "../../molecules";

const InductionSelectOptions: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const options = induction.selectableInfo;
  const phase = induction.scene.phase;
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
    <SBox>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb="8px">
        <TitleWithTriangleIcon variant="h4" color="#fff" triangleColor="#00aa99" fontWeight={600} mb="8px">
          解決案を考えるための情報を3つ以上選択しましょう
        </TitleWithTriangleIcon>
        <Typography variant="h6" color="#fff">
          選択数が多いほど解決案を導く難易度は上がりますが、確実性は高くなります。慣れている方はより多く選択してみましょう。
        </Typography>
      </Box>

      <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#ffa726", fontSize: "48px" }} />

      {/* 選択肢一覧 */}
      <Box component="ul" mb="64px">
        {options.map((option, index) => (
          <Box component="li" display="inline-block" key={index}>
            <SCheckBox type="checkbox" id={index + "item"} onChange={() => handleChange(option.id)} />
            <SlideInBox direction="left" distance={16} duration={0.5} delay={(index + 1) / 2} m="16px">
              <SLabel htmlFor={index + "item"}>
                <Typography variant="h6" component="span">
                  {option.text}
                </Typography>
              </SLabel>
            </SlideInBox>
          </Box>
        ))}
      </Box>

      <FadeInOutBox fadeIn display="flex" alignItems="center" justifyContent="center">
        <PulseButton size="100px" bgcolor="#33bbad" color="#fff" disabled={disabled} onClick={handleSubmit}>
          <Typography fontWeight={600} sx={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
            決定
          </Typography>
        </PulseButton>
      </FadeInOutBox>
    </SBox>
  );
});

export default InductionSelectOptions;

const SBox = styled.div`
  width: 1200px;
  text-align: center;
`;
const SLabel = styled.label`
  display: block;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 8px #fff;
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 8px 3px #fff;
  }
`;
const SCheckBox = styled.input`
  display: none;

  &:checked ~ div > label {
    background: #33bbad;
    box-shadow: 0 2px 16px #33bbad;
    color: #fff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }
`;
