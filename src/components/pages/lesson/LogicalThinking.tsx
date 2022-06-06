import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const LogicalThinking: React.FC = React.memo(() => {
  return (
    <SBox>
      <Outlet />
    </SBox>
  );
});

export default LogicalThinking;

const SBox = styled.div`
  background: #2a2f36;
`;
