import { FC, memo, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Typography, Box } from "@mui/material";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { PulseButton } from "../../atoms";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, getInfoPhaseOptions } from "../../../lib/redux/features/inductionSlice";

type StyleType = {
  delay: number;
};

const InductionSelectOptions: FC = memo(() => {
  const dispatch = useAppDispatch();
  const induction = useAppSelector(inductionSelector);
  const options = induction.options;
  const phase = induction.scene.phase;

  // 選択肢を取得
  useEffect(() => {
    dispatch(getInfoPhaseOptions());
  }, [phase, dispatch]);

  return (
    <>
      {phase === "info" && (
        <SContainer>
          <SBox>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" mb="32px">
              <Typography variant="h5" color="#fff" fontWeight={600} mb="8px">
                解決案を考えるための情報を3つ以上選択してください
              </Typography>
              <KeyboardDoubleArrowDownIcon className="up-down" sx={{ color: "#fff", fontSize: "48px" }} />
            </Box>
            <Box component="ul" mb="64px">
              {options.map((option, index) => (
                <Box component="li" display="inline-block" key={index}>
                  <SCheckBox type="checkbox" id={index + "item"} />
                  <STypography htmlFor={index + "item"} key={index} delay={index}>
                    <Typography variant="h6" component="span">
                      {option.text}
                    </Typography>
                  </STypography>
                </Box>
              ))}
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <PulseButton size="100px" color="#ffa726">
                <Typography color="#fff" fontWeight={600} sx={{ textShadow: "0 0 2px #555", letterSpacing: 3 }}>
                  決定
                </Typography>
              </PulseButton>
            </Box>
          </SBox>
        </SContainer>
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

const SContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle, rgba(33, 33, 33, 0.9) 25%, rgba(55, 55, 55, 0.9));
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SBox = styled.div`
  width: 80vw;
  height: 80vh;
  text-align: center;
`;
const STypography = styled.label<StyleType>`
  display: block;
  cursor: pointer;
  background: #f9fbe7;
  border-radius: 8px;
  box-shadow: 0 0 8px #f9fbe7;
  animation: ${fadeIn} 1s ${(props) => props.delay}s ease-in-out forwards;
  padding: 8px 12px;
  margin-right: 32px;
  margin-bottom: 32px;
  padding: 8px 12px;
  opacity: 0;
  transition: box-shadow 0.2s;
`;
const SCheckBox = styled.input`
  display: none;
  &:checked + label {
    box-shadow: 0 0 8px 4px #ffa726;
  }
`;
