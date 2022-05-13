import React from "react";
import { useAppSelector } from "../../lib/redux/hooks";
import { loadingSelector } from "../../lib/redux/lodingSlice";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Spinner: React.FC<Props> = ({ children }) => {
  const { state, text } = useAppSelector(loadingSelector);

  return (
    <>
      {state && (
        <SLoadingContainer>
          <CircularProgress size={50} />
          <SText>{text}</SText>
        </SLoadingContainer>
      )}
      {children}
    </>
  );
};

export default Spinner;

const SLoadingContainer = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
`;
const SText = styled.p`
  color: #333;
  font-weight: 600;
`;
