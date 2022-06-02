import React from "react";
import { Outlet } from "react-router-dom";

const Lesson: React.FC = React.memo(() => {
  return <Outlet />;
});

export default Lesson;
