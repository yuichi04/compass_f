import { FC, memo, useState, useEffect } from "react";
// Modules
import styled from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// Redux
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { lessonSelector, toggleShowAndHideInterfaceAction } from "../../../redux/features/lessonSlice";
import {
  inductionSelector,
  getInfoPhaseOptionsAction,
  setNextDynamicSceneAction,
} from "../../../redux/features/inductionSlice";
// Components
import { PulseButton } from "../../atoms";
import { FadeInOutBox, TitleWithTriangleIcon, SlideInBox } from "../../molecules";

const InductionSelectOptions: FC = memo(() => {
  const dispatch = useAppDispatch();
  // lesson selector
  const lesson = useAppSelector(lessonSelector);
  const isOpen = lesson.isOpen;
  // induction selector
  const induction = useAppSelector(inductionSelector);
  const options = induction.selectableInfo;
  const phase = induction.scene.phase;

  // 選択された情報を管理
  const [values, setValues] = useState<number[]>([]);
  // ボタンの活性/非活性を管理
  const [disabled, setDisabled] = useState(true);

  // 選択された情報を保存/削除する処理
  const handleChange = (id: number) => {
    // 既に同じidが存在するか検証
    const exists = values.includes(id);
    // あれば削除
    if (exists) {
      const newValues = values.filter((values) => values !== id);
      setValues(newValues);
    } else {
      // なければ追加する
      setValues([...values, id]);
    }
  };

  // 選択された情報をstoreに保存する処理
  const handleSubmit = () => {
    // 回答画面を非表示
    dispatch(toggleShowAndHideInterfaceAction({ key: "screenForAnswers", open: !isOpen.screenForAnswers }));
    // セリフを生成し表示する処理
    setTimeout(() => dispatch(setNextDynamicSceneAction(values)), 100); // 表示を0.1秒遅延させる
    // ユーザーの回答を初期化
    setValues([]);
  };

  // 選択肢が必要個数選択されているか
  useEffect(() => {
    // 3つ以上なら確認ボタンを活性化
    if (values.length >= 3) {
      setDisabled(false);
    } else {
      // 3つ以下なら非活性に
      setDisabled(true);
    }
  }, [values]);

  // storeから選択肢を取得
  useEffect(() => {
    dispatch(getInfoPhaseOptionsAction());
  }, [phase, dispatch]);

  return (
    <SBox>
      {/* 問題文 */}
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb="8px">
        <TitleWithTriangleIcon variant="h4" color="#fff" fontWeight={600} mb="8px">
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

      {/* 決定ボタン */}
      <FadeInOutBox fadeIn display="flex" alignItems="center" justifyContent="center">
        <PulseButton autoEffect size="100px" bgcolor="#097fa1" color="#fff" disabled={disabled} onClick={handleSubmit}>
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
  background: ${(props) => props.theme.palette.background.default};
  border-radius: 8px;
  box-shadow: 0 0 8px ${(props) => props.theme.palette.background.default};
  cursor: pointer;
  padding: 8px 12px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 16px ${(props) => props.theme.palette.background.default};
  }
`;
const SCheckBox = styled.input`
  display: none;

  &:checked ~ div > label {
    background: ${(props) => props.theme.palette.info.light};
    box-shadow: 0 2px 16px ${(props) => props.theme.palette.info.light};
    color: ${(props) => props.theme.palette.typography.white};
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  }
`;
