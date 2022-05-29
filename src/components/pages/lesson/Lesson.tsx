import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Lesson: React.FC = React.memo(() => {
  return (
    <SBackground>
      <Outlet />
    </SBackground>
  );
});

export default Lesson;

const SBackground = styled.div`
  overflow: hidden;
  min-height: calc(100vh - 64px);
  z-index: -999;
  background: #f8fbfe;
`;
