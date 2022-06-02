import React from "react";
import { Outlet } from "react-router-dom";

const LogicalThinking: React.FC = React.memo(() => {
  return <Outlet />;
});

export default LogicalThinking;
