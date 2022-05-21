import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Story: React.FC = React.memo(() => {
  return (
    <SBackground>
      <Outlet />
    </SBackground>
  );
});

export default Story;

const SBackground = styled.div`
  overflow: hidden;
  height: calc(100vh - 60px);
  z-index: -999;
`;
