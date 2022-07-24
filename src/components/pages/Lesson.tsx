import { FC, memo } from "react";
import { Outlet } from "react-router-dom";

const Lesson: FC = memo(() => {
  return <Outlet />;
});

export default Lesson;
